import Link from "next/link";

export default function LangPathNav({ langPath }) {
  // console.log("path is " + langPath);

  const menuItem =
    "px-5 py-2 hover:bg-sky-600 hover:font-semibold rounded transition duration-300 ease-in-out";

  const frenchPath = "french";
  const russianPath = "russian";

  const isActive = "bg-sky-900 font-semibold";

  return (
    <div className="flex items-center justify-center space-x-2 bg-sky-700 px-8 py-3 text-base text-sky-100">
      <Link href={`/french/basics`}>
        <a className={`${menuItem} ${langPath === frenchPath ? isActive : ""}`}>
          French
        </a>
      </Link>
      <Link href={`/russian/basics`}>
        <a
          className={`${menuItem} ${langPath === russianPath ? isActive : ""}`}
        >
          Russian
        </a>
      </Link>
    </div>
  );
}
