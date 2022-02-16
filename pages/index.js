import Image from "next/image";
import Link from "next/link";

import Meta from "@components/Meta";
import { getLanguage } from "@utils/getData";

// TODO: get file slugs to place in link to naviagate to learn section and not have hardcoded values

export async function getStaticProps() {
  // ? How would you get all the slugs?
  const data = getLanguage();

  // * props would be title and slug
  return { props: {} };
}

export default function Home() {
  return (
    <div className="">
      <Meta
        pageMeta={{
          title: "Home",
        }}
      />

      <section className="flex  flex-col items-center justify-center py-12 md:py-16">
        <h1 className="mb-4 text-center text-3xl font-semibold text-sky-700 md:text-4xl lg:text-5xl">
          The Language Hub
        </h1>
        <p className="font-base mb-4 text-gray-600 md:mb-8 md:text-lg lg:text-xl">
          What path do you choose?
        </p>

        <div className=" grid grid-cols-1 gap-4 text-center text-lg font-semibold sm:grid-cols-2 md:grid-cols-3">
          <Link href={`/french/basics`}>
            <a className="home-links">French</a>
          </Link>
          <Link href={`/russian/basics`}>
            <a className="home-links">Russian</a>
          </Link>
          <Link href={`japanese/basics`}>
            <a className="home-links">Japanese</a>
          </Link>
        </div>
      </section>
    </div>
  );
}
