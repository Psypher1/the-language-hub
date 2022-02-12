import Image from "next/image";
import Link from "next/link";

import Meta from "@components/Meta";

/*
TODO: get file slugs to place in link to naviagate to learn section and not have hardcoded values
*/

export default function Home() {
  return (
    <div className="px-8">
      <Meta
        pageMeta={{
          title: "The Language Hub",
        }}
      />

      <main className="py-16 flex flex-col items-center justify-center">
        <h1 className="text-4xl text-center text-sky-700 font-semibold mb-2">
          The Language Hub
        </h1>
        <p>What path do you choose?</p>.
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-lg font-semibold">
          <Link href={`french/basics`}>
            <a className="bg-sky-700 text-sky-100  py-2 px-8 rounded hover:border hover:border-sky-700 hover:bg-sky-100 hover:text-sky-700 transition-all duration-500 ease-in-out">
              French
            </a>
          </Link>
          <Link href={`russian/basics`}>
            <a className="border border-sky-700 hover:bg-sky-700 hover:text-sky-100  text-sky-700 py-2 px-8 rounded transition-all duration-500 ease-in-out">
              Russian
            </a>
          </Link>
          <span className="bg-sky-700 text-sky-100 py-2 px-8 rounded">
            Spanish
          </span>
        </div>
      </main>
    </div>
  );
}
