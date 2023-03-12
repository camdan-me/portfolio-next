import Image from 'next/image';
import Link from 'next/link';

import logo from '../../public/assets/img/transparent-logo.png';

export default function Navbar() {
	return (
		<>
			<div className="absolute z-40 flex flex-row items-center justify-center p-4 text-2xl font-black text-gray-500 bg-white shadow-lg rounded-xl bottom-4 left-4">
				<Link href="/?skipanimation"><Image src={logo} className="w-12 h-12 mr-2" alt="C Logo" /></Link>
				<Link href="/about" className="mx-2 link-underline">About</Link>
				<Link href="/projects" className="mx-2 link-underline">Projects</Link>
				<Link href="/contact" className="mx-2 link-underline">Contact</Link>
				<Link href="/resume" className="mx-2 link-underline">Resume</Link>
			</div>
		</>
	);
}
