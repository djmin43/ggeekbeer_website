import React, { useEffect, useState } from 'react'
import Head from 'next/head';
import styles from '../styles/Location.module.css'


const location = () => {

    var map = null;

    const initMap = () => {
        map = new naver.maps.Map('map', {
            center: new naver.maps.LatLng(37.3595704, 127.105399),
            zoom: 10
        });
    }

    useEffect(() => {
        initMap()

    }, [])

    return (
        <>
        <Head>
        </Head>
        <div id="location">


            끽비어 탭하우스는 을지로에 있습니다.

        <div id="map" className={styles.maps}></div>

      </div>
      </>
    )
}

export default location
