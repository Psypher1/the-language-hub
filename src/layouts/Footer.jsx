import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-sky-700 px-8 py-4 text-center text-base text-sky-100">
      <div className=" flex items-center justify-center gap-4">
        <h4>The Language Hub © 2022</h4>
        <span className="hidden md:block">|</span>
        <h4 className="hidden md:block">
          Created by{" "}
          <Link href="https://twitter.com/Psypher1">
            <a
              className="ease text-lg font-semibold transition duration-300 hover:italic"
              target="_blank"
              rel="noopener noreferrer"
            >
              James Midzi
            </a>
          </Link>
        </h4>
      </div>
    </footer>
  );
}
