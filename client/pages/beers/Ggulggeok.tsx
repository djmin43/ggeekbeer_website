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
                <h1>꿀꺽</h1>
                <p><i>german lager • 4.6% • IBU 18</i></p>
                <span><i><b>Malt:</b> Finest lager malt and dextrin malt</i></span>
                <span><i><b>Hops:</b> American cascade, centennial, columbus, and german noble variety</i></span>
                <span><i><b>Yeast:</b> W-34/70 Germal Lager</i></span>
                <h3>'꿀꺽'은 라거 맥주로, 맥주의 많은 매력들 중 '다가가기 쉬움'과 '마시기 편함'을 잘 보여주는 스타일입니다. 우리는 여기에 중점을 두고 '홉'의 개성을 부드럽게 살려주고자 노력했습니다.</h3>
                <h3>편안하게 다가가면서 메인 스트림과 다른 크래프트 맥주의 매력을 소개하고 싶었습니다. 크래프트 맥주를 좋아하는 사람들, 처음 접하게 될 사람들 간의 경계를 허물고 모두 즐길 수 있는 술이 되길 바랍니다.</h3>
                </Grid>
        </Grid>
        </div>


    )
}

export default Ggulggeok
