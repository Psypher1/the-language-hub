import Meta from "@components/Meta";
import PageWrapper from "@layouts/PageWrapper";
import Link from "next/link";

export default function about() {
  return (
    <PageWrapper>
      <Meta
        pageMeta={{
          title: "About",
        }}
      />
      <article className="flex flex-col items-center justify-center text-gray-600">
        <h1 className="mb-4 text-center text-2xl font-semibold text-sky-700 md:mb-8 md:text-3xl lg:text-4xl">
          Why The Language Hub?
        </h1>
        {/* Prose Containterr */}
        <div className="content-font-sizes content-colors prose mx-auto  mb-20 text-center sm:mb-24 md:mb-32 md:text-left">
          <div className="mb-8">
            <p>
              As someone who learns languages a lot and teaches them, getting to
              the information I need tends to get tediuous.
            </p>
            <p>
              So why not streamline the process and have the important
              information in one place and an easy to digest format?
            </p>
          </div>
          <div className="prose-a:text-sky-700">
            <h3 className="text-xl">Want to add to this project?</h3>
            <p>
              The way I though of this project was as a group effort. So I am
              actively looking contributors. Anything you would like to add,
              something you think could be done better, I am all ears...
            </p>
            <h4 className="text-gray-600">
              Here is the{" "}
              <a
                className="text-lg"
                href="https://github.com/Psypher1/the-language-hub"
                target="_blank"
                rel="noopener noreferrer"
              >
                repo
              </a>{" "}
            </h4>
            <h4 className="text-gray-600">
              Mention me on{" "}
              <a
                className="text-lg"
                href="https://twitter.com/Psypher1/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </h4>
          </div>
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
