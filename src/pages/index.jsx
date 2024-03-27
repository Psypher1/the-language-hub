import Link from "next/link";

import PageWrapper from "@layouts/PageWrapper";

// TODO: get file slugs to place in link to naviagate to learn section and not have hardcoded values = COMPLETED

// util imports
import { capitaliseFirstLetter } from "@utils/helpers";

// Imports to accesss files
import fs from "fs";
import path from "path";

export async function getStaticProps() {
	// get the directory for all language info
	const learnDir = path.join("learn");
	// get directories for all langugage paths
	const languagePathsDirs = await fs.readdirSync(learnDir);
	// array where all the paths will be added to

	return {
		props: {
			languagePathsDirs,
		},
	};
}

export default function Home({ languagePathsDirs }) {
	return (
		<PageWrapper>
			<section className="flex flex-col items-center justify-center">
				<h1 className="mb-6 text-center text-3xl font-semibold text-sky-700 sm:mb-8 md:mb-12 md:text-4xl lg:text-5xl">
					The Language Hub
				</h1>
				<p className="mb-8 text-center text-base text-gray-600 md:text-lg lg:text-xl">
					Welcome to your language reference book. <br />
					What path do you choose?
				</p>
				{/* Grid Items */}
				{/* <article className="mb-20 grid grid-cols-1 gap-4 text-center text-lg  sm:mb-24 sm:grid-cols-2 md:mb-32 md:grid-cols-3 lg:grid-cols-4">
					{languagePathsDirs.map((lang) => (
						<Link key={lang} href={`/${lang}/basics`} passHref>
							<a >{capitaliseFirstLetter(lang)}</a>
						</Link>
					))}
				</article> */}

				<article className="mb-20  grid gap-6 text-gray-600  sm:grid-cols-2 md:mb-32 md:grid-cols-3">
					{/* atlaic */}
					<div className="py-4 px-6 shadow shadow-gray-400">
						<h3 className="mb-1">Altaic</h3>
						<div className="space-y-3 text-center">
							<Link href="/japanese/basics" className="home-links">
								Japanese
							</Link>

							<p className="block rounded border border-gray-500 py-2 px-10 text-gray-400">
								Mandarin
							</p>
						</div>
					</div>
					{/* Central Semitiv */}
					<div className="py-4 px-6 shadow shadow-gray-400">
						<h3 className="mb-1">Central Semitic</h3>
						<div className="space-y-3 text-center">
							<Link href="/arabic/basics" className="home-links">
								Arabic
							</Link>
						</div>
					</div>
					{/* Italic */}
					<div className=" py-4 px-6 shadow shadow-gray-400">
						<h3 className="mb-1 ">Italic/Latin</h3>
						<div className="space-y-3 text-center">
							<Link href="/french/basics" className="home-links">
								French
							</Link>

							<p className="block rounded border border-gray-500 py-2 px-10 text-gray-400">
								Spanish
							</p>
						</div>
					</div>
					{/* niger congo */}
					<div className=" py-4 px-6 shadow shadow-gray-400">
						<h3 className="mb-1">Niger-Congo</h3>
						<div className="space-y-3 text-center">
							<Link href="/shona/basics" className="home-links ">
								Shona
							</Link>
							<Link href="/swahili/basics" className="home-links">
								Swahili
							</Link>

							<p className="block rounded border border-gray-500 py-2 px-10 text-gray-400">
								Ndebele
							</p>
						</div>
					</div>
					{/* slavic */}
					<div className=" py-4 px-6 shadow shadow-gray-400">
						<h3 className="mb-1">Slavic</h3>
						<div className="space-y-3 text-center">
							<Link href="/russian/basics" className="home-links">
								Russian
							</Link>
						</div>
					</div>
				</article>

				<article className="mb-12 border-t border-sky-600 p-6 text-center">
					<h3 className="mb-4 text-2xl font-semibold text-gray-600">
						Important Links
					</h3>
					<ul className="space-y-3 ">
						<li>
							<a
								className="text-lg text-sky-600 transition-all duration-300 ease-in-out hover:font-semibold"
								href="https://github.com/Psypher1/the-language-hub"
								target="_blank"
								rel="noopener noreferrer"
							>
								The Langugage Hub on GitHub
							</a>
						</li>
						<li>
							<Link
								className="text-lg text-sky-600 transition-all duration-300 ease-in-out hover:font-semibold"
								href="https://github.com/Psypher1/the-language-hub"
								target="_blank"
								rel="noopener noreferrer"
							>
								The Langugage Hub Docs are currently being written.
							</Link>
						</li>
					</ul>
				</article>
				{/* bottom container */}
				<div className="mb-20 border-t border-sky-600 p-4">
					<Link
						href="/about"
						className="block text-center text-xl text-gray-600 transition-all duration-300 ease-in-out hover:scale-105 hover:font-semibold"
					>
						What inspired this project?
					</Link>
				</div>
			</section>
		</PageWrapper>
	);
}
