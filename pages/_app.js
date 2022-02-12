import "../styles/globals.css";
import { DefaultSeo } from "next-seo";

import SEO from "../next-seo.config";
import Header from "@components/Header";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <div className="">
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
