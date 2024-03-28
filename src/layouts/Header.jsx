// import NavDropDown from "@components/NavDropDown";

import NavDropDown from "@features/NavDropDown";
import Image from "next/image";
import Link from "next/link";
// sticky inset-0 flex w-full items-center justify-between bg-sky-50 px-8 py-4 font-semibold text-sky-600 shadow-lg
export default function Header() {
	return (
		<nav className="sticky inset-0 flex w-full items-center justify-between bg-sky-50 px-8 py-4 font-semibold text-sky-600 shadow-lg">
			<Link href="/" className=" flex items-center text-xl">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="#0284c7"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="icon icon-tabler icons-tabler-outline icon-tabler-language text-3xl"
				>
					<path stroke="none" d="M0 0h24v24H0z" fill="none" />
					<path d="M4 5h7" />
					<path d="M9 3v2c0 4.418 -2.239 8 -5 8" />
					<path d="M5 9c0 2.144 2.952 3.908 6.7 4" />
					<path d="M12 20l4 -9l4 9" />
					<path d="M19.1 18h-6.2" />
				</svg>
				<h2 className="ml-1">TLH</h2>
			</Link>

			<div className="flex items-center space-x-2">
				<h3 className="hidden text-base md:block">Choose your path:</h3>

				{/* Dropdown Goes Here */}

				<NavDropDown />
			</div>
		</nav>
	);
}
