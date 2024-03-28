import fs from "fs";
import path from "path";

// Imports for woriking with markdown
import matter from "gray-matter";

// Components
import Meta from "@meta/Meta";
import LangPathNav from "@features/LangPathNav";
import Sidebar from "@features/Sidebar";

// Lookup import to render sidebar items
import { _menuLookup } from "@utils/_menuLookup";
import { capitaliseFirstLetter } from "@utils/helpers";

import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

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

	// console.log("DATA;  ", content);

	//const mdxSource = await serialize(content, { scope: metaData });
	// console.log(`${langPath}/${slug}`);

	// REMARK
	// const processedContent = await remark().use(html).process(content);
	// const contentHtml = processedContent.toString();

	// console.log("CONTENT=================", contentHtml);

	// const finalContent = unified()
	// 	.use(remarkParse)
	// 	.use(remarkRehype)
	// 	.use(rehypeReact, { createElement: React.createElement })
	// 	.processSync(content).result;

	// console.log("AAAAAAAAAAAAAAAAA", finalContent);
	return {
		props: { content, langPath, slug, metaData },
	};
}

export default function LangLesson({
	source,
	langPath,
	content,
	slug,
	metaData,
}) {
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
			<section className="md:flex md:flex-row-reverse p-10  md:p-12">
				<article className="mb-16 flex-1 md:mb-0">
					<h1 className="text-base text-gray-600">{metaData.title}</h1>
					{/* classes extracted to globals.css */}
					<article className="prose   content-colors content-quote content-table content-table prose-a:text-sky-600">
						<Markdown remarkPlugins={[remarkGfm]}>{content}</Markdown>
						{/* <MDXRemote {...source} /> */}
					</article>
				</article>
				<aside className=" mr-0 w-full  bg-sky-700 p-4 text-sky-100 md:mr-8 md:block  md:w-[14.5rem]">
					<div className=" top-40">
						<h3 className="mb-4 font-semibold md:text-lg">{language} Path</h3>
						<Sidebar slug={slug} menu={menu} metaData={metaData} />
					</div>
				</aside>
			</section>
		</>
	);
}
