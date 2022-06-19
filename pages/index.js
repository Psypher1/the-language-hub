import Link from "next/link";

import PageWrapper from "@layouts/PageWrapper";

// TODO: get file slugs to place in link to naviagate to learn section and not have hardcoded values

const languages = [
  { name: "French", target: "/french/basics" },
  { name: "Ndebele", target: "/ndebele/basics" },
  { name: "Russian", target: "/russian/basics" },
  { name: "Shona", target: "/shona/basics" },
  { name: "Spanish", target: "/spanish/basics" },
  { name: "Swahili", target: "/swahili/basics" },
];

export default function Home() {
  return (
    <PageWrapper>
      <section className="flex flex-col items-center justify-center">
        <h1 className="mb-6 text-center text-3xl font-semibold text-sky-700 sm:mb-8 md:mb-12 md:text-4xl lg:text-5xl">
          The Language Hub
        </h1>
        <p className="mb-8 text-center text-base text-gray-600 md:text-lg lg:text-xl">
          Welcome to your language reference book. <br />
          What path do you choose?
        </p>
        {/* Grid Items */}
        <div className=" mb-20 grid grid-cols-1 gap-4 text-center text-lg  sm:mb-24 sm:grid-cols-2 md:mb-32 md:grid-cols-3 lg:grid-cols-4">
          {languages.map((lang) => (
            <Link key={lang.name} href={lang.target} passHref>
              <a className="home-links">{lang.name}</a>
            </Link>
          ))}
          <Link href="/" passHref>
            <p className="rounded border border-gray-600  px-20 py-3 font-normal text-gray-500 md:py-2 md:px-12 ">
              Japanese
            </p>
          </Link>
        </div>
        {/* bottom container */}
        <div className="mb-20 border-t border-sky-600 p-4">
          <Link href="/about">
            <a className="block text-right text-xl text-gray-600 transition-all duration-300 ease-in-out hover:scale-105 hover:font-semibold">
              What inspired this project?
            </a>
          </Link>
        </div>

        <article className="border-t border-sky-600 p-6 text-center">
          <h3 className="mb-4 text-3xl font-semibold text-gray-600">
            Important Links
          </h3>
          <ul className="space-y-3">
            <li>
              The repository for this project is here:{" "}
              <a
                className="text-lg text-sky-600 transition duration-300 ease-in-out hover:scale-105 hover:font-semibold"
                href="https://github.com/Psypher1/the-language-hub"
                target="_blank"
                rel="noopener noreferrer"
              >
                The Langugage Hub on GitHub
              </a>
            </li>
            <li>
              The Docs page can be found here:{" "}
              <a
                className="text-lg text-sky-600 transition duration-300 ease-in-out hover:scale-105 hover:font-semibold"
                href="https://github.com/Psypher1/the-language-hub"
                target="_blank"
                rel="noopener noreferrer"
              >
                The Langugage Hub Docs
              </a>
            </li>
          </ul>
        </article>
      </section>
    </PageWrapper>
  );
}
