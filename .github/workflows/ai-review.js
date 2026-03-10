// .github/scripts/ai-review.js
// Fetches the PR diff, sends it to GitHub Models (GPT-4o), and posts the review back to GitHub.
// No external API keys needed — only the auto-provided GITHUB_TOKEN.

const GITHUB_TOKEN      = process.env.GITHUB_TOKEN;
const GITHUB_REPOSITORY = process.env.GITHUB_REPOSITORY;
const PR_NUMBER         = process.env.PR_NUMBER;

const GITHUB_API        = 'https://api.github.com';
const GITHUB_MODELS_API = 'https://models.inference.ai.azure.com/chat/completions';
const MODEL             = 'gpt-4o';

const MAX_PATCH_CHARS   = 20000;

// ─── GitHub helpers ──────────────────────────────────────────────────────────

async function githubGet(path) {
  const response = await fetch(`${GITHUB_API}${path}`, {
    headers: {
      'Authorization': `Bearer ${GITHUB_TOKEN}`,
      'Accept': 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
    },
  });

  if (!response.ok) {
    throw new Error(`GitHub GET ${path} failed: ${response.status} ${await response.text()}`);
  }

  return response.json();
}

async function githubPost(path, body) {
  const response = await fetch(`${GITHUB_API}${path}`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${GITHUB_TOKEN}`,
      'Accept': 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error(`GitHub POST ${path} failed: ${response.status} ${await response.text()}`);
  }

  return response.json();
}

// ─── Diff helpers ─────────────────────────────────────────────────────────────

function annotatePatch(patch) {
  if (!patch) return '';

  const lines  = patch.split('\n');
  const result = [];
  let newLine  = 0;

  for (const line of lines) {
    const hunkMatch = line.match(/^@@ -\d+(?:,\d+)? \+(\d+)(?:,\d+)? @@/);

    if (hunkMatch) {
      newLine = parseInt(hunkMatch[1], 10);
      result.push(line);
      continue;
    }

    if (line.startsWith('+')) {
      result.push(`L${newLine}  ${line}`);
      newLine++;
    } else if (line.startsWith('-')) {
      result.push(`       ${line}`);
    } else {
      result.push(`L${newLine}  ${line}`);
      newLine++;
    }
  }

  return result.join('\n');
}

function buildDiffBlock(files) {
  let output = '';

  for (const file of files) {
    if (file.status === 'removed') continue;
    if (!file.patch) continue;

    output += `\n${'─'.repeat(60)}\n`;
    output += `File: ${file.filename} [${file.status}]\n`;
    output += `${'─'.repeat(60)}\n`;
    output += annotatePatch(file.patch);
    output += '\n';

    if (output.length > MAX_PATCH_CHARS) {
      output += '\n[diff truncated — too large to display in full]\n';
      break;
    }
  }

  return output.trim();
}

// ─── GitHub Models (GPT-4o) ───────────────────────────────────────────────────

async function reviewWithGPT4o(diff, prMeta) {
  const prompt = `You are an expert code reviewer. You will be given a GitHub pull request diff and must return a thorough review.

## Pull Request
- Title: ${prMeta.title}
- Author: ${prMeta.user.login}
- Branch: ${prMeta.head.ref} → ${prMeta.base.ref}

## Diff
Each changed line is prefixed with its line number in the new file (e.g. "L42  + const foo = bar").
Removed lines are shown with a "-" prefix but no line number.

${diff}

## Your Task
Review the diff for:
- **Code quality** — clarity, naming, structure, duplication
- **Security** — injections, exposed secrets, auth flaws, unsafe operations
- **Logic & bugs** — off-by-one errors, null/undefined risks, incorrect conditions, broken edge cases
- **Performance** — unnecessary loops, unoptimised queries, missing indexes, large allocations

Respond ONLY with a valid JSON object. No markdown fences, no preamble. Use this exact shape:

{
  "summary": "<A clear markdown summary of the overall review. Mention what looks good, then what needs attention. Use markdown headings and lists.>",
  "issues": [
    {
      "path": "<relative file path>",
      "line": <integer line number from the L{N} annotations — must be a number, not null>,
      "severity": "<error | warning | suggestion>",
      "body": "<Specific, actionable comment explaining the issue and how to fix it>"
    }
  ]
}

Rules:
- Only include issues for lines that have an L{N} annotation (i.e. lines present in the new file).
- If there are no inline issues, return an empty array for "issues".
- "severity" must be exactly one of: error, warning, suggestion.
- Do not hallucinate line numbers — only use numbers you saw in the diff.`;

  const response = await fetch(GITHUB_MODELS_API, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${GITHUB_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: MODEL,
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 4096,
      temperature: 0.2,
    }),
  });

  if (!response.ok) {
    throw new Error(`GitHub Models API failed: ${response.status} ${await response.text()}`);
  }

  const data = await response.json();
  const raw  = data.choices[0].message.content;

  try {
    return JSON.parse(raw);
  } catch (err) {
    const cleaned = raw.replace(/^```(?:json)?\n?/m, '').replace(/\n?```$/m, '').trim();
    return JSON.parse(cleaned);
  }
}

// ─── Posting to GitHub ────────────────────────────────────────────────────────

const SEVERITY_EMOJI = {
  error:      '🔴',
  warning:    '🟡',
  suggestion: '🔵',
};

function formatInlineComment(issue) {
  const emoji = SEVERITY_EMOJI[issue.severity] || '⚪';
  return `${emoji} **${issue.severity.charAt(0).toUpperCase() + issue.severity.slice(1)}**\n\n${issue.body}`;
}

async function postReview(owner, repo, prNumber, reviewData, commitSha) {
  const comments = (reviewData.issues || []).map(function(issue) {
    return {
      path: issue.path,
      line: issue.line,
      side: 'RIGHT',
      body: formatInlineComment(issue),
    };
  });

  const summaryHeader = `## 🤖 AI Code Review\n\n${reviewData.summary}`;
  const footer        = `\n\n---\n*Powered by GitHub Models (${MODEL})*`;

  await githubPost(`/repos/${owner}/${repo}/pulls/${prNumber}/reviews`, {
    commit_id: commitSha,
    body:      summaryHeader + footer,
    event:     'COMMENT',
    comments:  comments,
  });

  console.log(`✅ Review posted — ${comments.length} inline comment(s)`);
}

// ─── Entry point ──────────────────────────────────────────────────────────────

async function main() {
  const [owner, repo] = GITHUB_REPOSITORY.split('/');

  console.log(`Reviewing PR #${PR_NUMBER} in ${GITHUB_REPOSITORY}…`);

  const [prMeta, files] = await Promise.all([
    githubGet(`/repos/${owner}/${repo}/pulls/${PR_NUMBER}`),
    githubGet(`/repos/${owner}/${repo}/pulls/${PR_NUMBER}/files`),
  ]);

  const commitSha = prMeta.head.sha;
  const diff      = buildDiffBlock(files);

  if (!diff) {
    console.log('No reviewable changes found (only deletions or binary files).');
    return;
  }

  console.log(`Sending diff to ${MODEL} via GitHub Models (${diff.length} chars)…`);

  const reviewData = await reviewWithGPT4o(diff, prMeta);

  await postReview(owner, repo, PR_NUMBER, reviewData, commitSha);
}

main().catch(function(err) {
  console.error('Review failed:', err.message);
  process.exit(1);
});
