import React, { useEffect } from 'react'
import Head from 'next/head';
import styles from '../styles/Location.module.css'


const location = () => {


    function initMap() {
        const map = new naver.maps.Map('map', {
            center: new naver.maps.LatLng(37.3595704, 127.105399),
            zoom: 10
        });
    }

    useEffect(() => {
        initMap()
    }, [])

    return (
        <div>
            <Head>
            <script type="text/javascript" src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=ll2fjdhq8m"></script>

                {/* ll2fjdhq8m */}
            </Head>
            끽비어 탭하우스는 을지로에 있습니다.
            <div id="map" className={styles.maps}></div>

        </div>
    )
}

export default location
