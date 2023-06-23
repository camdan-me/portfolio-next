import { useRouter } from 'next/router';
import { useEffect } from 'react';

import Head from 'next/head';
import Image from 'next/image';

import UniversalHead from '../components/UniversalHead';
import logo from '../../public/assets/img/transparent-logo.png';

export default function Home() {
	const router = useRouter();

	// redirect to the supplied link
	useEffect(() => {
		if (router.query.link) router.push(router.query.link);
	}, [router]);

	// display an intermediate page while the redirect is happening
	return (
		<>
			<Head>
				<UniversalHead description="I like to make technology do cool stuff. I'm particularly good at fixing things that are broken. Sometimes I make websites, music, videos, music videos, cool lights, or concerts." />

				<title>Redirecting...</title>
			</Head>

			<main className="flex items-center justify-center w-screen h-screen">
				<div className="flex flex-col items-center mx-4 sm:flex-row">
					<Image src={logo} width={128} height={128} priority="true" className="w-24 h-24 my-4 sm:w-32 sm:h-32" alt="C Logo" />
					<h1 className="flex flex-col text-3xl font-black text-center text-white sm:ml-4 sm:text-left sm:text-5xl">
						Redirecting...<br />
					</h1>
				</div>
			</main>
		</>
	);
}
