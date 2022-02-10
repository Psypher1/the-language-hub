import Head from "next/head";
import Image from "next/image";
import Meta from "@components/Meta";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="px-8">
      <Meta
        pageMeta={{
          title: "The Language Hub",
        }}
      />

      <main className="py-16 flex flex-col items-center justify-center">
        <h1 className="text-4xl text-sky-700">The Language Hub</h1>
        <p>What path do you choose?</p>.
        <div className="grid grid-cols-3 gap-4">
          <span>French</span>
          <span>Spanish</span>
          <span>Russian</span>
        </div>
      </main>
    </div>
  );
}
