import { NextSeo } from "next-seo";
import { useRouter } from "next/router";

export default function Meta({ pageMeta }) {
	const router = useRouter();
	const meta = {
		title: "The Language Hub",
		description: "Getting you to what's important as easily as possible",
		// canonical: `http://localhost:3000${router.asPath}`,
		...pageMeta,
	};
	const SEO = {
		title: `${meta.title} | The Language Hub`,
		description: meta.description,

		openGraph: {
			title: meta.title,
			description: meta.description,
		},
	};
	return <NextSeo {...SEO} />;
}
