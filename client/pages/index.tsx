import Head from 'next/head'
import ContactUs from './ContactUs'
import Beer from './Beer'
import About from './About'

export default function Home() {
  return (
    <>
    <Head>
      <title>끽비어입니다.</title>
      <link rel="icon" type="img/png" href="favicon.ico" />
      <meta name="title" content="끽비어컴퍼니"></meta>
      <meta name="description" content="크래프트맥주 양조장 끽비어컴퍼니입니다. 을지로 탭하우스에서 만나보실 수 있습니다."></meta>
    </Head>
    <div>
      <About />
      <Beer />
      <ContactUs />
    </div>
    </>
  )
}
