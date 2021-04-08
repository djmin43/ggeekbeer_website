import '../styles/globals.css'
import { AppProps } from 'next/app'
import Layout from '../comps/Layout'
import Head from 'next/head'
import Cookies from 'js-cookie'
import Front from '../comps/Front'
import { useState, useEffect } from 'react'



function MyApp({ Component, pageProps }: AppProps) {

  const [legalPage, setLegalPage] = useState<boolean>(false)

  useEffect(() => {
    if(Cookies.get('age') !== 'yes'){
      setLegalPage(true)
    } 
  }, [])

  return (
    <>
    <Head>
      <link rel="icon" href="/favicon.ico" />
    </Head>
      {legalPage === false ? 
      <Layout>
      <Component {...pageProps} />
      </Layout>
      : <Front />}
    </>
  )
}

export default MyApp
