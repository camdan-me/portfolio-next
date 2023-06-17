import { useState } from 'react';
import { useRouter } from 'next/router';

import Image from 'next/image';
import Link from 'next/link';

import logo from '../../public/assets/img/transparent-logo.png';

export default function Navbar() {
	const router = useRouter();
	const [showSubscribe, setShowSubscribe] = useState(false); // whether or not the subscribe modal is open

	return (
		<>
			<nav className="absolute z-30 flex flex-row items-center justify-center p-4 font-black text-white text-l sm:text-2xl top-4 left-4">
				<Link href="/?skipanimation" className="hidden sm:flex"><Image src={logo} priority="true" className="w-12 h-12 mr-2" alt="C Logo" /></Link>
				<Link href="/?skipanimation" className="mx-2 link-underline sm:hidden">Home</Link>
				<Link href="/about" className={`${router.asPath.startsWith('/about') ? 'text-red-500 cursor-default' : 'link-underline'} mx-2`}>About</Link>
				<Link href="/projects" className={`${router.asPath.startsWith('/projects') ? 'text-yellow-500 cursor-default' : 'link-underline'} mx-2`}>Projects</Link>
				<Link href="/contact" className={`${router.asPath.startsWith('/contact') ? 'text-blue-500 cursor-default' : 'link-underline'} mx-2`}>Contact</Link>
				<button className="mx-2 link-underline" onClick={() => { return setShowSubscribe(true); }}>Newsletter</button>
			</nav>

			<div className={`${showSubscribe ? '' : 'hidden'} fixed top-0 z-50 flex w-screen h-screen bg-gray-500 bg-opacity-75`}>
				<div className="flex flex-col items-center p-8 m-auto text-6xl text-center text-white bg-blue-500 shadow-lg opacity-100 md:p-16 md:w-1/2 rounded-xl">
					<div className="mb-8 text-4xl font-bold text-center text-white">Subscribe for more!</div>
					<div className="flex-wrap mb-8 text-2xl font-semibold text-center text-white">I make cool stuff from time to time, and I usually share it with this newsletter. If you like my work, subscribe to stay in the loop!</div>
					<iframe className="w-full" src="https://embeds.beehiiv.com/bcd6e475-cfe4-4fb9-baea-4bb901424ee0?slim=true" height="52"></iframe>

					<button className="mt-8 text-xl font-semibold text-center text-white link-underline" onClick={() => { return setShowSubscribe(false); }}>Close</button>
				</div>
			</div>

			<div className="fixed z-50 items-center justify-center hidden w-screen h-screen p-4 font-black text-center text-white bg-gray-500 tiny:flex">
				<h1>Oops! Looks like your viewport is too small to properly display my website. Please use a larger window or screen.</h1>
			</div>
		</>
	);
}
