import NavDropDown from "@components/NavDropDown";
import PageWrapper from "@layouts/PageWrapper";
import Link from "next/link";

export default function about() {
  return (
    <PageWrapper>
      <NavDropDown />
      <article className="flex flex-col items-center justify-center text-gray-600">
        <h1 className="mb-8 text-center text-2xl font-semibold text-sky-700 sm:mb-8 md:mb-12 md:text-3xl lg:text-4xl">
          Why The Language Hub?
        </h1>
        {/* Prose Containterr */}
        <div className="content-font-sizes content-colors prose mx-auto  mb-20 sm:mb-24 md:mb-32">
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
        <div className="block items-center justify-center space-x-4 border-t border-sky-600 p-4 text-xl md:flex lg:text-2xl">
          <h4 className="mb-2 md:mb-0">Connect with me:</h4>
          <div className="group flex items-center gap-6">
            <Link href="https://twitter.com/Psypher1">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="block transition-all duration-300 ease-in-out hover:scale-110"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </Link>
            <Link href="https://github.com/Psypher1">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="block transition-all duration-300 ease-in-out hover:scale-110"
              >
                <i className="fab fa-github"></i>
              </a>
            </Link>
            <Link href="https://linkedin.com/in/jamesmidzi">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="block transition-all duration-300 ease-in-out hover:scale-110"
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
