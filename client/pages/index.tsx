import Head from 'next/head';
import About from './about';
import NewsList from './news_list';
import BeerList from './beer_list';
import Location from './location'
import ContactUs from './contact_us';
import Intro from './intro'
import Beers from './beers/index'
import React, { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function Home() {


  return (
    <>
    
    <Head>
      <title>끽비어입니다.</title>
      <meta name="title" content="끽비어컴퍼니"></meta>
      <meta name="description" content="한국 크래프트맥주 양조장 끽비어컴퍼니입니다. 을지로 탭하우스에서 만나보실 수 있습니다."></meta>
    </Head>
    <Router>
      <Switch>
        <Route exact path="/intro">
         <Intro />
        </Route>  
        <Route exact path="/about">
          <About />
        </Route>  
        <Route exact path="/location">
          <Location />
        </Route>  
        <Route exact path="/contact">
         <ContactUs />
        </Route>  


        {/* <Beers /> */}
        {/* <NewsList />
        <BeerList /> */}
      </Switch>
    </Router>

    </>
  );
};
