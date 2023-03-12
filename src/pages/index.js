import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import Head from 'next/head';
import Image from 'next/image';

import UniversalHead from '../components/UniversalHead.js';
import Navbar from '../components/Navbar.js';

import logo from '../../public/assets/img/transparent-logo.png';

import quoteArray from '../../resources/quotes.json';

const selectQuote = () => { return quoteArray.quotes[Math.floor(Math.random() * quoteArray.quotes.length)]; };

const sleep = (ms) => {
  return new Promise((resolve) => {
    return setTimeout(resolve, ms);
  });
};

export default function Home() {
  const [fullQuote, setFullQuote] = useState(selectQuote());
  const [quote, setQuote] = useState('');
  const [index, setIndex] = useState(0);
  const [tick, setTick] = useState(0);

  const router = useRouter();

  const quoteClick = () => {
    if (index !== fullQuote.length) return;

    setQuote('');
    setIndex(0);
    setFullQuote(selectQuote());
  };

  useEffect(() => {
    if (index !== fullQuote.length) {
      setTimeout(() => {
        if (tick >= 4) {
          setQuote(quote + fullQuote[index]);
          setIndex(index + 1);
        }
      }, 40);
    }
  }, [index, quote, fullQuote, tick]);

  useEffect(() => {
    (async () => {
      if (tick !== 0) return;

      if (router.asPath === '/?skipanimation') return setTick(5);

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
        <UniversalHead description="I like to make technology do cool stuff. I'm particularly good at fixing things that are broken. Sometimes I make websites, music, videos, music videos, cool lights, or concerts." />
        <title>Camdan Mead</title>
      </Head>

      <div className={`${tick >= 3 ? 'hidden' : 'flex'} transition-all duration-1000 items-center justify-center w-screen h-screen bg-gray-500`}>
        <Image src={logo} alt="" className={`${tick < 1 && 'scale-0'} z-50 transition-all duration-500 fixed h-[250px] w-[250px]`} />

        <div className={`${tick >= 1 ? 'border-[500px]' : 'border-[0px]'} transition-all duration-1000 border-yellow-500 rounded-full fixed`}></div>
        <div className={`${tick >= 1 ? 'border-[500px]' : 'border-[0px]'} transition-all duration-[1500ms] border-red-500 rounded-full fixed`}></div>
        <div className={`${tick >= 1 ? 'border-[500px]' : 'border-[0px]'} transition-all duration-[2000ms] border-blue-500 rounded-full fixed`}></div>
        <div className={`${tick >= 1 ? 'border-[550px]' : 'border-[0px]'} transition-all duration-[2500ms] border-gray-500 rounded-full fixed`}></div>

        <div className={`${tick >= 2 ? 'h-full' : 'h-0'} fixed z-50 w-full transition-all duration-1000 bg-yellow-500`}></div>
        <div className={`${tick >= 2 ? 'h-full' : 'h-0'} fixed z-50 w-full transition-all duration-1000 delay-100 bg-red-500`}></div>
        <div className={`${tick >= 2 ? 'h-full' : 'h-0'} fixed z-50 w-full transition-all duration-1000 delay-200 bg-blue-500`}></div>
        <div className={`${tick >= 2 ? 'h-full' : 'h-0'} fixed z-50 w-full transition-all duration-1000 delay-300 bg-gray-500`}></div>
      </div>

      <main className={`${tick < 3 && 'hidden'} overflow-x-hidden bg-gray-500 bg-circuit flex flex-col items-center justify-center w-screen h-screen`}>
        <Navbar />

        <div className={`${tick >= 4 ? 'opacity-0' : 'opacity-100'} ${tick >= 5 && 'hidden'} fixed z-50 w-screen h-screen bg-gray-500 transition-all duration-1000`}></div>

        <div className="flex flex-row items-center mx-4">
          <Image src={logo} className="w-16 h-16 sm:w-32 sm:h-32" alt="C Logo" />
          <div className="flex flex-col ml-8">
            <h1 className="text-3xl font-black text-white sm:text-5xl">
              Hi! My name is Camdan.
            </h1>
            <h2 className="mt-2 font-medium text-white text-m sm:text-xl">
              I like to make technology do cool stuff. I&apos;m particularly good at fixing things that are broken.
              <span className="hidden sm:flex">
                Sometimes I make websites, music, videos, music videos, cool lights, or concerts.
              </span>
            </h2>
          </div>
        </div>

        <div onClick={() => { return quoteClick(); }} className={`${(index === fullQuote.length) && 'cursor-pointer'} flex flex-row items-center mb-[20%] mt-4 mx-8 bg-gray-600 rounded-lg p-4`}>
          <p>
            <span className="font-semibold text-white text-m">&quot;{quote}&quot;</span>
            <span className="text-sm font-medium text-gray-100">- Cam</span>
          </p>
        </div>

        <svg className="absolute bottom-0 w-screen" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 400">
          <path fill="#2AB7CA" fillOpacity="1"
            d="M0,256L48,229.3C96,203,192,149,288,112C384,75,480,53,576,80C672,107,768,181,864,213.3C960,245,1056,235,1152,245.3C1248,256,1344,288,1392,304L1440,400L1440,400L1392,400C1344,400,1248,400,1152,400C1056,400,960,400,864,400C768,400,672,400,576,400C480,400,384,400,288,400C192,400,96,400,48,400L0,400Z">
          </path>
        </svg>
        <svg className="absolute bottom-0 w-screen" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#FED766" fillOpacity="1"
            d="M0,128L48,138.7C96,149,192,171,288,197.3C384,224,480,256,576,229.3C672,203,768,117,864,96C960,75,1056,117,1152,144C1248,171,1344,181,1392,186.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
          </path>
        </svg>
        <svg className="absolute bottom-0 w-screen" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#FE4A49" fillOpacity="1"
            d="M0,256L48,224C96,192,192,128,288,122.7C384,117,480,171,576,213.3C672,256,768,288,864,261.3C960,235,1056,149,1152,138.7C1248,128,1344,192,1392,224L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
          </path>
        </svg>
      </main>
    </>
  );
}
