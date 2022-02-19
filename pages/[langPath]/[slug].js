// Imports to accesss files
import fs from "fs";
import path from "path";

// Imports for woriking with markdown
import matter from "gray-matter";

import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";

// Components
import Meta from "@components/Meta";
import Sidebar from "@components/Sidebar";
import LangPathNav from "@components/LangPathNav";

// Lookup import to render sidebar items
import { _menuLookup } from "@utils/_menuLookup";

export async function getStaticPaths() {
  // get the directory for all language info
  const learnDir = await path.join("learn");
  // get dir for all langugage paths
  const languagePathsDirs = await fs.readdirSync(learnDir);
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
  const learn = await fs.readFileSync(
    path.join("learn", langPath, slug + ".md")
  );

  const { data: metaData, content } = matter(learn);

  const mdxSource = await serialize(content, { scope: metaData });
  // console.log(`${langPath}/${slug}`);
  return {
    props: { source: mdxSource, langPath, slug, metaData },
    revalidate: 60,
  };
}

// this function is to capitalise the first letter of the learning path
function capitalizeFirstLetter(str) {
  return str[0].toUpperCase() + str.slice(1);
}

export default function LangaugePath({ source, langPath, slug, metaData }) {
  // console.log(`${langPath}/${slug}`);
  const language = capitalizeFirstLetter(langPath);

  // run the lookup on the language path
  const menu = _menuLookup(langPath);

  return (
    <>
      <Meta
        pageMeta={{
          title: metaData.title,
          description: metaData.excerpt,
        }}
      />
      <div className="hidden md:block">
        <LangPathNav langPath={langPath} />
      </div>
      <div className="flex-row-reverse p-8 md:flex md:p-12">
        <section className="mb-16 flex-1 md:mb-0">
          <p className="text-base text-gray-600">{metaData.title}</p>
          {/* classes extracted to globals.css */}
          <article className="content-font-sizes content-colors content-quote prose">
            <MDXRemote {...source} />
          </article>
        </section>
        <aside className="min mr-0  w-full bg-sky-700 p-4 text-sky-100 md:mr-8 md:block md:w-56">
          <h3 className="mb-4 font-semibold md:text-lg">{language} Path</h3>
          <Sidebar slug={slug} menu={menu} metaData={metaData} />
        </aside>
      </div>
    </>
  );
}
