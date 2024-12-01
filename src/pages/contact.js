import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import UniversalHead from '../components/UniversalHead.js';

import logo from '../../public/assets/img/transparent-logo.png';

export default function Home() {
  return (
    <>
      <Head>
        <UniversalHead description="Get in touch with Camdan Mead through phone, email, or social media." />

        <title>Contact Camdan</title>
      </Head>

      <main className="flex flex-col items-center justify-center w-screen h-screen">
        <div className="flex flex-col items-center mx-4 lg:ml-32 sm:flex-row">
          <Image src={logo} width={128} height={128} priority="true" className="w-24 h-24 my-4 sm:w-32 sm:h-32" alt="C Logo" />
          <div className="flex flex-col sm:ml-8 sm:w-2/3">
            <h1 className="text-3xl font-black text-center text-white sm:text-left sm:text-5xl">
              Have a <span className="text-red-500">question,</span> <span className="text-blue-500">comment,</span> or <span className="text-yellow-500">project idea?</span> I&apos;d love to speak with you!
            </h1>
            <h2 className="mt-2 font-bold text-center text-white text-l sm:text-2xl sm:text-left">
              If you&apos;re looking for lighting design or VJ services please visit <Link href="https://ionentertainment.co/" target="_blank" className="link-underline">Ion Entertainment</Link>, my lighting design company.<br />
              <br />
              If you have a question or comment about Fidgetable, you can get in touch through <Link href="https://fidgetable.camdan.me/contact" target="_blank" className="link-underline">Fidgetable&apos;s website</Link>.<br />
              <br />
              For anything else, though, feel free to reach out below or through <Link href="/about" className="link-underline">social media</Link>!<br />
              <div className="flex flex-row justify-center mt-8 sm:justify-start">
                <Link href="mailto:hello@camdan.me" target="_blank" className="underline">
                  hello@camdan.me
                </Link>
                &nbsp;/&nbsp;
                <Link href="tel:3039998067" className="underline">
                  (303) 999-8067
                </Link>
              </div>
            </h2>
          </div>
        </div>
      </main>
    </>
  );
}
