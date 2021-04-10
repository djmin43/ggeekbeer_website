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
                <h2>새검정 IPA</h2>
                <h4><i>Black IPA • 7.0% • IBU 63</i></h4>
                <p><i><b>형태:</b>Keg(발주가능) • Bottle(330ml)</i></p>
                <span><i><b>Malt:</b> Finest lager malt and dextrin malt</i></span>
                <span><i><b>Hops:</b> American cascade, centennial, columbus, and german noble variety</i></span>
                <span><i><b>Yeast:</b> W-34/70 Germal Lager</i></span>
                <p>'새검정'은 Black IPA / Cascadian Dark Ale 스타일로, IPA 스타일로 베이스로 검은 맥아의 조심스러운 사용을 통해 색과 캐릭터에 변화를 준 맥주입니다. 과실 향이 메인 캐릭터를 이루고, 코코아와 같은 힌트가 이를 받쳐주며 밸런스를 이룹니다.</p>
                <p>이 맥주는 'Bottle conditioning' 기법을 활용해 패키징 된 맥주로, 부드러운 탄산 질감을 가집니다. 케그와 병에서 2차 발효 및 숙성된 제품입니다. 냉장 보관 후 음용해 주세요.</p>
                </Grid>
        </Grid>
        </div>


    )
}

export default Ggulggeok
