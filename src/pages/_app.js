import "../styles/globals.css";

import { ChakraProvider } from "@chakra-ui/react";
import Wrapper from "@layouts/Wrapper";
import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";

export default function App({ Component, pageProps }) {
	return (
		<>
			<ChakraProvider>
				<Wrapper>
					<DefaultSeo {...SEO} />
					<Component {...pageProps} />
				</Wrapper>
			</ChakraProvider>
		</>
	);
}
