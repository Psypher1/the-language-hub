import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				{/* Google Font */}

				{/* Favicons */}
				<link href="/static/language white.svg" rel="shortcut icon" />
				{/* <link
					href="/static/favicons/favicon-32x32.png"
					rel="icon"
					sizes="32x32"
					type="image/png"
				/>
				<link
					href="/static/favicons/favicon-16x16.png"
					rel="icon"
					sizes="16x16"
					type="image/png"
				/> */}

				{/* Icons */}
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
					integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA=="
					crossOrigin="anonymous"
					referrerPolicy="no-referrer"
				/>
			</Head>
			<body className="font-sora bg-sky-100 text-sky-900 antialiased ">
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
