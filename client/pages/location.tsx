import React, { useEffect, useState } from 'react'
import Head from 'next/head';
import styles from '../styles/Location.module.css'


const location = () => {

    // var map = null;

    const initMap = () => {
        var map = new naver.maps.Map('map', {
            center: new naver.maps.LatLng(37.5669239, 126.9934278),
            zoom: 10
        });
        var marker = new naver.maps.Marker({
            position: new naver.maps.LatLng(37.5669239, 126.9934278),
            map: map
        });
    }
    

    useEffect(() => {
        initMap()

    }, [])

    return (
        <>
        <Head>
        <script type="text/javascript" src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=ll2fjdhq8m"></script>
        </Head>
        <div id="location">
            끽비어 탭하우스는 을지로에 있습니다.
        <div id="map" className={styles.maps}></div>

      </div>
      </>
    )
}

export default location
