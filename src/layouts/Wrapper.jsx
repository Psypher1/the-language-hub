import Footer from "./Footer";
import Meta from "@components/Meta";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
