import Image from "next/image";
import Link from "next/link";

import Meta from "@components/Meta";

export default function Home() {
  return (
    <div className="px-8">
      <Meta
        pageMeta={{
          title: "The Language Hub",
        }}
      />

      <main className="py-16 flex flex-col items-center justify-center">
        <h1 className="text-4xl text-sky-700 mb-2">The Language Hub</h1>
        <p>What path do you choose?</p>.
        <div className="grid grid-cols-3 gap-4 text-lg font-semibold">
          <Link href={`learn/langPath/slug`}>
            <a className="bg-sky-700 text-sky-100 py-2 px-8 rounded">French</a>
          </Link>
          <span className="bg-sky-700 text-sky-100 py-2 px-8 rounded">
            Spanish
          </span>
          <span className="bg-sky-700 text-sky-100 py-2 px-8 rounded">
            Russian
          </span>
        </div>
      </main>
    </div>
  );
}
