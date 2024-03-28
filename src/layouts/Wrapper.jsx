import Header from "./Header";
import Footer from "./Footer";

export default function Wrapper({ children }) {
	return (
		<>
			<Header />
			{/* <LangPathNav /> */}
			<main>{children}</main>
			<Footer />
		</>
	);
}
