import { useRouter } from 'next/router';
import { useEffect } from 'react';

import Head from 'next/head';
import Image from 'next/image';

import UniversalHead from '../../components/UniversalHead';
import socialsArray from '../../../resources/socials.json';
import logo from '../../../public/assets/img/transparent-logo.png';

export default function Home({ social }) {
	const router = useRouter();

	// get the social object from the array of socials by ID
	const socialObject = socialsArray.filter((obj) => { return obj.id === social; })[0];

	// redirect to the social link
	useEffect(() => {
		if (socialObject && socialObject.link) router.push(`/redirect?link=${socialObject.link}`);
	}, [socialObject, router]);

	// display an intermediate page while the redirect is happening
	return (
		<>
			<Head>
				<UniversalHead description="I'm an entertainment professional based out of Denver who specializes in lighting design and live video production." />

				<title>Please Wait</title>
			</Head>

			<main className="flex items-center justify-center w-screen h-screen">
				<div className="flex flex-col items-center mx-4 sm:flex-row">
					<Image src={logo} width={128} height={128} priority="true" className="w-24 h-24 my-4 sm:w-32 sm:h-32" alt="C Logo" />
					<h1 className="flex flex-col text-3xl font-black text-center text-white sm:ml-4 sm:text-left sm:text-5xl">
						Please wait...
					</h1>
				</div>
			</main>
		</>
	);
}

export const getStaticPaths = async () => {
	return {
		paths: [],
		fallback: 'blocking',
	};
};

// getStaticProps is required for dynamic routes
export const getStaticProps = async ({ params }) => {
	const route = params.social;
	const social = route.toLowerCase();

	return {
		props: { social },
	};
};
