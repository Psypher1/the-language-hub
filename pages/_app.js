import "../styles/globals.css";

// SEO Imports
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";

// Layout Imports
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
