import { useRouter } from 'next/router';
import { useEffect } from 'react';

import Head from 'next/head';
import Image from 'next/image';

import UniversalHead from '../../components/UniversalHead';
import projectsArray from '../../../resources/projects.json';
import logo from '../../../public/assets/img/transparent-logo.png';

export default function Home({ project }) {
	const router = useRouter();

	// get the project object from the array of projects by ID
	const projectObject = projectsArray.filter((obj) => { return obj.id === project; })[0];

	// redirect to the project's link
	useEffect(() => {
		if (projectObject && projectObject.link) router.replace(projectObject.link);
		else router.replace('/projects');
	}, [projectObject, router]);

	// display an intermediate page while the redirect is happening
	return (
		<>
			<Head>
				<UniversalHead description="I like to make technology do cool stuff. I'm particularly good at fixing things that are broken. Sometimes I make websites, music, videos, music videos, cool lights, or concerts." />

				<title>Please Wait</title>
			</Head>

			<main className="flex items-center justify-center w-screen h-screen">
				<div className="flex flex-col items-center mx-4 sm:flex-row">
					<Image src={logo} priority="true" className="w-24 h-24 my-4 sm:w-32 sm:h-32" alt="C Logo" />
					<h1 className="flex flex-col text-3xl font-black text-center text-white sm:ml-4 sm:text-left sm:text-5xl">
						Loading...<br />
					</h1>
				</div>
			</main>
		</>
	);
}

export const getStaticPaths = async () => {
	return {
		paths: [],
		fallback: 'blocking',
	};
};

// getStaticProps is required for dynamic routes
export const getStaticProps = async ({ params }) => {
	const route = params.project;
	const project = route.toLowerCase();

	return {
		props: { project },
	};
};
