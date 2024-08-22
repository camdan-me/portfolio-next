import { useRouter } from 'next/router';

import Link from 'next/link';

const env = process.env.NEXT_PUBLIC_VERCEL_ENV ?? 'local';
const sha = process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA ?? '0000000';
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
				Copyright 2024 Camdan Mead - All Rights Reserved
				<div className="mt-1 text-xs text-gray-100">
					<Link href={`https://github.com/camdan-me/portfolio-next/commit/${sha}`} target="_blank">{displayEnv} build {sha.substring(0, 7)} - {commit} ({author})</Link>
				</div>
			</div >
		</>
	);
}
