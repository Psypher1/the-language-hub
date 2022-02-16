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

const languages = [
  { name: "French", target: "/french/basics" },
  { name: "Japanese", target: "/japanese/basics" },
  { name: "Russian", target: "/russian/basics" },
  { name: "Shona", target: "/shona/basics" },
];

export default function Home() {
  return (
    <div className="">
      <Meta
        pageMeta={{
          title: "Home",
        }}
      />

      <section className="md:py-16 flex flex-col items-center justify-center py-12">
        <h1 className="text-sky-700 md:text-4xl lg:text-5xl mb-4 text-3xl font-semibold text-center">
          The Language Hub
        </h1>
        <p className="font-base md:mb-8 md:text-lg lg:text-xl mb-4 text-gray-600">
          What path do you choose?
        </p>

        <div className=" sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid grid-cols-1 gap-4 text-lg font-semibold text-center">
          {languages.map((lang) => (
            <Link key={lang.name} href={lang.target}>
              <a className="home-links">{lang.name}</a>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
