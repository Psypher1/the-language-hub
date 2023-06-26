import Link from "next/link";
import React from "react";

export default function Footer() {
	return (
		<footer className="bg-sky-700 px-8 py-4 text-center text-base text-sky-100">
			<div className=" flex items-center justify-center gap-2">
				<h4> © 2022 - present. The Language Hub</h4>
				<span className="hidden md:block">|</span>
				<h4 className="hidden md:block">Powered by Open Source</h4>
			</div>
		</footer>
	);
}
