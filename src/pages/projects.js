import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import UniversalHead from '../components/UniversalHead.js';
import Navbar from '../components/Navbar.js';

import logo from '../../public/assets/img/transparent-logo.png';

export default function Home() {
  return (
    <>
      <Head>
        <UniversalHead description="I like to make technology do cool stuff. I'm particularly good at fixing things that are broken. Sometimes I make websites, music, videos, music videos, cool lights, or concerts." />

        <title>Camdan&apos;s Projects</title>
      </Head>

      <main className="flex items-center justify-center w-screen h-screen overflow-hidden bg-gray-500 bg-topography">
        <Navbar />

        <div className="flex flex-col items-center mx-4 sm:flex-row">
          <Image src={logo} className="w-24 h-24 my-4 sm:w-32 sm:h-32" alt="C Logo" />
          <h1 className="flex flex-col text-3xl font-black text-center text-white sm:ml-4 sm:text-left sm:text-5xl">
            Coming soon!<br />
            <span className="mt-2 text-xl">In the meantime, you can find many of my projects on my <Link href="https://youtube.com/@camdan-me" target="_blank" className="underline">YouTube</Link>.<br /><Link href="/?skipanimation" className="underline">Return home</Link>.</span>
          </h1>
        </div>
      </main>
    </>
  );
}
