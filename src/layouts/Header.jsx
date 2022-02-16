import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <nav className="sticky inset-0 flex items-center justify-between w-full px-8 py-4 font-semibold shadow-lg text-sky-600 bg-sky-50">
      <Link href="/" passHref>
        <a className="flex items-center ">
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
        <h3 className="hidden text-base md:block">Choose your path:</h3>
        <button className="px-4 py-2 text-xl hover:bg-sky-600 focus:bg-sky-200">
          <i class="fa-solid fa-chevron-down"></i>
          {/* <i class="fa-solid fa-caret-down"></i> */}
        </button>
      </div>
    </nav>
  );
}
