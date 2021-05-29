import Head from 'next/head';
import About from './about';
import Location from './location'
import ContactUs from './contact_us';
import Intro from './intro'
import Beers from './beers/index'
import React, { useEffect } from 'react'
import CarouselPage from './CarouselPage'





export default function Home({regularBeers, seasonalBeers}: any) {


  return (
    <>
    
    <Head>
      <title>끽비어컴퍼니</title>
      <meta name="title" content="끽비어"></meta>
      <meta name="description" content="한국 크래프트맥주 양조장 끽비어컴퍼니입니다. 을지로 탭하우스에서 만나보실 수 있습니다."></meta>
      <meta property="og:title" content="끽비어컴퍼니" />
      <meta property="og:description" content="한국 크래프트맥주 양조장 끽비어컴퍼니입니다. 을지로 탭하우스에서 만나보실 수 있습니다." />
      <meta property="og:image"  content="../public/ggeek_logo_long.jpg" />

    </Head>
         {/* <Intro /> */}
         <About />
         <CarouselPage />
          <Beers />
          <Location />
         <ContactUs />

    </>
  );
};
