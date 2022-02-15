import Link from "next/link";
import { LangPath } from "../src/models/langPath";

const langPath = "French" | "Russian";

export default function LangPathNav({ langPath }) {
  console.log("path is " + langPath);
  const menuItem =
    "px-4 py-2 hover:bg-sky-600 hover:font-semibold rounded transition duration-300 ease-in-out";

  const frenchPath = "french";
  const russianPath = "russian";

  const isActive =
    langPath === frenchPath
      ? "bg-pink-500"
      : "" | (langPath === russianPath)
      ? "bg-green-500"
      : "";

  return (
    <div className="px-8 py-3 bg-sky-700 text-sky-100 flex items-center justify-center text-base space-x-2">
      <Link href={`/french/basics`}>
        <a className={menuItem}>French</a>
      </Link>
      <Link href={`/russian/basics`}>
        <a className={menuItem}>Russian</a>
      </Link>
    </div>
  );
}
