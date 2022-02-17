export default function PageWrapper({ children }) {
  return (
    <section className="container mx-auto px-8 py-12 sm:px-10 md:p-16">
      {children}
    </section>
  );
}
