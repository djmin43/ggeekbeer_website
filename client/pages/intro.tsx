<<<<<<< HEAD
import React from 'react';
import styles from '../styles/Intro.module.css';
=======
import React from 'react'
import styles from '../styles/AboutUs.module.css'
import Grid from '@material-ui/core/Grid'
import Image from 'next/image'
>>>>>>> parent of 953b7d3... request update from client



const About = () => {

    
    return (
<<<<<<< HEAD
        <div className={styles.main}>
            
=======
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
>>>>>>> parent of 953b7d3... request update from client
        </div>




    )
}

export default About
