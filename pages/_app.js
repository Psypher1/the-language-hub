import "../styles/globals.css";
import { DefaultSeo } from "next-seo";

import SEO from "../next-seo.config";
import Header from "@components/Header";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
