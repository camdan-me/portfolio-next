import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';

import { Baloo_2 } from 'next/font/google';

import Script from 'next/script';

import cn from 'classnames';
import mixpanel from 'mixpanel-browser';

import Navbar from '../components/Navbar.js';

import '@/styles/globals.css';

const baloo = Baloo_2({ subsets: ['latin'] });

const prefersReducedMotion = (w) => {
  return !!(w.matchMedia('(prefers-reduced-motion: reduce)') === true || w.matchMedia('(prefers-reduced-motion: reduce)').matches === true);
};

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const prevScreen = useRef(Component);
  const [transitioning, setTransitioning] = useState(false);

  mixpanel.init('0888b8e1959e15a7eb39b01c6d5c055e', { debug: true });

  useEffect(() => {
    if (!prefersReducedMotion(window)) {
      router.events.on('routeChangeStart', () => {
        setTransitioning(true);
      });

      router.events.on('routeChangeComplete', (url) => {
        mixpanel.track('Page View', { url });

        window.gtag('config', 'G-VT4FYXXHKH', {
          page_path: url,
        });

        setTimeout(() => {
          prevScreen.current = Component;
          setTransitioning(false);
        }, 280);
      });

      return () => {
        router.events.off('routeChangeComplete');
        router.events.off('routeChangeStart');
      };
    }
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

      <Script src="https://www.googletagmanager.com/gtag/js?id=G-VT4FYXXHKH" strategy="afterInteractive"></Script>
      <Script
        id='google-analytics'
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-VT4FYXXHKH', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
}
