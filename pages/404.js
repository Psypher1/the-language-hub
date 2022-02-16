import PageWrapper from "@layouts/PageWrapper";

export default function NotFound() {
  return (
    <PageWrapper>
      <article className=" flex flex-col items-center justify-center text-gray-600">
        <h2>Oh, darn! 😟</h2>
        <p>We don't have that yet...</p>

        <section>
          <h3>You could:</h3>
          <p>Request It</p>
          <p>Contribute to it </p>
        </section>
      </article>
    </PageWrapper>
  );
}
