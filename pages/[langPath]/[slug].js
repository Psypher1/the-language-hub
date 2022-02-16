import Meta from "@components/Meta";
import fs from "fs";
import path from "path";

import matter from "gray-matter";

import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";

import Sidebar from "@components/Sidebar";
import LangPathNav from "@components/LangPathNav";

import { _menuLookup } from "@utils/learn/_menuLookup";

export async function getStaticPaths() {
  // get the directory for all language info
  const learnDir = path.join("learn");
  // get dir for all langugage paths
  const languagePathsDirs = fs.readdirSync(learnDir);
  // array where all the paths will be added to
  const allPaths = [];

  languagePathsDirs.forEach((langPath) => {
    const langPathDir = path.join(learnDir, langPath);

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
  console.log(`${langPath}/${slug}`);
  return { props: { source: mdxSource, langPath, slug, metaData } };
}

// this function is to capitalise the first letter of the learning path
function capitalizeFirstLetter(str) {
  return str[0].toUpperCase() + str.slice(1);
}

/* 
TODO: Diplay all file names relating to lear path in aside
 */
export default function LangaugePath({ source, langPath, slug, metaData }) {
  // console.log(`${langPath}/${slug}`);
  const language = capitalizeFirstLetter(langPath);

  const menu = _menuLookup(langPath);

  return (
    <>
      <Meta
        pageMeta={{
          title: metaData.title,
          description: metaData.excerpt,
        }}
      />
      <LangPathNav langPath={langPath} />
      <div className="flex p-8 md:p-12 ">
        <aside className="hidden w-56 min-h-screen p-4 mr-8 md:block text-sky-100 bg-sky-700">
          <h3 className="mb-4 font-semibold  md:text-lg">{language} Path</h3>
          <Sidebar slug={slug} menu={menu} metaData={metaData} />
        </aside>
        <section className="">
          <p className="text-base text-gray-600">{metaData.title}</p>
          {/* classes extracted to globals.css */}
          <article className="prose content-font-sizes content-colors">
            <MDXRemote {...source} />
          </article>
        </section>
      </div>
    </>
  );
}
