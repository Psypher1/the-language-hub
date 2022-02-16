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
      <div className="md:block hidden">
        <LangPathNav langPath={langPath} />
      </div>
      <div className="md:flex md:p-12 flex-row-reverse p-8">
        <section className="md:mb-0 flex-1 mb-16">
          <p className="text-base text-gray-600">{metaData.title}</p>
          {/* classes extracted to globals.css */}
          <article className="content-font-sizes content-colors content-quote prose">
            <MDXRemote {...source} />
          </article>
        </section>
        <aside className="bg-sky-700 text-sky-100 md:mr-8 md:block md:w-56 w-full p-4 mr-0">
          <h3 className="md:text-lg mb-4 font-semibold">{language} Path</h3>
          <Sidebar slug={slug} menu={menu} metaData={metaData} />
        </aside>
      </div>
    </>
  );
}
