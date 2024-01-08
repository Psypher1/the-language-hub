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
import { capitaliseFirstLetter } from "@utils/helpers";

export async function getStaticPaths() {
	// get the directory for all language info
	const learnDir = path.join("learn");
	// get directories for all langugage paths
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
	const learn = fs.readFileSync(path.join("learn", langPath, slug + ".md"));

	const { data: metaData, content } = matter(learn);

	const mdxSource = await serialize(content, { scope: metaData });
	// console.log(`${langPath}/${slug}`);
	return {
		props: { source: mdxSource, langPath, slug, metaData },
	};
}

export default function LangaugePath({ source, langPath, slug, metaData }) {
	const language = capitaliseFirstLetter(langPath);

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
			<header className="hidden md:block">
				<LangPathNav langPath={langPath} />
			</header>
			<section className="flex-row-reverse p-10 md:flex md:p-12">
				<article className="mb-16 flex-1 md:mb-0">
					<h1 className="text-base text-gray-600">{metaData.title}</h1>
					{/* classes extracted to globals.css */}
					<article className="content-font-sizes content-colors content-quote prose prose-a:text-sky-800 prose-a:hover:text-sky-600 prose-strong:text-sky-900 ">
						<MDXRemote {...source} />
					</article>
				</article>
				<aside className="mr-0 w-full  bg-sky-700 p-4 text-sky-100 md:mr-8 md:block  md:w-[14.5rem]">
					<h3 className="mb-4 font-semibold md:text-lg">{language} Path</h3>
					<Sidebar slug={slug} menu={menu} metaData={metaData} />
				</aside>
			</section>
		</>
	);
}
