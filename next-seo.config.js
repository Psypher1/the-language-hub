const title = "The Language Hub";
const description = "Getting you to what's important as easily as possible";
const URL = "https://thelanguagehub.netlify.app/";

const SEO = {
	title,
	description,
	canonical: URL,
	openGraph: {
		type: "website",
		locale: "en_IE",
		url: URL,
		site_name: title,
		description,
		images: [
			{
				url: "https://thelanguagehub/og-image.jpg",
				width: 1200,
				height: 550,
				alt: "The Language Hub OG Image",
			},
		],
	},
	twitter: {
		handle: "@Psypher1",
		site: "@Psypher1",
		cardType: "summary_large_image",
	},
};

export default SEO;
