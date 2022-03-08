import Image from "next/image";
import Link from "next/link";

import Meta from "@components/Meta";
import PageWrapper from "@layouts/PageWrapper";

// TODO: get file slugs to place in link to naviagate to learn section and not have hardcoded values

const languages = [
  { name: "French", target: "/french/basics" },
  { name: "Russian", target: "/russian/basics" },
  { name: "Shona", target: "/shona/basics" },
  { name: "Swahili", target: "/swahili/basics" },
];

export default function Home() {
  return (
    <PageWrapper>
      <section className="flex flex-col items-center justify-center">
        <h1 className="mb-6 text-center text-3xl font-semibold text-sky-700 sm:mb-8 md:mb-12 md:text-4xl lg:text-5xl">
          The Language Hub
        </h1>
        <p className="mb-6 text-base text-gray-600 md:text-lg lg:text-xl">
          What path do you choose?
        </p>
        {/* Grid Items */}
        <div className=" sm:md-24 mb-20 grid grid-cols-1 gap-4 text-center text-lg font-semibold sm:grid-cols-2 md:mb-32 md:grid-cols-3 lg:grid-cols-4">
          {languages.map((lang) => (
            <Link key={lang.name} href={lang.target}>
              <a className="home-links">{lang.name}</a>
            </Link>
          ))}
          <Link href="/">
            <p className="rounded border border-gray-600  px-20 py-3 font-normal text-gray-500 md:py-2 md:px-12 ">
              Japanese
            </p>
          </Link>
        </div>
        {/* bottom container */}
        <div className="border-t border-sky-600 p-4">
          <Link href="/about">
            <a className="block text-right text-xl text-gray-600 transition-all duration-300 ease-in-out hover:scale-105 hover:font-semibold">
              About this project
            </a>
          </Link>
        </div>
      </section>
    </PageWrapper>
  );
}
