import fs from "fs";
import path from "path";

import matter from "gray-matter";

import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";

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
export async function getStaticProps({ params: { langPath, slug } }) {
  const learn = fs.readFileSync(path.join("learn", langPath, slug + ".md"));

  const { data: metaData, content } = matter(learn);

  const mdxSource = await serialize(content, { scope: metaData });
  return { props: { source: mdxSource, langPath, slug } };
}

export default function LangaugePath({ source, langPath, slug }) {
  return (
    <div className="flex p-8 md:p-12">
      <aside className="hidden md:block pr-8 ">
        <h3 className="text-sky-600  md:text-lg ">Language Topics</h3>
      </aside>
      <main className="">
        <div className="content-style">
          <MDXRemote {...source} />
        </div>
      </main>
    </div>
  );
}
