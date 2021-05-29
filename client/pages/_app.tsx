import '../styles/globals.css'
import { AppProps } from 'next/app'
import Layout from '../comps/Layout'
import Head from 'next/head'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <Head>
      <link rel="icon" href="favicon.ico" />
      <title>끽비어</title>
      <meta name="title" content="끽비어컴퍼니"></meta>
      <meta name="description" content="한국 크래프트맥주 양조장 끽비어컴퍼니입니다. 을지로 탭하우스에서 만나보실 수 있습니다."></meta>
      <meta property="og:title" content="끽비어컴퍼니" />
      <meta property="og:description" content="한국 크래프트맥주 양조장 끽비어컴퍼니입니다. 을지로 탭하우스에서 만나보실 수 있습니다." />
      <meta property="og:image"  content="../public/ggeek_logo_long.jpg" />
      <script type="text/javascript" src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=ll2fjdhq8m"></script>
   
    </Head>
      <Layout>
      <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp

