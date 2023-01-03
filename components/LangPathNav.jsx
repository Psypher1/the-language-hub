import Link from "next/link";

export default function LangPathNav({ langPath }) {
	// Language Navigation Styling
	const menuItem =
		"px-5 py-2 hover:bg-sky-600 text-xs hover:font-medium uppercase rounded site-transition";
	const isActive = "bg-sky-900 ";

	const languages = [
		{ name: "French", path: "french" },
		{ name: "Japanese", path: "japanese" },
		{ name: "Ndebele", path: "ndebele" },
		{ name: "Russian", path: "russian" },
		{ name: "Shona", path: "shona" },
		{ name: "Swahili", path: "swahili" },
	];

	return (
		<div className="flex items-center justify-center space-x-2 bg-sky-700 px-8 py-3 text-base text-sky-100">
			{languages.map(({ path, name }) => (
				<Link key={name} href={`/${path}/basics`}>
					<a className={`${menuItem} ${langPath === path ? isActive : ""}`}>
						{name}
					</a>
				</Link>
			))}
		</div>
	);
}
