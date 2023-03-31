import { Analytics } from '@vercel/analytics/react';
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';

import { Baloo_2 } from 'next/font/google';

import cn from 'classnames';

import Navbar from '../components/Navbar.js';

import '@/styles/globals.css';

const baloo = Baloo_2({ subsets: ['latin'] });

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const prevScreen = useRef(Component);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    router.events.on('routeChangeStart', () => {
      setTransitioning(true);
    });
    router.events.on('routeChangeComplete', () => {
      setTimeout(() => {
        prevScreen.current = Component;
        setTransitioning(false);
      }, 280);
    });

    return () => {
      router.events.off('routeChangeComplete');
      router.events.off('routeChangeStart');
    };
  }, [Component, router.events]);

  const Screen = !transitioning ? Component : prevScreen.current;

  return (
    <>
      <style jsx global>{`
        h1, h2, h3, h4, h5, h6 {
          font-family: ${baloo.style.fontFamily};
        }
      `}</style>

      <div className='fixed w-screen h-screen overflow-hidden bg-gray-500 -z-50'></div>

      <div
        className={cn({
          'animate-animateEnter': !transitioning,
          'animate-animateExit': transitioning,
        })}>
        <Screen {...pageProps} />
      </div>

      <Navbar />
      <Analytics />
    </>
  );
}
