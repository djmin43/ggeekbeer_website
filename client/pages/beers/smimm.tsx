import React from 'react'
import Grid from '@material-ui/core/Grid'
import styles from '../../styles/Beer.module.css'

const smimm = () => {
    return (
        <Grid  container>
            <Grid  xs={12} sm={6} item>
                    <img className={styles.images} src='/smimmBottle.jpg'/>
            </Grid>
            <Grid  xs={12} sm={6} item>
                <div className={styles.container} >
                    <h2>스밈 Smimm - Craft Ale</h2>
                    <h4><i></i></h4>
                    <span><i>ABV: 5.5% • IBU 44 • 형태: Keg, Bottle(330ml)</i></span>
                    <p>'스밈'은 크래프트 에일로 호밀과 카라멜 몰트를 절제하여 사용해 뽑아낸 몰트 캐릭터와 은은한 효모에스테르의 바탕 위에 팔코너스 플라이트, 심코 홉을 사용하여 레몬, 자몽의 시트러스한 느낌과 꽃향을가진 홉 캐릭터가 주를 이루는 맥주입니다.</p>
                    <p>향에서 시작되는 달달한 뉘앙스에서 시작해 민트, 허브와 같은 상쾌한 피니시가 특징입니다. </p>
                </div>
            </Grid>
        </Grid>
    )
}

export default smimm
