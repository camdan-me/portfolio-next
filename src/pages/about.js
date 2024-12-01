import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import UniversalHead from '../components/UniversalHead.js';

import logo from '../../public/assets/img/transparent-logo.png';

export default function Home() {
  return (
    <>
      <Head>
        <UniversalHead description="I'm a designer and entertainment professional who makes awesome stuff. Learn more about me and how to get in touch!" />

        <title>About Camdan</title>
      </Head>

      <main className="flex flex-col items-center justify-center w-screen h-screen">
        <div className="flex flex-col items-center mx-4 lg:ml-32 sm:flex-row">
          <Image src={logo} width={128} height={128} priority="true" className="w-24 h-24 my-4 sm:w-32 sm:h-32" alt="C Logo" />
          <div className="flex flex-col sm:ml-8 sm:w-2/3">
            <h1 className="text-3xl font-black text-center text-white sm:text-left sm:text-5xl">
              I&apos;m a <span className="text-red-500">designer</span> and <span className="text-blue-500">entertainment professional</span> who <span className="text-yellow-500">makes awesome stuff</span>.
            </h1>
            <h2 className="mt-2 font-bold text-center text-white text-l sm:text-2xl sm:text-left">
              My skillset is a mix of lighting design, video production, software development,
              and electrical engineering with a little audio work thrown in.<br />
              <br />
              I&apos;m currently working as an LD in Denver and Boulder where I run <Link href="https://ionentertainment.co/" target="_blank" className="link-underline">Ion Entertainment</Link>, my lighting design company.<br />
              <div className="flex flex-row justify-center mt-8 sm:-ml-2 sm:justify-start">
                <Link href="/socials/youtube" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-12 sm:w-16 fill-white hover:opacity-50" viewBox="0 0 64 64"><path d="M53.527,17.427C55.714,19.677,56,23.252,56,32s-0.286,12.323-2.473,14.573C51.34,48.822,49.062,49,32,49	s-19.34-0.178-21.527-2.427C8.286,44.323,8,40.748,8,32s0.286-12.323,2.473-14.573S14.938,15,32,15S51.34,15.178,53.527,17.427z M27.95,39.417l12.146-7.038L27.95,25.451V39.417z"></path></svg>
                </Link>
                <Link href="/socials/linkedin" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-12 sm:w-16 fill-white hover:opacity-50" viewBox="0 0 64 64"><path d="M40.227,12C51.145,12,52,12.854,52,23.773v16.453C52,51.145,51.145,52,40.227,52H23.773C12.855,52,12,51.145,12,40.227	V23.773C12,12.854,12.855,12,23.773,12H40.227z M25.029,43V26.728h-5.057V43H25.029z M22.501,24.401	c1.625,0,2.947-1.322,2.947-2.949c0-1.625-1.322-2.947-2.947-2.947c-1.629,0-2.949,1.32-2.949,2.947S20.87,24.401,22.501,24.401z M44,43v-8.925c0-4.382-0.946-7.752-6.067-7.752c-2.46,0-4.109,1.349-4.785,2.628H33.08v-2.223h-4.851V43h5.054v-8.05	c0-2.122,0.405-4.178,3.036-4.178c2.594,0,2.628,2.427,2.628,4.315V43H44z"></path></svg>
                </Link>
                <Link href="/socials/github" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-12 sm:w-16 fill-white hover:opacity-50" viewBox="0 0 64 64"><path d="M32,10c12.15,0,22,9.85,22,22c0,9.768-6.369,18.045-15.179,20.916c0.002-0.008,0.006-0.021,0.006-0.021	s-1.485-0.696-1.453-1.938c0.035-1.367,0-4.556,0-5.727c0-2.01-1.272-3.434-1.272-3.434s9.977,0.112,9.977-10.533	c0-4.107-2.147-6.245-2.147-6.245s1.128-4.385-0.39-6.245c-1.701-0.184-4.749,1.626-6.05,2.472c0,0-2.062-0.846-5.492-0.846	c-3.43,0-5.492,0.846-5.492,0.846c-1.301-0.846-4.348-2.656-6.05-2.472c-1.518,1.86-0.39,6.245-0.39,6.245s-2.147,2.137-2.147,6.245	c0,10.645,9.977,10.533,9.977,10.533s-1.005,1.136-1.225,2.806c-0.696,0.236-1.721,0.528-2.549,0.528	c-2.165,0-3.812-2.105-4.416-3.078c-0.595-0.96-1.815-1.766-2.953-1.766c-0.749,0-1.115,0.375-1.115,0.803s1.05,0.727,1.743,1.521	c1.461,1.674,1.435,5.438,6.641,5.438c0.565,0,1.719-0.139,2.588-0.256c-0.005,1.185-0.007,2.436,0.012,3.167	c0.031,1.242-1.453,1.938-1.453,1.938s0.004,0.012,0.006,0.021C16.369,50.045,10,41.768,10,32C10,19.85,19.85,10,32,10z"></path></svg>
                </Link>
                <Link href="/socials/instagram" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-12 sm:w-16 fill-white hover:opacity-50" viewBox="0 0 64 64"><path d="M 31.820312 12 C 13.438312 12 12 13.439312 12 31.820312 L 12 32.179688 C 12 50.560688 13.438313 52 31.820312 52 L 32.179688 52 C 50.561688 52 52 50.560688 52 32.179688 L 52 32 C 52 13.452 50.548 12 32 12 L 31.820312 12 z M 43.994141 18 C 45.099141 17.997 45.997 18.889141 46 19.994141 C 46.003 21.099141 45.110859 21.997 44.005859 22 C 42.900859 22.003 42.003 21.110859 42 20.005859 C 41.997 18.900859 42.889141 18.003 43.994141 18 z M 31.976562 22 C 37.498562 21.987 41.987 26.454563 42 31.976562 C 42.013 37.498562 37.545437 41.987 32.023438 42 C 26.501437 42.013 22.013 37.545437 22 32.023438 C 21.987 26.501437 26.454563 22.013 31.976562 22 z M 31.986328 26 C 28.672328 26.008 25.992 28.701625 26 32.015625 C 26.008 35.328625 28.700672 38.008 32.013672 38 C 35.327672 37.992 38.008 35.299328 38 31.986328 C 37.992 28.672328 35.299328 25.992 31.986328 26 z"></path></svg>
                </Link>
              </div>
            </h2>
          </div>
        </div>
      </main>
    </>
  );
}
