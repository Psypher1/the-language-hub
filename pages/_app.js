import "../styles/globals.css";
import { DefaultSeo } from "next-seo";

import SEO from "../next-seo.config";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Wrapper from "@layouts/Wrapper";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Wrapper>
        {/* <Header /> */}
        <div className="min-h-screen">
          <DefaultSeo {...SEO} />
          <Component {...pageProps} />
        </div>
        {/* <Footer /> */}
      </Wrapper>
    </>
  );
}

export default MyApp;
