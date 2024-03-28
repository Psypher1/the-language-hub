import Image from "next/image";
import { Inter } from "next/font/google";
import PageWrapper from "@layouts/PageWrapper";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<PageWrapper>
			<main className="grid place-items-center">
				<section>
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
							<a >{capitaliseFirstLetter(lang)}</a>
						</Link>
					))}
				</article> */}

					<article className="mb-16 md:mb-28  grid gap-6 text-gray-600  sm:grid-cols-2  md:grid-cols-3">
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
				</section>
				<section>
					<article className="mb-8 p-4">
						<Link
							href="/about"
							className="block text-center text-2xl text-gray-600 transition-all duration-300 ease-in-out hover:scale-105 hover:font-semibold hover:text-sky-600"
						>
							What inspired this project?
						</Link>
					</article>

					<article className="mb-12 bp-6 text-center">
						<h3 className="mb-2 text-lg font-semibold text-gray-600">
							Important Links
						</h3>
						<ul className="s">
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
				</section>
				{/* bottom container */}
			</main>
		</PageWrapper>
	);
}
