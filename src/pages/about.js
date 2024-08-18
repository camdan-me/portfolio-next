import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import UniversalHead from '../components/UniversalHead.js';

import logo from '../../public/assets/img/transparent-logo.png';

export default function Home() {
  return (
    <>
      <Head>
        <UniversalHead description="I'm a creative in the event industry who likes making cool stuff. Learn more about me and how to get in touch!" />

        <title>About Camdan</title>
      </Head>

      <main className="flex flex-col items-center justify-center w-screen h-screen">
        <div className="flex flex-col items-center mx-4 lg:ml-32 sm:flex-row">
          <Image src={logo} width={128} height={128} priority="true" className="w-24 h-24 my-4 sm:w-32 sm:h-32" alt="C Logo" />
          <div className="flex flex-col sm:ml-8 sm:w-2/3 lg:w-1/2">
            <h1 className="text-3xl font-black text-center text-white sm:text-left sm:text-5xl">
              I&apos;m a <span className="text-red-500">creative</span> in the <span className="text-blue-500">event industry</span> who likes <span className="text-yellow-500">making cool stuff</span>.
            </h1>
            <h2 className="mt-2 font-bold text-center text-white text-l sm:text-2xl sm:text-left">
              My skillset tends to be a mix of design, software engineering, video production,
              and lighting design with a little audio engineering thrown in.<br />
              <br />
              I&apos;m currently working as a freelance videographer and lighting designer in the Denver entertainment industry. Interested in working with me? Please feel free to <Link href="/contact" className="underline">reach out</Link>!<br />
              <div className="flex flex-row justify-center mt-8 sm:justify-start">
                <Link href="/socials/youtube" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 mx-2 sm:w-12 fill-white" viewBox="0 0 48 48"><g><path d="M47.5,14.4c0,0-0.5-3.3-1.9-4.8c-1.8-1.9-3.9-1.9-4.8-2C34.1,7.1,24,7.1,24,7.1h0c0,0-10.1,0-16.8,0.5c-0.9,0.1-3,0.1-4.8,2c-1.4,1.5-1.9,4.8-1.9,4.8S0,18.3,0,22.2v3.6c0,3.9,0.5,7.8,0.5,7.8s0.5,3.3,1.9,4.8c1.8,1.9,4.2,1.9,5.3,2.1c3.8,0.4,16.3,0.5,16.3,0.5s10.1,0,16.8-0.5c0.9-0.1,3-0.1,4.8-2c1.4-1.5,1.9-4.8,1.9-4.8s0.5-3.9,0.5-7.8v-3.6C48,18.3,47.5,14.4,47.5,14.4z M19,30.2l0-13.5l13,6.8L19,30.2z" /></g></svg>
                </Link>
                <Link href="/socials/github" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 mx-2 sm:w-12 fill-white" viewBox="0 0 48 48"><g><path fill-rule="evenodd" clip-rule="evenodd" d="M24,0.6c-13.3,0-24,10.7-24,24c0,10.6,6.9,19.6,16.4,22.8c1.2,0.2,1.6-0.5,1.6-1.2c0-0.6,0-2.1,0-4.1c-6.7,1.5-8.1-3.2-8.1-3.2c-1.1-2.8-2.7-3.5-2.7-3.5c-2.2-1.5,0.2-1.5,0.2-1.5c2.4,0.2,3.7,2.5,3.7,2.5c2.1,3.7,5.6,2.6,7,2c0.2-1.6,0.8-2.6,1.5-3.2c-5.3-0.6-10.9-2.7-10.9-11.9c0-2.6,0.9-4.8,2.5-6.4c-0.2-0.6-1.1-3,0.2-6.4c0,0,2-0.6,6.6,2.5c1.9-0.5,4-0.8,6-0.8c2,0,4.1,0.3,6,0.8c4.6-3.1,6.6-2.5,6.6-2.5c1.3,3.3,0.5,5.7,0.2,6.4c1.5,1.7,2.5,3.8,2.5,6.4c0,9.2-5.6,11.2-11,11.8c0.9,0.7,1.6,2.2,1.6,4.4c0,3.2,0,5.8,0,6.6c0,0.6,0.4,1.4,1.7,1.2C41.1,44.2,48,35.2,48,24.6C48,11.3,37.3,0.6,24,0.6z" /></g></svg>
                </Link>
                <Link href="/socials/whatsapp" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 mx-2 sm:w-12 fill-white" viewBox="0 0 48 48"><g><path d="M0.10739,48l3.37542-12.32542c-2.08204-3.60688-3.17763-7.69894-3.17592-11.89098C0.31215,10.66928,10.98554,0,24.09976,0c6.36475,0.00253,12.33865,2.47971,16.83067,6.97547c4.49214,4.49575,6.96465,10.47174,6.96218,16.82712c-0.00531,13.11432-10.67966,23.785-23.79253,23.785h-0.00006h-0.00974c-3.98213-0.00164-7.89481-1.00024-11.36995-2.89505L0.10739,48z M13.30466,40.38635l0.72215,0.42849c3.03621,1.80129,6.51666,2.7542,10.06511,2.75559h0.0081c10.89973,0,19.77101-8.8685,19.77545-19.76937c0.00202-5.28238-2.053-10.2494-5.78667-13.98611c-3.73368-3.73672-8.69893-5.79578-13.98092-5.79781c-10.90811,0-19.77946,8.86787-19.78382,19.76797c-0.00152,3.73532,1.04402,7.37333,3.02355,10.52097l0.47026,0.7479l-1.99782,7.29512L13.30466,40.38635z" /><path data-color="color-2" fill-rule="evenodd" clip-rule="evenodd" d="M18.15336,13.84087c-0.48253-1.1589-0.97266-1.0021-1.33759-1.02027c-0.34636-0.01724-0.74309-0.02088-1.13941-0.02088s-1.04036,0.14873-1.5853,0.74366c-0.54492,0.59496-2.08067,2.03281-2.08067,4.958c0,2.92519,2.13022,5.7512,2.42748,6.14787c0.29723,0.39667,4.19204,6.39961,10.15569,8.97392c1.41836,0.6123,2.52578,0.9779,3.38909,1.25194c1.42423,0.45222,2.72022,0.38844,3.74456,0.23544c1.14216-0.17059,3.51729-1.43777,4.01272-2.82601c0.49537-1.38824,0.49537-2.57817,0.34674-2.82608c-0.14856-0.24784-0.54491-0.3966-1.13937-0.69412c-0.59452-0.29745-3.51734-1.73529-4.06233-1.93359c-0.54491-0.19831-0.9412-0.29746-1.33755,0.29751c-0.39628,0.59491-1.5356,1.9336-1.88241,2.3302c-0.34674,0.39667-0.69355,0.44627-1.28801,0.14876c-0.59453-0.29745-2.51008-0.92506-4.7808-2.94978c-1.76725-1.57578-2.96047-3.52215-3.30725-4.11712c-0.34677-0.59496-0.03689-0.91665,0.26073-1.2129c0.26739-0.26626,0.59446-0.69412,0.89172-1.04118c0.29723-0.34706,0.39632-0.59497,0.59446-0.99157c0.19818-0.39667,0.09909-0.74372-0.04955-1.04121C19.83772,17.956,18.64879,15.03077,18.15336,13.84087z" /></g></svg>
                </Link>
                <Link href="/socials/linkedin" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 mx-2 sm:w-12 fill-white" viewBox="0 0 48 48"><g><path d="M46,0H2C0.9,0,0,0.9,0,2v44c0,1.1,0.9,2,2,2h44c1.1,0,2-0.9,2-2V2C48,0.9,47.1,0,46,0z M14.2,40.9H7.1V18h7.1V40.9z M10.7,14.9c-2.3,0-4.1-1.8-4.1-4.1c0-2.3,1.8-4.1,4.1-4.1c2.3,0,4.1,1.8,4.1,4.1C14.8,13,13,14.9,10.7,14.9z M40.9,40.9h-7.1V29.8c0-2.7,0-6.1-3.7-6.1c-3.7,0-4.3,2.9-4.3,5.9v11.3h-7.1V18h6.8v3.1h0.1c0.9-1.8,3.3-3.7,6.7-3.7c7.2,0,8.5,4.7,8.5,10.9V40.9z" /></g></svg>
                </Link>
              </div>
            </h2>
          </div>
        </div>
      </main>
    </>
  );
}
