import Head from 'next/head';
import Image from 'next/image';

import UniversalHead from '../../components/UniversalHead.js';

import logo from '../../../public/assets/img/transparent-logo.png';

export default function Home() {
	return (
		<>
			<Head>
				<UniversalHead description="You're now subscribed!" />

				<title>Subscribe to Camdan Mead</title>
			</Head>

			<main className="flex items-center justify-center w-screen h-screen bg-gray-500 bg-signal">
				<div className="flex flex-col items-center mx-4 sm:flex-row">
					<Image src={logo} width={128} height={128} priority="true" className="w-24 h-24 my-4 sm:w-32 sm:h-32" alt="C Logo" />
					<h1 className="flex flex-col text-3xl font-black text-center text-white sm:ml-4 sm:text-left sm:text-5xl">
						Subscribe for more!<br />
						<span className="mt-2 text-xl">
							I make cool stuff from time to time, and I usually share it with this newsletter.<br />
							If you like my work, subscribe to stay in the loop!
						</span>
						<iframe className="mt-4" src="https://embeds.beehiiv.com/bcd6e475-cfe4-4fb9-baea-4bb901424ee0?slim=true" height="52"></iframe>
					</h1>
				</div>
			</main>
		</>
	);
}
