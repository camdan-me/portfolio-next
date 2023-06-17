import Head from 'next/head';
import Image from 'next/image';

import { useRouter } from 'next/router';

import UniversalHead from '../../components/UniversalHead.js';

import logo from '../../../public/assets/img/transparent-logo.png';

export default function Home() {
	const router = useRouter();
	const email = router.query['email'];

	return (
		<>
			<Head>
				<UniversalHead description="You're now subscribed!" />

				<title>Welcome to my Newsletter!</title>
			</Head>

			<main className="flex items-center justify-center w-screen h-screen bg-gray-500 bg-signal">
				<div className="flex flex-col items-center mx-4 sm:flex-row">
					<Image src={logo} priority="true" className="w-24 h-24 my-4 sm:w-32 sm:h-32" alt="C Logo" />
					<h1 className="flex flex-col text-3xl font-black text-center text-white sm:ml-4 sm:text-left sm:text-5xl">
						Welcome!<br />
						<span className="mt-2 text-xl">
							Thank you for joining my newsletter!<br />
							Make sure to check your email at <span className="text-blue-500">{email}</span> to confirm your subscription.
						</span>
					</h1>
				</div>
			</main>
		</>
	);
}
