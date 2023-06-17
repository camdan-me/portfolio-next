import { useRouter } from 'next/router';

import Image from 'next/image';
import Link from 'next/link';

import logo from '../../public/assets/img/transparent-logo.png';

export default function Navbar() {
	const router = useRouter();

	return (
		<>
			<nav className="absolute z-30 flex flex-row items-center justify-center p-4 font-black text-white text-l sm:text-2xl top-4 left-4">
				<Link href="/?skipanimation" className="hidden sm:flex"><Image src={logo} width={48} height={48} priority="true" className="w-12 h-12 mr-2" alt="C Logo" /></Link>
				<Link href="/?skipanimation" className="mx-2 link-underline sm:hidden">Home</Link>
				<Link href="/about" className={`${router.asPath.startsWith('/about') ? 'text-red-500 cursor-default' : 'link-underline'} mx-2`}>About</Link>
				<Link href="/projects" className={`${router.asPath.startsWith('/projects') ? 'text-yellow-500 cursor-default' : 'link-underline'} mx-2`}>Projects</Link>
				<Link href="/contact" className={`${router.asPath.startsWith('/contact') ? 'text-blue-500 cursor-default' : 'link-underline'} mx-2`}>Contact</Link>
				<Link href="/newsletter" className={`${router.asPath.startsWith('/newsletter') ? 'text-red-500 cursor-default' : 'link-underline'} mx-2`}>Newsletter</Link>
			</nav>

			<div className="fixed z-50 items-center justify-center hidden w-screen h-screen p-4 font-black text-center text-white bg-gray-500 tiny:flex">
				<h1>Oops! Looks like your viewport is too small to properly display my website. Please use a larger window or screen.</h1>
			</div>
		</>
	);
}
