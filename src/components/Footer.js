import { useRouter } from 'next/router';

import Link from 'next/link';

const env = process.env.NEXT_PUBLIC_VERCEL_ENV ? process.env.VERCEL_ENV : 'local';
const sha = process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA?.substring(0, 7) ?? '0000000';
const commit = process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_MESSAGE ?? '🔃 unstaged changes';
const author = process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_AUTHOR_NAME ?? 'John Doe';

const displayEnv = env.charAt(0)
	.toUpperCase() + env.slice(1);

export default function Footer() {
	const router = useRouter();

	if (router.pathname === '/') return;
	return (
		<>
			<div className={'content-center w-screen px-8 py-4 font-black text-center text-white'}>
				Created with <Link href="https://nextjs.org/" className="link-underline">Next</Link> and <Link href="https://tailwindcss.com/" className="link-underline">Tailwind</Link>, hosted by <Link href="https://vercel.com" className="link-underline">Vercel</Link>.
				Check out the project on <Link href="https://github.com/camdan-me/portfolio-next" className="link-underline">GitHub</Link>.<br />
				<div className="mt-1 text-sm text-gray-100">
					Copyright © 2023 Camdan Mead - All Rights Reserved<br />
					{displayEnv} build {sha} - {commit} ({author})
				</div>
			</div >
		</>
	);
}
