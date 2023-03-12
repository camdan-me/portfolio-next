export default function UniversalHead(props) {
	return (
		<>
			<meta charSet="UTF-8" />

			<meta httpEquiv="Content-Type" content="text/html" charSet="utf-8" />
			<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
			<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=5, shrink-to-fit=no" />

			<meta name="description" content={props.description} />

			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:title" content="Camdan Mead" />
			<meta name="twitter:description" content={props.description} />
			<meta name="twitter:image" content="/assets/img/banner.png" />

			<meta property="og:type" content="website" />
			<meta property="og:title" content="Camdan Mead" />
			<meta property="og:description" content={props.description} />
			<meta property="og:image" content="/assets/img/banner.png" />

			<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#2e4057" />
		</>
	);
}
