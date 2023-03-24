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
  const [doneTransitioning, setDoneTransitioning] = useState(true);

  useEffect(() => {
    const handler = () => {
      setTransitioning(true);
      setDoneTransitioning(false);
      setTimeout(() => {
        prevScreen.current = Component;
        setTransitioning(false);

        setTimeout(() => {
          setDoneTransitioning(true);
        }, 280);
      }, 280);
    };

    router.events.on('routeChangeComplete', handler);

    return () => {
      router.events.off('routeChangeComplete', handler);
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
      <Navbar />
      <div className={cn({
        'overflow-hidden bg-gray-500': !doneTransitioning,
        'bg-gray-500': doneTransitioning,
      })}>
        <div
          className={cn({
            'animate-slideUpEnter': !transitioning,
            'animate-slideUpLeave': transitioning,
          })}
        >
          <Screen {...pageProps} />
        </div>
      </div>

      <Analytics />
    </>
  );
}
