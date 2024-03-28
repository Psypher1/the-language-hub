import PageWrapper from "@layouts/PageWrapper";
import Meta from "@meta/Meta";
import Link from "next/link";

import { useRouter } from "next/router";
import { useEffect } from "react";
import Home from ".";
import HomeIcon from "@ui/icons/home";

export default function NotFound({}) {
	const router = useRouter();

	// fires function when compenent first renders
	useEffect(() => {
		setTimeout(() => {
			router.push("/");
		}, 5000);
	}, [router]);

	return (
		<PageWrapper>
			<Meta
				pageMeta={{
					title: "Don't have that yet",
				}}
			/>
			<article className=" flex flex-col items-center justify-center text-gray-600">
				<h2 className="mb-4 text-center text-2xl font-semibold text-sky-700  md:text-3xl lg:text-4xl">
					Oh, darn! 😟
				</h2>
				<p className="mb-12 text-base text-gray-600 md:text-lg lg:text-xl">
					We do not have that yet...
				</p>

				<section className="content-font-sizes content-colors prose mx-auto  mb-20 text-center sm:mb-24 md:mb-32 md:text-left">
					<h3 className="mb-4">What can you do?</h3>

					<ul>
						<li>
							<Link
								className="ease mb-4 block text-lg transition duration-300 hover:text-sky-600"
								href="https://twitter.com/Psypher1/"
								target="_blank"
								rel="noopener noreferrer"
							>
								Message me on Twitter
							</Link>
						</li>
						<li>
							<Link
								className="ease mb-4 block text-lg transition duration-300 hover:text-sky-600"
								href="https://github.com/Psypher1/the-language-hub/issues"
								target="_blank"
								rel="noopener noreferrer"
							>
								Open an issue on github
							</Link>
						</li>
						<li>
							<Link
								className="ease mb-4 block text-lg transition duration-300 hover:text-sky-600"
								href="https://github.com/Psypher1/the-language-hub/issues"
								target="_blank"
								rel="noopener noreferrer"
							>
								Correct something you saw I got incorrect.
							</Link>
						</li>
					</ul>
				</section>
				<div className="block items-center justify-center space-x-4 border-t border-sky-600 p-4 text-xl md:flex">
					<h4 className="mb-1 flex items-center md:mb-0 ">
						We&apos;re now taking you
						<Link
							href="/"
							target="_blank"
							rel="noopener noreferrer"
							className="ml-4 flex items-center gap-1 text-sky-600 transition-all duration-300 ease-in-out hover:scale-105"
						>
							<HomeIcon />
							home
						</Link>
					</h4>
				</div>
			</article>
		</PageWrapper>
	);
}
