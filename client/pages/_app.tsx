import '../styles/globals.css'
import { AppProps } from 'next/app'
import Layout from '../comps/Layout'
import { useState }from 'react'
import Button from '@material-ui/core/Button'



function MyApp({ Component, pageProps }: AppProps) {
  
  // Softly making sure if the user is over legal drinking age
  const [legal, setLegal] = useState<boolean>(true)

  return (
    <>
    {legal === true ? <Layout>
      <Component {...pageProps} />
    </Layout> : <div>
      <h1>당신은 19세 이상입니까?</h1>
      <Button onClick={() => setLegal(true)}variant="contained" color="primary">예</Button>
      <Button onClick={() => setLegal(false)}variant="contained" color="secondary">아니오</Button>
      </div>}
    </>
  )
}

export default MyApp
