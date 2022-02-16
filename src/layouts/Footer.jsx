import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-sky-700 text-sky-100 px-8 py-4 text-base text-center">
      <div className=" flex items-center justify-center gap-4">
        <h4>The Language Hub © 2022</h4>
        <span className="md:block hidden">|</span>
        <h4 className="md:block hidden">
          Created by{" "}
          <Link href="https://twitter.com/Psypher1">
            <a
              className="ease hover:italic text-lg font-semibold transition duration-300"
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
