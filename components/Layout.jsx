import Header from "./Header";
import Meta from "./Meta";

export default function Layout({ children, pageMeta }) {
  return (
    <>
      <Meta pageMeta={pageMeta} />
      <Header />

      {children}
      <footer>I am footer</footer>
    </>
  );
}
