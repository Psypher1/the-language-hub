import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <nav className="bg-sky-50 text-sky-600 sticky inset-0 flex items-center justify-between w-full px-8 py-4 font-semibold shadow-lg">
      <Link href="/" passHref>
        <a className=" flex items-center">
          <Image
            src="/static/favicons/favicon-32x32.png"
            width="32"
            height="32"
            alt=""
          />
          <h2 className="ml-1">TLH</h2>
        </a>
      </Link>
      <div className="flex items-center space-x-2">
        <h3 className="md:block hidden text-base">Choose your path:</h3>
        <button className="hover:bg-sky-300 focus:bg-sky-200 px-4 py-2 text-xl">
          <i class="fa-solid fa-chevron-down"></i>
          {/* <i class="fa-solid fa-caret-down"></i> */}
        </button>
      </div>
    </nav>
  );
}
