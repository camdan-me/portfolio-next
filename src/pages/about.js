import Head from 'next/head';
import Image from 'next/image';

import UniversalHead from '../components/UniversalHead.js';
import Navbar from '../components/Navbar.js';

import logo from '../../public/assets/img/transparent-logo.png';

export default function Home() {
  return (
    <>
      <Head>
        <UniversalHead description="I like to make technology do cool stuff. I'm particularly good at fixing things that are broken. Sometimes I make websites, music, videos, music videos, cool lights, or concerts." />

        <title>About Camdan</title>
      </Head>

      <main className="flex flex-col items-center justify-center w-screen h-screen overflow-x-hidden bg-gray-500">
        <Navbar />

        <div className="flex flex-col items-center mx-4 sm:flex-row">
          <Image src={logo} className="w-24 h-24 my-4 sm:w-32 sm:h-32" alt="C Logo" />
          <div className="flex flex-col sm:ml-8 sm:w-2/3 md:w-1/2">
            <h1 className="text-3xl font-black text-center text-white sm:text-left sm:text-5xl">
              I&apos;m a <span className="text-red-500">creative</span> in the <span className="text-blue-500">event industry</span> who likes <span className="text-yellow-500">making cool stuff</span>.
            </h1>
            <h2 className="mt-2 font-bold text-center text-white text-l sm:text-2xl sm:text-left">
              My skillset tends to be a mix of design, software engineering, video production,
              and lighting design with a little audio engineering thrown in.<br />
              <br />
              I&apos;m currently working as a freelance videographer and lighting designer in the Denver entertainment industry.
            </h2>
          </div>
        </div>
      </main>
    </>
  );
}
