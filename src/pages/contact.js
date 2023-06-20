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
          <div className="flex flex-col sm:ml-8 sm:w-2/3 lg:w-1/2">
            <h1 className="text-3xl font-black text-center text-white sm:text-left sm:text-5xl">
              Have a <span className="text-red-500">question,</span> <span className="text-blue-500">comment,</span> or <span className="text-yellow-500">project idea?</span> I&apos;d love to speak with you!
            </h1>
            <h2 className="mt-2 font-bold text-center text-white text-l sm:text-2xl sm:text-left">
              I&apos;d love to hear from you! Please feel free to contact me via, <Link href="mailto:hello@camdan.me" className="link-underline">email</Link>, <Link href="tel:7194226326" className="link-underline">text</Link>, <Link href="tel:7194226326" className="link-underline">phone</Link>, or <Link href="/about" className="link-underline">social media</Link>.<br />
              <br />
              If you&apos;d like to work with me, you can reach out for my schedule and rates, and check out my <Link href="/projects" className="underline">projects</Link> to see what I&apos;ve done before.
              <div className="flex flex-row justify-center mt-8 sm:justify-start">
                <Link href="mailto:hello@camdan.me" target="_blank" className="underline">
                  hello@camdan.me
                </Link>
                &nbsp;/&nbsp;
                <Link href="tel:7194226326" className="underline">
                  (719) 422-6326
                </Link>
              </div>
              <br />
              <span className="text-sm italic text-gray-50">If you&apos;re trying to view/pay invoices or manage your billing, <Link href="https://billing.stripe.com/p/login/4gw6rJ136bvp5Ne4gg" className="underline" target="_blank">click here</Link>.</span>
            </h2>
          </div>
        </div>
      </main>
    </>
  );
}
