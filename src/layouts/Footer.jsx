import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="flex items-center justify-center gap-4 bg-sky-700 px-8 py-4 text-center text-base text-sky-100">
      <h4>The Language Hub © 2022</h4>
      <span className="hidden md:block">|</span>
      <h4 className="hidden md:block">
        Created by{" "}
        <Link href="https://twitter.com/Psypher1">
          <a
            className="text-lg font-semibold"
            target="_blank"
            rel="noopener noreferrer"
          >
            James Midzi
          </a>
        </Link>
      </h4>
      <div className=" bg-gray-400 p-4 text-xl text-sky-400 hover:text-sm">
        <i className="fab fa-twitter"></i>
      </div>
    </footer>
  );
}
