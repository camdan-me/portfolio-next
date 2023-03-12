import { useRouter } from 'next/router';

import Image from 'next/image';
import Link from 'next/link';

import logo from '../../public/assets/img/transparent-logo.png';

export default function Navbar() {
	const router = useRouter();

	return (
		<>
			<div className="absolute z-40 flex flex-row items-center justify-center p-4 text-2xl font-black text-gray-500 bg-white shadow-lg rounded-xl bottom-4 left-4">
				<Link href="/?skipanimation"><Image src={logo} className="w-12 h-12 mr-2" alt="C Logo" /></Link>
				<Link href="/about" className={`${router.asPath.startsWith('/about') ? 'text-gray-100 cursor-default' : 'link-underline'} mx-2`}>About</Link>
				<Link href="/projects" className={`${router.asPath.startsWith('/projects') ? 'text-gray-100 cursor-default' : 'link-underline'} mx-2`}>Projects</Link>
				<Link href="/contact" className={`${router.asPath.startsWith('/contact') ? 'text-gray-100 cursor-default' : 'link-underline'} mx-2`}>Contact</Link>
				<Link href="/resume" className={`${router.asPath.startsWith('/resume') ? 'text-gray-100 cursor-default' : 'link-underline'} mx-2`}>Resume</Link>
			</div>
		</>
	);
}
