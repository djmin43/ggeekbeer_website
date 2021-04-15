import '../styles/globals.css'
import { AppProps } from 'next/app'
import Layout from '../comps/Layout'
import Head from 'next/head'
import Cookies from 'js-cookie'
import Front from '../comps/Front'
import { useState, useEffect } from 'react'

import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../src/theme';


function MyApp({ Component, pageProps }: AppProps) {

  const [legalPage, setLegalPage] = useState<boolean>(false)

  useEffect(() => {
    if(Cookies.get('age') !== 'yes'){
      setLegalPage(true)


      // const jssStyles = document.querySelector('#jss-server-side');
      // if (jssStyles) {
      //   jssStyles.parentElement!.removeChild(jssStyles);
      // }
    } 
  }, [])

  return (
    <>
    <Head>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    {/* <ThemeProvider theme={theme}>
      <CssBaseline />   */}
      {legalPage === false ? 
      <Layout>
      <Component {...pageProps} />
      </Layout>
      : <Front />}

    {/* </ThemeProvider> */}
    </>
  )
}

export default MyApp

