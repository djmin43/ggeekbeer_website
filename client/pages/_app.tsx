import '../styles/globals.css'
import { AppProps } from 'next/app'
import Layout from '../comps/Layout'
import Head from 'next/head'


function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>
    <Head>
      <link rel="icon" href="/favicon.ico" />
    </Head>



      <Layout>
      <Component {...pageProps} />
      </Layout>

    </>
  )
}

export default MyApp

