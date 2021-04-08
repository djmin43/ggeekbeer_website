import React from 'react'
import Grid from '@material-ui/core/Grid'
import Image from 'next/image'
import styles from '../../styles/Beer.module.css'

const Ggulggeok = () => {
    return (
        <div className={styles.beer} >
        <Grid  container>
                <Grid xs={12} sm={6} item>
                    <Image src="/ggeek_logo.jpeg" alt="끽비어 로고" 
                    width={500}
                    height={500}/>
                </Grid>        
                <Grid className={styles.container} xs={12} sm={6} item>
                <h1>홒 IPA</h1>
                <p><i>west coast IPA • 6.3% • IBU 55</i></p>
                <span><i><b>Malt:</b> Finest pale ale golden promise, oats, mlated rye, light crystal</i></span>
                <span><i><b>Hops:</b> Falconers flight, galaxy</i></span>
                <span><i><b>Yeast:</b> US-05</i></span>
                <h3>'홒'은 West coast IPA 스타일의 맥주로, 맥주의 여러 스타일 중 '맥주 꽃'이라고 불리는 재료인 'hop'의 캐릭터가 인상적인 술입니다.</h3>
                <h3>각 종은 저마다 특유의 향을 가지고 있으며 우리는 재미있는 콤보와 적절한 밸런스를 찾아 여러분과 공유하려고 합니다.</h3>
                </Grid>
        </Grid>
        </div>


    )
}

export default Ggulggeok
