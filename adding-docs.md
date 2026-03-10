Here's everything you need to know. Starlight **v0.30.0** is the version that dropped Astro v4 support and requires Astro v5, so you need to pin to **`@astrojs/starlight@0.29.2`** — the last version that works with Astro v4.

The key difference from the current docs is that v0.29 uses the **old content collections API** (no `docsLoader`). Here's the correct manual setup for Astro v4:

---

### 1. Install Starlight v0.29.2

```bash
npm install @astrojs/starlight@0.29.2
```

---

### 2. Update `astro.config.mjs`

```js
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  integrations: [
    starlight({
      title: "My Docs Site",
    }),
  ],
});
```

---

### 3. Configure content collections — `src/content/config.ts`

⚠️ On Astro v4, this file lives at **`src/content/config.ts`** (NOT `src/content.config.ts` as the current docs say). Also, there's **no `docsLoader`** import.

```ts
import { defineCollection } from "astro:content";
import { docsSchema } from "@astrojs/starlight/schema";

export const collections = {
  docs: defineCollection({ schema: docsSchema() }),
};
```

If you also need i18n translations:

```ts
import { defineCollection } from "astro:content";
import { docsSchema, i18nSchema } from "@astrojs/starlight/schema";

export const collections = {
  docs: defineCollection({ schema: docsSchema() }),
  i18n: defineCollection({ type: "data", schema: i18nSchema() }),
};
```

---

### 4. Add your docs content

Create Markdown/MDX files under `src/content/docs/`. For example:

```
src/content/docs/index.md
src/content/docs/guides/getting-started.md
```

Each file needs at minimum a `title` in its frontmatter:

```md
---
title: Getting Started
description: A guide to getting started.
---

Your content here.
```

---

## Make doc be on url/docs

Add the `base` option to the Starlight integration in your `astro.config.mjs`:

```js
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  integrations: [
    starlight({
      title: "My Docs Site",
      base: "/docs",
    }),
  ],
});
```

Then make sure your content is under `src/content/docs/` as normal — Starlight handles the routing automatically, so `src/content/docs/getting-started.md` will be accessible at `myurl/docs/getting-started`.

Your root index page for the docs would be `src/content/docs/index.md`, resolving to `myurl/docs/`.
