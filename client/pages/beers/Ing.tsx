import React from 'react'
import Grid from '@material-ui/core/Grid'
import Image from 'next/image'
import styles from '../../styles/Beer.module.css'

const Ing = () => {
    return (
        <div className={styles.beer} >
        <Grid  container>
                <Grid xs={12} sm={6} item>
                    <Image src="/ggeek_logo.jpeg" alt="끽비어 로고" 
                    width={500}
                    height={500}/>
                </Grid>        
                <Grid className={styles.container} xs={12} sm={6} item>
                <h2>잉</h2>
                <h4><i>new england IPA• 6.8% • IBU 40</i></h4>
                <span><i><b>Malt:</b> Extra pale ale, oats, malted wheat</i></span>
                <span><i><b>Hops:</b> El dorado, galaxy, citra</i></span>
                <span><i><b>Yeast:</b> English ale strain</i></span>
                <p>'잉'은 New England IPA 스타일의 맥주로, 뉴잉, 혹은 NEW IPA라고 부르는 이 스타일은 IPA가 가지는 홉의 과일, 꽃과 같은 긍정적인 향이 극대화되어 터져나오며 적절한 단 맛과 조화를 이루는 juice같은 맥주입니다. 사용된 홉의 양과 질감을 살리기 위해 들어간 귀리, 밀 등의 재료로 인하여 다소 혼탁한 외관을 가집니다.</p>
                <p>'홉'IPA를 만들며 설명드린 바와 같이 홉 종들은 저마다 특유의 향을 가지고 있으며 우리는 재미잇는 콤보와 적절한 밸런스를 찾아 여러분과 공유하려고 합니다.</p>
                </Grid>
        </Grid>
        </div>


    )
}

export default Ing;
