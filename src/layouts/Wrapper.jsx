import Footer from "./Footer";
import Meta from "@components/Meta";
import Header from "./Header";
import LangPathNav from "@components/LangPathNav";
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      {/* <LangPathNav /> */}
      <main className="">{children}</main>
      <Footer />
    </>
  );
}
