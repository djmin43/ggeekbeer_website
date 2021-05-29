import React from 'react'
import styles from '../../styles/Carousel.module.css'

const manchoon = () => {
    return (
        <div className={styles.page}>
            <h3>만춘 Late Spring - Maibock</h3>
            <img className={styles.image} src="/carousel/manchoon.jpg" />            
            <p>독일의 스트롱 비어인 Bock bier 스타일 중에 Maibock 이란 스타일이 있는데요, 5월의 맥주란 뜻을 가집니다. 다른 말로 Frühlingsbier라고도 부르고, 봄의 맥주라 하지요. 이 봄의 술에 야생꽃꿀과 흰 재스민을 넣어 양조했습니다.(노란 재스민은 영춘화라 하여 봄맞이꽃이라 불립니다.)</p>
            <p>완연한 봄날, 가장 봄다운 술로 희망의 인사를 건네려 했는데, 늦은 봄에야 내어놓게 됐습니다. 밖은 봄이 지나가고 있고 마음엔 겨울 같은 때가 계속되고 있습니다. 그리운 이들도 늘어가고 지치게 만드는 시간들이네요. 하지만 마음속에도 봄다운 날들이 반드시 찾아올 거라고 생각합니다. 모두 희망을 잃지 않으시길 기도합니다.</p>
        </div>
    )
}

export default manchoon
