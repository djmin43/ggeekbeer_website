import React , { useEffect, useState, useRef } from 'react'
import styles from '../../styles/AboutUs.module.css'

import { Controller, Scene } from 'react-scrollmagic';



const index = () => {

    const [offset, setOffset] = useState<number>(0);
    const playerRef = useRef<any>();
    const currentTime: number = (offset/100);

    useEffect(() => {

      window.onscroll = () => {
        setOffset(window.pageYOffset)
      }
      playerRef.current.currentTime = currentTime
      console.log(currentTime)
    }, [offset]);
    
    return (
        <div>
            끽비어를 조금 더 자세하게 소개하는 페이지로 만들 계획입니다. 스크롤에 맞게 움직이는 백그라운드에서 움직이는 동영상을 함께 구현할것입니다.

            <Controller>
                <Scene
                indicators={true}
                duration={1600}
                offset={345}
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
