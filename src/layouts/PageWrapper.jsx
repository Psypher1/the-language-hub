export default function PageWrapper({ children }) {
  return (
    <section className="sm:px-10 md:p-16 container px-8 py-12 mx-auto">
      {children}
    </section>
  );
}
