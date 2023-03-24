import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import UniversalHead from '../components/UniversalHead.js';

import logo from '../../public/assets/img/transparent-logo.png';

export default function Home() {
  return (
    <>
      <Head>
        <UniversalHead description="I like to make technology do cool stuff. I'm particularly good at fixing things that are broken. Sometimes I make websites, music, videos, music videos, cool lights, or concerts." />

        <title>Contact Camdan</title>
      </Head>

      <main className="flex flex-col items-center justify-center w-screen h-screen overflow-x-hidden bg-gray-500 bg-topography">
        <div className="flex flex-col items-center mx-4 lg:ml-32 sm:flex-row">
          <Image src={logo} className="w-24 h-24 my-4 sm:w-32 sm:h-32" alt="C Logo" />
          <div className="flex flex-col sm:ml-8 sm:w-2/3 lg:w-1/2">
            <h1 className="text-3xl font-black text-center text-white sm:text-left sm:text-5xl">
              Have a <span className="text-red-500">question,</span> <span className="text-blue-500">comment,</span> or <span className="text-yellow-500">project idea?</span> I&apos;d love to speak with you!
            </h1>
            <h2 className="mt-2 font-bold text-center text-white text-l sm:text-2xl sm:text-left">
              I&apos;d love to hear from you! Please feel free to contact me via, <Link href="mailto:hello@camdan.me" className="underline">email</Link>, <Link href="tel:7194226326" className="underline">text</Link>, or <Link href="tel:7194226326" className="underline">phone</Link>.<br />
              <br />
              If you&apos;d like to work with me, reach out for my schedule and rates, and check out my <Link href="/projects" className="underline">projects</Link> to see what I&apos;ve done before.
              <div className="flex flex-row justify-center mt-8 sm:justify-start">
                <Link href="mailto:hello@camdan.me" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 mx-2 sm:w-12 fill-white" viewBox="0 0 24 24"><path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z" /></svg>
                </Link>
                <Link href="tel:7194226326">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 mx-2 sm:w-12 fill-white" viewBox="0 0 24 24"><path d="M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026-3.493-6.817-2.106 1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.033z" /></svg>
                </Link>
                <Link href="https://discord.com/users/564859369951461406" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 mx-2 sm:w-12 fill-white" viewBox="0 0 24 24" fill-rule="evenodd" clip-rule="evenodd"><path d="M19.54 0c1.356 0 2.46 1.104 2.46 2.472v21.528l-2.58-2.28-1.452-1.344-1.536-1.428.636 2.22h-13.608c-1.356 0-2.46-1.104-2.46-2.472v-16.224c0-1.368 1.104-2.472 2.46-2.472h16.08zm-4.632 15.672c2.652-.084 3.672-1.824 3.672-1.824 0-3.864-1.728-6.996-1.728-6.996-1.728-1.296-3.372-1.26-3.372-1.26l-.168.192c2.04.624 2.988 1.524 2.988 1.524-1.248-.684-2.472-1.02-3.612-1.152-.864-.096-1.692-.072-2.424.024l-.204.024c-.42.036-1.44.192-2.724.756-.444.204-.708.348-.708.348s.996-.948 3.156-1.572l-.12-.144s-1.644-.036-3.372 1.26c0 0-1.728 3.132-1.728 6.996 0 0 1.008 1.74 3.66 1.824 0 0 .444-.54.804-.996-1.524-.456-2.1-1.416-2.1-1.416l.336.204.048.036.047.027.014.006.047.027c.3.168.6.3.876.408.492.192 1.08.384 1.764.516.9.168 1.956.228 3.108.012.564-.096 1.14-.264 1.74-.516.42-.156.888-.384 1.38-.708 0 0-.6.984-2.172 1.428.36.456.792.972.792.972zm-5.58-5.604c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332.012-.732-.54-1.332-1.224-1.332zm4.38 0c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332 0-.732-.54-1.332-1.224-1.332z" /></svg>
                </Link>
              </div>
            </h2>
          </div>
        </div>
      </main>
    </>
  );
}
