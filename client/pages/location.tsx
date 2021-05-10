import React, { useEffect, useState } from 'react'
import Head from 'next/head';
import styles from '../styles/Location.module.css'


const location = () => {

    var map = null;

    const initMap = () => {

        var map = new naver.maps.Map('map', {
            center: new naver.maps.LatLng(37.56707695385681, 126.99561649825412),
            zoom: 15,
            zoomControl: true
        });
        var marker = new naver.maps.Marker({
            position: new naver.maps.LatLng(37.56707695385681, 126.99561649825412),
            map: map
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
