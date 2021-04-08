import React from 'react';
import Card from '@material-ui/core/Card';
import Link from 'next/link'
import Grid from '@material-ui/core/Grid';
import styles from '../styles/BeerList.module.css';
import Button from '@material-ui/core/Button'



const Beer = () => {
    return (
        <div className={styles.beer} id="beer">
        {/* Regular Line */}
        <h1 >Year-round</h1>
            <Grid container spacing={5}>
                <Grid  item xs={12} sm={6} md={4} >
                    <Card className={styles.card} elevation={4}>
                        <h2>꿀꺽</h2>
                        <h3>'꿀꺽'은 라거 맥주로, 맥주의 많은 매력들 중 '다가가기 쉬움'과 '마시기 편함'을 잘 보여주는 스타일입니다. 우리는 여기에 중점을 두고 '홉'의 개성을 부드럽게 살려주고자 노력했습니다.</h3>
                        <p><i>german lager • 4.6% • IBU 18</i></p>
                        <Link href="/beers/Ggulggeok"><Button color="primary" variant="outlined" fullWidth>더 알아보기</Button></Link>
                    </Card>
                </Grid>
                <Grid  item xs={12} sm={6} md={4} >
                    <Card className={styles.card} elevation={4}>
                        <h2>잉</h2>
                        <h3>'잉'은 New England IPA 스타일의 맥주로, IPA가 가지는 홉의 과일, 꽃과 같은 긍정적인 향이 극대화되어 터져나오며 적절한 단맛과 조화를 이루는 juice같은 맥주입니다.</h3>
                        <p><i>new england ipa • 6.8% • IBU 40</i></p>
                        <Link href="/beers/Ing"><Button color="primary" variant="outlined" fullWidth>더 알아보기</Button></Link>
                    </Card>
                </Grid>
                <Grid  item xs={12} sm={6} md={4} >
                    <Card className={styles.card} elevation={4}>
                        <h2>스밈</h2>
                        <h3>'스밈'은 크래프트 에일로 호밀과 카라멜 몰트를 절제하여 사용해 뽑아낸 몰트 캐릭터와 은은한 효모 에스테르의 바탕 위에 팔코너스 플라이트, 심코 홉을 사용하여 레몬, 자몽의 시트러스한 느낌과 꼬챻ㅇ을 가진 홉 캐릭터가 주를 이루는 맥주입니다.</h3>
                        <p><i>craft ale • 5.5% • IBU 44</i></p>
                        <Link href="/beers/Smimm"><Button color="primary" variant="outlined" fullWidth>더 알아보기</Button></Link>
                    </Card>
                </Grid>
            </Grid>

            {/* Seasonals */}
            <h1>Seasonals</h1>
            <Grid container spacing={5}>
                <Grid  item xs={12} sm={6} md={4} >
                <Card className={styles.card} elevation={4}>
                        <h2>새검정 IPA</h2>
                        <h3>'새검정'은 Black IPA / Cascadian Dark Ale 스타일로, IPA 스타일로 베이스로 검은 맥아의 조심스러운 사용을 통해 색과 캐릭터에 변화를 준 맥주입니다. 과실 향이 메인 캐릭터를 이루고, 코코아와 같은 힌트가 이를 받쳐주며 밸런스를 이룹니다.</h3>
                        <p><i>Black IPA • 7.0% • IBU 63</i></p>
                        <Link href="/beers/BlackIPA"><Button color="primary" variant="outlined" fullWidth>더 알아보기</Button></Link>
                    </Card>
                </Grid>
                <Grid  item xs={12} sm={6} md={4} >
                <Card className={styles.card} elevation={4}>
                        <p style={{color: 'red'}}><i><b>Out of season</b></i></p>
                        <h2>홒 IPA #3</h2>
                        <h3>'홒'은 West coast IPA 스타일의 맥주로, 맥주의 여러 스타일 중 '맥주 꽃'이라고 불리는 재료인 'hop'의 캐릭터가 인상적인 술입니다. </h3>
                        <p><i>west coast IPA • 6.3% • IBU 55</i></p>
                        <Link href="/beers/HopIPA_3"><Button color="primary" variant="outlined" fullWidth>더 알아보기</Button></Link>
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
}

export default Beer
