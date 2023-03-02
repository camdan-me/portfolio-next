import '@/styles/globals.css'

import { Baloo_2 } from 'next/font/google'

const baloo = Baloo_2({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        h1, h2, h3, h4, h5, h6 {
          font-family: ${baloo.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  )
}