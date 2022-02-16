import Link from "next/link";

export default function about() {
  return (
    <section className="md:py-16 flex flex-col items-center justify-center py-12 space-y-8 text-gray-600">
      <h1 className="text-sky-700 md:text-3xl lg:text-4xl mb-4 text-2xl font-semibold text-center">
        Why The Language Hub?
      </h1>
      <div className="content-font-sizes prose text-gray-600">
        <p>
          As someone who learns languages a lot and teaches them, getting to the
          information I need tends to get tediuous.
        </p>
        <p>
          So why not stramline the process and have the important information in
          one place and an easy to digest format?
        </p>
      </div>
      <div className="md:flex items-center justify-center hidden space-x-2 text-xl">
        <h4>Connect with me:</h4>
        <Link href="https://twitter.com/Psypher1">
          <a target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
        </Link>

        <i className="fab fa-linkedin"></i>
      </div>
    </section>
  );
}
