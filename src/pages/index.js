import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import UniversalHead from '../components/UniversalHead.js';

import prefersReducedMotion from '../functions/reducedMotion.js';
import sleep from '../functions/sleep.js';

import logo from '../../public/assets/img/transparent-logo.png';

export default function Home() {
  const [tick, setTick] = useState(0); // current tick of the intro animation

  const router = useRouter();

  // run the intro animation
  useEffect(() => {
    (async () => {
      if (tick !== 0) return;

      if (router.asPath.startsWith('/?skipanimation')) return setTick(5);
      if (prefersReducedMotion(window)) return setTick(5);

      await sleep(500);
      setTick(1); // Reveal C
      await sleep(3000);
      setTick(2); // Expand Lines
      await sleep(1300);
      setTick(3); // Remove Overlay

      router.push('/?skipanimation', undefined, { shallow: true });

      await sleep(100);
      setTick(4); // Fade in Content
      await sleep(1000);
      setTick(5); // Enable Cursor
    })();
  }, [router, tick]);

  return (
    <>
      <Head>
        <UniversalHead description="I'm an entertainment professional based out of Denver who specializes in lighting design and live video production." />
        <title>Camdan Mead</title>
      </Head>

      <div className={`${tick >= 3 ? 'hidden' : 'flex'} fixed z-40 transition-all bg-gray-500 duration-1000 items-center justify-center w-screen h-screen`}>
        <Image src={logo} width={250} height={250} priority="true" alt="" className={`${tick < 1 && 'scale-0'} z-50 transition-all duration-500 fixed h-[250px] w-[250px]`} />

        <div className={`${tick >= 1 ? 'border-[500px]' : 'border-[0px]'} transition-all duration-1000 border-yellow-500 rounded-full fixed`}></div>
        <div className={`${tick >= 1 ? 'border-[500px]' : 'border-[0px]'} transition-all duration-[1500ms] border-red-500 rounded-full fixed`}></div>
        <div className={`${tick >= 1 ? 'border-[500px]' : 'border-[0px]'} transition-all duration-[2000ms] border-blue-500 rounded-full fixed`}></div>
        <div className={`${tick >= 1 ? 'border-[550px]' : 'border-[0px]'} transition-all duration-[2500ms] border-gray-500 rounded-full fixed`}></div>

        <div className={`${tick >= 2 ? 'h-full' : 'h-0'} fixed z-50 w-full transition-all duration-1000 bg-yellow-500`}></div>
        <div className={`${tick >= 2 ? 'h-full' : 'h-0'} fixed z-50 w-full transition-all duration-1000 delay-100 bg-red-500`}></div>
        <div className={`${tick >= 2 ? 'h-full' : 'h-0'} fixed z-50 w-full transition-all duration-1000 delay-200 bg-blue-500`}></div>
        <div className={`${tick >= 2 ? 'h-full' : 'h-0'} fixed z-50 w-full transition-all duration-1000 delay-300 bg-gray-500`}></div>
      </div>

      <main className={`${tick < 3 && 'hidden'} bg-gray-500 bg-circuit flex flex-col items-center justify-center w-screen h-screen`}>
        <div className={`${tick >= 4 ? 'opacity-0' : 'opacity-100'} ${tick >= 5 && 'hidden'} fixed z-50 w-screen h-screen bg-gray-500 transition-all duration-1000`}></div>

        <div className="z-10 flex flex-col sm:flex-row items-center mx-4 lg:ml-[15%] mb-[20%] wide:mb-0">
          <Image src={logo} width={128} height={128} priority="true" className="w-24 h-24 sm:w-32 sm:h-32" alt="C Logo" />
          <div className="flex flex-col mt-4 ml-8 sm:mt-0">
            <h1 className="text-3xl font-black text-center text-white sm:text-left sm:text-5xl">
              Hi! I&apos;m Cam.
            </h1>
            <h2 className="mt-2 font-medium text-center text-white sm:text-left text-m sm:text-xl">
              I&apos;m an entertainment professional based out of Denver who specializes in lighting design and live video production. Currently studying <Link href="https://www.colorado.edu/program/ide" target="_blank" className="link-underline">Integrated Design Engineering</Link> at CU Boulder and running <Link href="https://ionentertainment.co" target="_blank" className="link-underline">Ion Entertainment</Link>.
            </h2>
          </div>
        </div>

        <svg className="absolute bottom-0 w-screen wide:hidden" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 400">
          <path fill="#2AB7CA" fillOpacity="1"
            d="M0,256L48,229.3C96,203,192,149,288,112C384,75,480,53,576,80C672,107,768,181,864,213.3C960,245,1056,235,1152,245.3C1248,256,1344,288,1392,304L1440,400L1440,400L1392,400C1344,400,1248,400,1152,400C1056,400,960,400,864,400C768,400,672,400,576,400C480,400,384,400,288,400C192,400,96,400,48,400L0,400Z">
          </path>
        </svg>
        <svg className="absolute bottom-0 w-screen wide:hidden" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#FED766" fillOpacity="1"
            d="M0,128L48,138.7C96,149,192,171,288,197.3C384,224,480,256,576,229.3C672,203,768,117,864,96C960,75,1056,117,1152,144C1248,171,1344,181,1392,186.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
          </path>
        </svg>
        <svg className="absolute bottom-0 w-screen wide:hidden" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#FE4A49" fillOpacity="1"
            d="M0,256L48,224C96,192,192,128,288,122.7C384,117,480,171,576,213.3C672,256,768,288,864,261.3C960,235,1056,149,1152,138.7C1248,128,1344,192,1392,224L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
          </path>
        </svg>
      </main>
    </>
  );
}
