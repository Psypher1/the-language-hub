import "../styles/globals.css";

// SEO Imports
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";

// Layout Imports
import Wrapper from "@layouts/Wrapper";

// Chakra UI
import { ChakraProvider } from "@chakra-ui/react";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ChakraProvider>
        <Wrapper>
          {/* <Header /> */}
          <div className="min-h-screen">
            <DefaultSeo {...SEO} />
            <Component {...pageProps} />
          </div>
          {/* <Footer /> */}
        </Wrapper>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
