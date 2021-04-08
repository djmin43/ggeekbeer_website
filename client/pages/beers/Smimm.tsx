import React from 'react'
import Grid from '@material-ui/core/Grid'
import Image from 'next/image'
import styles from '../../styles/Beer.module.css'

const Smimm = () => {
    return (
        <div className={styles.beer} >
        <Grid  container>
                <Grid xs={12} sm={6} item>
                    <Image src="/ggeek_logo.jpeg" alt="끽비어 로고" 
                    width={500}
                    height={500}/>
                </Grid>        
                <Grid className={styles.container} xs={12} sm={6} item>
                <h1>스밈</h1>
                <p><i>Craft Ale • 5.5% • IBU 44</i></p>
                <p><i><b>형태:</b>Keg(발주가능) • Bottle(준비중)</i></p>
                <span><i><b>Malt:</b> ?</i></span>
                <span><i><b>Hops:</b> ?</i></span>
                <span><i><b>Yeast:</b> ?</i></span>
                <h3>'스밈'은 크래프트 에일로 호밀과 카라멜 몰트를 절제하여 사용해 뽑아낸 몰트 캐릭터와 은은한 효모 에스테르의 바탕 위에 팔코너스 플라이트, 심코 홉을 사용하여 레몬, 자몽의 시트러스한 느낌과 꽃향을 가진 홉 캐릭터가 주를 이루는 맥주입니다.</h3>
                <h3>향에서 시작되는 달달한 뉘앙스에서 시작해 민트, 허브와 같은 상쾌한 피니시가 특징입니다.</h3>
                </Grid>
        </Grid>
        </div>


    )
}

export default Smimm
