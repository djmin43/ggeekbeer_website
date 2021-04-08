import '../styles/globals.css'
import { AppProps } from 'next/app'
import Layout from '../comps/Layout'
import { useState }from 'react'
import Button from '@material-ui/core/Button'
import Head from 'next/head'
import styles from '../styles/App.module.css'



function MyApp({ Component, pageProps }: AppProps) {
  
  // Softly making sure if the user is over legal drinking age
  const [legal, setLegal] = useState<boolean>(false)

  return (
    <>
    <Head>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    {legal === true ? <Layout>
      <Component {...pageProps} />
    </Layout> : 
      <div className={styles.legal}>
        <h1>Ggeek Beer Company</h1>
        <h2>만 19세 이상 음주 가능한 연령입니까?</h2>
        <div>
          <button className={styles.yes} onClick={() => setLegal(true)}>예</button>
          <button className={styles.no} onClick={() => setLegal(false)}>아니오</button>
        </div>
      </div>}
    </>
  )
}

export default MyApp
