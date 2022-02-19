import Footer from "./Footer";
import Header from "./Header";

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
