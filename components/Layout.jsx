import Meta from "./Meta";

export default function Layout({ children, pageMeta }) {
  return (
    <>
      <Meta pageMeta={pageMeta} />
      <div className="min-h-screen">
        <header>I am header</header>
        {children}
        <footer>I am footer</footer>
      </div>
    </>
  );
}
