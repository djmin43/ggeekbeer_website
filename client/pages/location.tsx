import React, { useEffect, useState } from 'react'
import Head from 'next/head';
import styles from '../styles/Location.module.css'


const location = () => {

    var map = null;

    const initMap = () => {

        var map = new naver.maps.Map('map', {
            center: new naver.maps.LatLng(37.3595316, 127.1052133),
            zoom: 15,
            zoomControl: true
        });
        var marker = new naver.maps.Marker({
            position: new naver.maps.LatLng(37.3595316, 127.1052133),
            map: map
        });
        var contentString = [
            '   <h3>끽비어을지로펍</h3>',
            '   <p>서울특별시 중구 태평로1가 31 | 서울특별시 중구 세종대로 110 서울특별시청<br />',

            '       02-120 | 공공,사회기관 &gt; 특별,광역시청<br />',
            '       <a href="http://www.seoul.go.kr" target="_blank">www.seoul.go.kr/</a>',
            '   </p>',
            '</div>'
        ].join('');

        var infowindow = new naver.maps.InfoWindow({
            content: contentString
        });
        
        naver.maps.Event.addListener(marker, "click", function(e) {
            if (infowindow.getMap()) {
                infowindow.close();
            } else {
                infowindow.open(map, marker);
            }
        });
        
        infowindow.open(map, marker);
        
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
