export default function UniversalHead(props) {
	const title = props.title || 'Camdan Mead';
	const description = props.description || 'I\'m an entertainment professional based out of Denver who specializes in lighting design and live video production.';
	const image = props.image || '/assets/img/banner.png';
	const color = props.color || '#2e4057';

	return (
		<>
			<meta charSet="UTF-8" />

			<meta httpEquiv="Content-Type" content="text/html" charSet="utf-8" />
			<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
			<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=5, shrink-to-fit=no" />

			<meta name="description" content={description} />

			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:title" content={title} />
			<meta name="twitter:description" content={description} />
			<meta name="twitter:image" content={image} />

			<meta property="og:type" content="website" />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:image" content={image} />

			<meta name="theme-color" content={color} />
		</>
	);
}
