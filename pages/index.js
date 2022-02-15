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

      <section className="py-12 md:py-16 flex flex-col items-center justify-center">
        <h1 className="text-3xl text-center text-sky-700 font-semibold mb-4 md:text-4xl lg:text-5xl">
          The Language Hub
        </h1>
        <p className="font-base md:text-lg mb-4 md:mb-8 lg:text-xl text-gray-600">
          What path do you choose?
        </p>

        <div className=" text-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-lg font-semibold">
          <Link href={`french/basics`}>
            <a className="home-links">French</a>
          </Link>
          <Link href={`russian/basics`}>
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
