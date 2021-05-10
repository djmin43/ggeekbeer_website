import React, {useState, useEffect} from 'react'
import Grid from '@material-ui/core/Grid'
import styles from '../../styles/Beer.module.css'
import Ggulggeok from './ggulggeok'
import Smimm from './smimm'
import Head from 'next/head'



const index = () => {


    return (
        <>
        <Head>
            <meta name="title" content="끽비어컴퍼니"></meta>
            <meta name="description" content=""></meta>
        </Head>
        <div id="beers" className={styles.beer} >
            <Ggulggeok />
            <Smimm />
        </div>
        </>
    )
}

export default index
