import React from 'react'
import styles from '../styles/About.module.css'
import Grid from '@material-ui/core/Grid'
import Image from 'next/image'



const About = () => {

    
    return (
        <div id="about">
            <div  className={styles.about} id="about">
                    <Grid  container>
                    <Grid xs={12} sm={4} item>
                        <img className={styles.images} src="/ggeek_logo_flag.jpeg"/>
                    </Grid>        
                    <Grid className={styles.container} xs={12} sm={8} item>
                    <p className={styles.korean}>경기도 고양시 덕양구에 위치한 '끽 비어 컴퍼니'는 다섯 명의 양조 전문 인력이 맥주에 대한 철학과 열정을 맛있는 Craft Beer에 고스란히 담아내는 곳입니다.</p>
                    <p className={styles.korean}>끽은 의성어 '끽', 한자 '마실 끽', 'Geek'를 내포한 이름입니다.</p>
                    <p className={styles.english}>Ggeekbeer company located in Deokyang-gu, Goyaing-si, Geyonggi-do is the brewery where five young beer experts that put their passion and philosophies into delectable Craft Beer</p>
                    <p className={styles.english}>Ggeek named after an onomatopoeic word, a meaning of 'to drink' in Korean, and 'geek' in English</p>
                    </Grid>
                    </Grid>
            </div>
        </div>




    )
}

export default About
