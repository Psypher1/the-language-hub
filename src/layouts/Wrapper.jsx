import Footer from "./Footer";
import Meta from "@components/Meta";
import Header from "./Header";
import LangPathNav from "@components/LangPathNav";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      {/* <LangPathNav /> */}
      <main>{children}</main>
      <Footer />
    </>
  );
}
