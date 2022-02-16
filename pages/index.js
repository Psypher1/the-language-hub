import Image from "next/image";
import Link from "next/link";

import Meta from "@components/Meta";
import { getLanguage } from "@utils/getData";
import PageWrapper from "@layouts/PageWrapper";

// TODO: get file slugs to place in link to naviagate to learn section and not have hardcoded values

export async function getStaticProps() {
  // ? How would you get all the slugs?
  const data = getLanguage();

  // * props would be title and slug
  return { props: {} };
}

const languages = [
  { name: "French", target: "/french/basics" },
  { name: "Japanese", target: "/japanese/basics" },
  { name: "Russian", target: "/russian/basics" },
  { name: "Shona", target: "/shona/basics" },
];

export default function Home() {
  return (
    <PageWrapper>
      <Meta
        pageMeta={{
          title: "Home",
        }}
      />

      <section className="flex flex-col items-center justify-center">
        <h1 className="text-sky-700 md:mb-12 md:text-4xl lg:text-5xl mb-8 text-3xl font-semibold text-center">
          The Language Hub
        </h1>
        <p className="md:text-lg lg:text-xl mb-6 text-base text-gray-600">
          What path do you choose?
        </p>
        {/* Grid Items */}
        <div className=" sm:md-24 sm:grid-cols-2 md:mb-32 md:grid-cols-3 lg:grid-cols-4 grid grid-cols-1 gap-4 mb-20 text-lg font-semibold text-center">
          {languages.map((lang) => (
            <Link key={lang.name} href={lang.target}>
              <a className="home-links">{lang.name}</a>
            </Link>
          ))}
        </div>
        <div className="border-sky-600 p-4 border-t">
          <Link href="/about">
            <a className="hover:scale-105 hover:font-semibold block text-xl text-right text-gray-600 transition-all duration-300 ease-in-out">
              About this project
            </a>
          </Link>
        </div>
      </section>
    </PageWrapper>
  );
}
