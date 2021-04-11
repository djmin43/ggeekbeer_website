import Head from 'next/head'
import ContactUs from './contactus'
import BeerList from './beerlist'
import About from './about'
import NewsList from './newslist'
import { NewsProvider } from '../comps/contexts/NewsContext'
import { RegularProvider } from '../comps/contexts/RegularContext'
import { SeasonalProvider } from '../comps/contexts/SeasonalContext'

export default function Home() {
  return (
    <>
    <Head>
      <title>끽비어입니다.</title>
      <meta name="title" content="끽비어컴퍼니"></meta>
      <meta name="description" content="크래프트맥주 양조장 끽비어컴퍼니입니다. 을지로 탭하우스에서 만나보실 수 있습니다."></meta>
    </Head>
    <NewsProvider >
    <RegularProvider>
    <SeasonalProvider>
      <About />
      <NewsList />
      <BeerList />
      <ContactUs />
    </SeasonalProvider>
    </RegularProvider>
    </NewsProvider>
    </>
  )
}
