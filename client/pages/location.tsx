import React, { useEffect } from 'react'
import Head from 'next/head';
import styles from '../styles/Location.module.css'


const location = () => {

 
    return (
        <div id="location">
            <Head>
            </Head>
            끽비어 탭하우스는 을지로에 있습니다.
            <div id="map" className={styles.maps}></div>

            끽비어 양조장은 고양시에 있습니다. 

        </div>
    )
}

export default location
