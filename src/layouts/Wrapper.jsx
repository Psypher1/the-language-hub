import Footer from "./Footer";
import Header from "./Header";

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
