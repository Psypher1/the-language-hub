import fs from "fs";
import path from "path";

export async function getStaticPaths() {
  // get the directory for all language info
  const languageDir = path.join("learn");
  // get dir for all langugage paths
  const languagePathsDirs = fs.readdirSync(languageDir);
  // array where all the paths will be added to
  const allPaths = [];

  languagePathsDirs.forEach((langPath) => {
    const langPathDir = path.join(languageDir, langPath);

    const files = fs.readdirSync(langPathDir);

    files.forEach((filename) => {
      const path = {
        params: {
          langPath: langPath,
          slug: filename.replace(".md", ""),
        },
      };
      allPaths.push(path);
    });
  });

  return {
    paths: allPaths,
    fallback: false,
  };
}
export async function getStaticProps() {}

export default function LangaugePath() {
  return (
    <div>
      <aside>Language Topics</aside>
      <main> Main Content</main>
    </div>
  );
}
