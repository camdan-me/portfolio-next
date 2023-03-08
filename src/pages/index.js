import { useEffect, useState } from 'react'

import Head from 'next/head'
import Image from 'next/image'

import UniversalHead from '../components/UniversalHead.js'

import logo from '../../public/assets/img/transparent-logo.png'

const quoteArray = [
  'What\'s beautiful about the internet is you don\'t know who I am and I don\'t know either.',
  'Oh, so you\'re a node dev, huh? List every NPM package.',
  'WHICH TAB IS THAT MUSIC COMING FROM?!?!',
  'I know for a *fact* that all of my parentheses are in the righ- oh wait, found the problem.',
  'I\'m not antisocial, I\'m just not user friendly.',
  'while :; do rm -rf node_modules && npm install; done;',
  'Roses are red, violets are blue, unexpected { on line 232.',
  'I\'m not a robot, I\'m a human.',
  'Turns out that if you don\\\'t escape these quotes properly it breaks the whole website.',
  'Very decent.',
  'So the difference between a T-stop and an F-stop is... ok you left.',
  'They say code never lies but mine sure seems to.',
  'Am I the only one who looks both ways before crossing a one-way street?',
  'Debugging feels like trying to find a piece of hay in a stack of needles. Except the piece of hay is invisible and sometimes the stack of needles pretends to be a stack of hay.',
  'Debugging makes me feel like I\'m a detective when really I\'m the murderer.',
  'I don\'t always test my code, but when I do, I test it here. That\'s why undefinedundefinedundefined.',
  'I love the whooshing sound deadlines make when they go by.',
  'It\'s not a mistake, it\'s a surprise feature.',
  'A good story is always the best special effect. Unless you have car chases or explosions. At least according to Marvel.',
  'Filmmaking is the art of cutting just before something funny happens.',
  'Why does it feel like every time I go to build a camera half the parts are missing and the other half are in a box labeled "Misc".',
  'It\'s not a mistake if you do it twice.',
  'Testing in production is fun! It\'s like solving a puzzle, except the puzzle is on fire.',
  'If you don\'t write your code in comic sans I don\'t know if we can be friends anymore.',
  'When we\'re older are we gonna be telling our kids about how we used to gaslight ChatGPT?'
];

const selectQuote = () => quoteArray[Math.floor(Math.random() * quoteArray.length)];

const sleep = (ms) => { return new Promise(resolve => setTimeout(resolve, ms)) };

export default function Home() {
  const [fullQuote, setFullQuote] = useState(selectQuote());
  const [quote, setQuote] = useState('');
  const [index, setIndex] = useState(0);

  const [tick, setTick] = useState(0);

  const quoteClick = () => {
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
      }, 40)
    }
  }, [index, quote, fullQuote, tick]);

  useEffect(() => {
    (async () => {
      if (tick !== 0) return;

      await sleep(500);
      setTick(1);
      await sleep(3000);
      setTick(2);
      await sleep(1300);
      setTick(3);
      await sleep(100);
      setTick(4);
      await sleep(1000);
      setTick(5);
    })();
  }, [tick]);

  return (
    <>
      <Head>
        <UniversalHead description="I like to make technology do cool stuff. I'm particularly good at fixing things that are broken. Sometimes I make websites, music, videos, music videos, cool lights, or concerts." />

        <title>Camdan Mead</title>
      </Head>

      <section className={`${tick >= 3 ? 'hidden' : 'flex'} transition-all duration-1000 items-center justify-center w-screen h-screen bg-gray-500`}>
        <Image src={logo} alt="" className={`${tick < 1 && 'scale-0'} z-50 transition-all duration-500 fixed h-[250px] w-[250px]`} />

        <div className={`${tick >= 1 ? 'border-[500px]' : 'border-[0px]'} transition-all duration-1000 border-yellow-500 rounded-full fixed`}></div>
        <div className={`${tick >= 1 ? 'border-[500px]' : 'border-[0px]'} transition-all duration-[1500ms] border-red-500 rounded-full fixed`}></div>
        <div className={`${tick >= 1 ? 'border-[500px]' : 'border-[0px]'} transition-all duration-[2000ms] border-blue-500 rounded-full fixed`}></div>
        <div className={`${tick >= 1 ? 'border-[550px]' : 'border-[0px]'} transition-all duration-[2500ms] border-gray-500 rounded-full fixed`}></div>

        <div className={`${tick >= 2 ? 'h-full' : 'h-0'} fixed z-50 w-full transition-all duration-1000 bg-yellow-500`}></div>
        <div className={`${tick >= 2 ? 'h-full' : 'h-0'} fixed z-50 w-full transition-all duration-1000 delay-100 bg-red-500`}></div>
        <div className={`${tick >= 2 ? 'h-full' : 'h-0'} fixed z-50 w-full transition-all duration-1000 delay-200 bg-blue-500`}></div>
        <div className={`${tick >= 2 ? 'h-full' : 'h-0'} fixed z-50 w-full transition-all duration-1000 delay-300 bg-gray-500`}></div>
      </section>

      <main className={`${tick < 3 && 'hidden'} overflow-x-hidden bg-gray-500 bg-circuit`}>
        <div className={`${tick >= 4 ? 'opacity-0' : 'opacity-100'} ${tick >= 5 && 'hidden'} fixed z-50 w-screen h-screen bg-gray-500 transition-all duration-1000`}></div>

        <section className="flex flex-col items-center justify-center w-screen h-screen">
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

          <div onClick={() => quoteClick()} className="flex flex-row items-center mb-[20%] mt-4 mx-8 bg-white rounded-lg shadow-lg p-4 cursor-pointer">
            <p>
              <span className="font-semibold text-gray-600 text-m">&quot;{quote}&quot;</span>
              <span className="text-sm font-medium text-gray-300">- Cam</span>
            </p>
          </div>

          <svg className="z-40 w-16 h-16 text-white bottom-4 animate-bounce" width="24" height="24" viewBox="0 0 24 24"
            strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" />
            <rect x="7" y="4" width="10" height="16" rx="4" />
            <line x1="12" y1="8" x2="12" y2="11" />
          </svg>

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
        </section>
      </main>
    </>
  )
}