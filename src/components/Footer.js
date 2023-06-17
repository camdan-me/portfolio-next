import { useRouter } from 'next/router';

import Link from 'next/link';

export default function Footer() {
	const router = useRouter();

	if (router.pathname === '/') return;
	return (
		<>
			<div className={'content-center w-screen px-8 py-4 font-black text-center text-white'}>
				Created with <Link href="https://nextjs.org/" className="link-underline">Next</Link> and <Link href="https://tailwindcss.com/" className="link-underline">Tailwind</Link>, hosted by <Link href="https://vercel.com" className="link-underline">Vercel</Link>.
				Check out the project on <Link href="https://github.com/camdan-me/portfolio-next" className="link-underline">GitHub</Link>.
			</div >
		</>
	);
}
