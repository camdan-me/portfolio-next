import { useState } from 'react';

import Link from 'next/link';

export default function Footer() {
	const [showSubscribe, setShowSubscribe] = useState(false);

	return (
		<>
			<div className="fixed bottom-0 content-center w-screen py-4 font-black text-center text-white">
				Created with <Link href="https://nextjs.org/" className="link-underline">NextJS</Link> and <Link href="https://tailwindcss.com/" className="link-underline">TailwindCSS</Link>. Check out the project on <Link href="https://github.com/camdan-me/portfolio-next" className="link-underline">GitHub</Link>. Want to hear more? <button className="link-underline" onClick={() => { return setShowSubscribe(true); }}>Join my newsletter</button>.
			</div >

			<div className={`${showSubscribe ? '' : 'hidden'} fixed top-0 z-50 flex w-screen h-screen overflow-hidden bg-gray-500 bg-opacity-75`}>
				<div className="flex flex-col items-center p-8 m-auto text-6xl text-center text-white bg-blue-500 shadow-lg opacity-100 md:p-16 md:w-1/2 rounded-xl">
					<div className="mb-8 text-4xl font-bold text-center text-white">Subscribe for more!</div>
					<div className="flex-wrap mb-8 text-2xl font-semibold text-center text-white">I make cool stuff from time to time, and I usually share it with this newsletter. If you like my work, subscribe to stay in the loop!</div>
					<iframe className="w-full" src="https://embeds.beehiiv.com/bcd6e475-cfe4-4fb9-baea-4bb901424ee0?slim=true" height="52"></iframe>

					<button className="mt-8 text-xl font-semibold text-center text-white link-underline" onClick={() => { return setShowSubscribe(false); }}>Close</button>
				</div>
			</div>
		</>
	);
}
