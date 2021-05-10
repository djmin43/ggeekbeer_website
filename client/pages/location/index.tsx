import React, { useEffect, useState } from 'react'
import Head from 'next/head';
import styles from '../../styles/Location.module.css'
import Grid from '@material-ui/core/Grid'


const location = () => {


    const initMap = () => {
        // Taphouse
        var taphouse = new naver.maps.Map('taphouse', {
            center: new naver.maps.LatLng(37.56707695385681, 126.99561649825412),
            zoom: 25,
            zoomControl: true
        });
        var taphouseMarker = new naver.maps.Marker({
            position: new naver.maps.LatLng(37.56707695385681, 126.99561649825412),
            map: taphouse
        });
          
        // Brewery
        var brewery = new naver.maps.Map('brewery', {
            center: new naver.maps.LatLng(37.71344096516783, 126.8666797982575),
            zoom: 25,
            zoomControl: true
        });
        var breweryMarker = new naver.maps.Marker({
            position: new naver.maps.LatLng(37.71344096516783, 126.8666797982575),
            map: brewery
        });
          
    }
    

    useEffect(() => {
        initMap()

    }, [])

    return (
        <>
        <Head>

        </Head>

        <div className={styles.location} id="location">

        <Grid container>
            <Grid className={styles.mapContainer} xs={12} md={6} item>
                <div id="taphouse" className={styles.maps}></div>
            </Grid>
            <Grid className={styles.description} xs={12} md={6} item>
                <h3>PUB</h3>
                <p>서울시 중구 을지로 157 3층 다열 376호
                <br/>376 Ho, Da-Yeol, 3rd floor, 158-1, Eulji-ro, Jung-gu, Seoul, Republic of Korea
                </p>
                <span>Tel: 070-8152-1234
                <br/>Fax: 031-963-5225</span>
                <span></span>
                <h3>OPEN HOURS</h3>
                <span>Monday - Friday 4pm - 10pm
                <br/>Saturday 3pm - 10pm</span>
            </Grid>
        </Grid>
        <Grid container>
        <Grid className={styles.mapContainer} xs={12} md={6} item>
                <div id="brewery" className={styles.maps}></div>
            </Grid>
            <Grid className={styles.description}  xs={12} md={6} item>
                <h3>Brewery</h3>
                <p>경기도 고양시 덕양구 고골길 128-10 A동
                <br/>128-10, Gogol-gil, Deogyang-gu, Goyaing-si, Geyonggi-do, Republic of Korea
                </p>
                <span>Tel: 031-963-5225
                <br/>Fax: 031-963-5225</span>
                <span></span>
                <h3>PATUO HOURS</h3>
                <span>Friday 3pm - 9pm
                <br/>Saturday 3pm - 9pm</span>
            </Grid>
        </Grid>


      </div>
      </>
    )
}

export default location
