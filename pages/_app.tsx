import { AppProps } from 'next/app'
import '../styles/index.css'
import '../styles/katex.min.css'
import { DefaultSeo } from 'next-seo'
import SEO from '../next-seo.config';
import 'windi.css'


export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO}/>
      <Component {...pageProps} />
    </>
  )
}
