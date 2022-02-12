import Meta from "@components/Meta";
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
  return { props: { source: mdxSource, langPath, slug, metaData } };
}

/* 
TODO: Diplay all file names relating to learinig path in aside
 */

// this function is to capitalise the first letter of the learning path
function capitalizeFirstLetter(str) {
  return str[0].toUpperCase() + str.slice(1);
}

export default function LangaugePath({ source, langPath, slug, metaData }) {
  const language = capitalizeFirstLetter(langPath);
  // console.log(metaData);
  return (
    <>
      <Meta
        pageMeta={{
          title: metaData.title,
          description: metaData.excerpt,
        }}
      />
      <div className="flex p-8 md:p-12">
        <aside className="hidden pr-8 md:block ">
          <h3 className="text-sky-600 md:text-lg">{language} Path</h3>
        </aside>
        <main className="">
          <p className="text-base text-gray-600">{metaData.title}</p>
          <div className="content-style">
            <MDXRemote {...source} />
          </div>
        </main>
      </div>
    </>
  );
}
