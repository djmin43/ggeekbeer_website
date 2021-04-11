import React , { useEffect, useState, useRef } from 'react'
import styles from '../../styles/AboutUs.module.css'
import Grid from '@material-ui/core/Grid'
import Image from 'next/image'
import { Controller, Scene } from 'react-scrollmagic';



const index = () => {

    const [offset, setOffset] = useState<number>(0);

    const playerRef = useRef<any>();

    const currentTime: number = (offset/100)

    // const controller = new ScrollMagic.Controller();



    // offset: 345; duration: 1600;

    useEffect(() => {

      window.onscroll = () => {
        setOffset(window.pageYOffset)
      }
      playerRef.current.currentTime = currentTime
      console.log(currentTime)
    }, [offset]);
    
    return (
        <div>
            <div  className={styles.about} id="about">
                        <Grid  container>
                        <Grid xs={12} sm={4} item>
                            <Image src="/ggeek_logo.jpeg" alt="끽비어 로고" 
                            width={500}
                            height={500}/>
                        </Grid>        
                        <Grid className={styles.container} xs={12} sm={8} item>
                        <h1 >끽비어를 찾아주셔서 고맙습니다.</h1>
                        <p>맥주를 사랑하는 사람들이 모여 만든 공간입니다. 국내외 브루어리 맥주를 선별하여 제공합니다.</p>    
                        </Grid>
                        </Grid>
    
            </div>
            <Controller>
                <Scene
                indicators={true}
                duration={1600}
                // offset={345}
                // triggerHook={0}
                pin={true}
                triggerElement='#pouring'
                >
                    <div id="pouring">
                        <video className={styles.video} ref={playerRef} ><source src="/pouring_beer.mp4" /></video>
                    </div>
                </Scene>
            </Controller>
            </div>




    )
}

export default index
