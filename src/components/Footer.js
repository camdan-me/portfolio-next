import { useRouter } from 'next/router';

import Link from 'next/link';

export default function Footer() {
	const router = useRouter();

	return (
		<>
			<div className={`${(router.pathname === '/') && 'fixed bottom-0'} content-center w-screen px-8 py-4 font-black text-center text-white`}>
				Created with <Link href="https://nextjs.org/" className="link-underline">NextJS</Link> and <Link href="https://tailwindcss.com/" className="link-underline">TailwindCSS</Link>. Check out the project on <Link href="https://github.com/camdan-me/portfolio-next" className="link-underline">GitHub</Link>.
			</div >
		</>
	);
}
