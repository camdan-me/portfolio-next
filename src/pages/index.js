import Head from 'next/head'
import Image from 'next/image'

import UniversalHead from '../components/UniversalHead.js'

import logo from '../../public/assets/img/transparent-logo.png'

export default function Home() {
  return (
    <>
      <Head>
        <UniversalHead description="This is a test description!" />

        <title>Test Title</title>
      </Head>

      <main className="overflow-x-hidden bg-gray-500 bg-circuit">
        <section className="flex flex-col items-center justify-center w-screen h-screen">
          <div className="flex flex-row items-center mx-4">
            <Image src={logo} className="w-16 h-16 sm:w-32 sm:h-32" alt="C Logo" />
            <div className="flex flex-col ml-8">
              <h1 className="text-3xl font-black text-white sm:text-5xl">
                Hi! My name is Camdan.
              </h1>
              <h2 className="mt-2 font-medium text-white text-m sm:text-xl">
                I&apos;m a high school student, filmmaker, and full-stack developer from the US<br />with a website that I&apos;m still getting around to finishing. You can reach me at <a href="mailto:hello@camdan.me">hello@camdan.me</a>
              </h2>
            </div>
          </div>

          <div className="flex flex-row items-center mb-[20%] mt-4 mx-8 bg-white rounded-lg shadow-lg p-4">
            <p>
              <span id="quote" className="font-semibold text-gray-600 text-m">&quot;&quot;</span>
              <span className="text-sm font-medium text-gray-300">— Cam</span>
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
