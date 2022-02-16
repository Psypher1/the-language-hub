import PageWrapper from "@layouts/PageWrapper";
import Link from "next/link";

export default function about() {
  return (
    <PageWrapper>
      <article className="flex flex-col items-center justify-center text-gray-600">
        <h1 className="text-sky-700 sm:mb-8 md:mb-12 md:text-3xl lg:text-4xl mb-8 text-2xl font-semibold text-center">
          Why The Language Hub?
        </h1>
        {/* Prose Containterr */}
        <div className="content-font-sizes content-colors sm:mb-24 md:mb-32  mx-auto mb-20 prose">
          <p>
            As someone who learns languages a lot and teaches them, getting to
            the information I need tends to get tediuous.
          </p>
          <p>
            So why not stramline the process and have the important information
            in one place and an easy to digest format?
          </p>
        </div>
        {/* Group LInks */}
        <div className="border-sky-600 md:flex lg:text-2xl items-center justify-center block p-4 space-x-4 text-xl border-t">
          <h4 className="md:mb-0 mb-2">Connect with me:</h4>
          <div className="group flex items-center gap-6">
            <Link href="https://twitter.com/Psypher1">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 block transition-all duration-300 ease-in-out"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </Link>
            <Link href="https://github.com/Psypher1">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 block transition-all duration-300 ease-in-out"
              >
                <i className="fab fa-github"></i>
              </a>
            </Link>
            <Link href="https://linkedin.com/in/jamesmidzi">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 block transition-all duration-300 ease-in-out"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </Link>
          </div>
        </div>
      </article>
    </PageWrapper>
  );
}
