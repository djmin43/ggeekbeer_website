import Head from 'next/head';
import About from './about';
import NewsList from './news_list';
import BeerList from './beer_list';
import ContactUs from './contact_us';
import Intro from './intro'

export default function Home() {
  return (
    <>
    <Head>
      <title>끽비어입니다.</title>
      <meta name="title" content="끽비어컴퍼니"></meta>
      <meta name="description" content="크래프트맥주 양조장 끽비어컴퍼니입니다. 을지로 탭하우스에서 만나보실 수 있습니다."></meta>
    </Head>
      <Intro />
      <About />
      {/* <NewsList />
      <BeerList /> */}
      <ContactUs />
    </>
  );
};
