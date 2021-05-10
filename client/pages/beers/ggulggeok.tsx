import React from 'react'
import Grid from '@material-ui/core/Grid'
import styles from '../../styles/Beer.module.css'

const ggulggeok = () => {
    return (
        <Grid  container>
            <Grid  xs={12} sm={6} item>
                    <img className={styles.images} src='/ggulggeok_bottle.jpg'/>
            </Grid>
            <Grid  xs={12} sm={6} item>
                <div className={styles.container} >
                    <h2>꿀꺽 Ggul Ggeok - Craft Lager</h2>
                    <h4><i></i></h4>
                    <span><i>ABV: 4.6% • IBU 18 • 형태: Keg, Bottle(330ml)</i></span>
                    <p>'꿀꺽'은 크래프트 라거로 맥주의 많은 매력들 중 다가가기 쉽고 마시기 편한 장점을 가진맥주입니다. 여기에 '홉'의 개성을 부드럽게 살려주고자 노력했습니다. </p>
                    <p>편안하게 소비자에게 다가가며,메인 스트림과 다른 크래프트 맥주의 매력을 보여주고 싶었습니다. 크래프트 맥주를 좋아하는 사람들,처음 접하게 될 사람들 간의 경계를 허물고 모두 즐길 수 있는 '꿀꺽'이 되길 바랍니다.</p>
                </div>
            </Grid>
        </Grid>
    )
}

export default ggulggeok
