import React from 'react'
import Typography from '@material-ui/core/Typography'
import styles from '../styles/Press.module.css'


const Press = () => {
    return (
        <div className={styles.press} id="press">
                <Typography variant="h2" gutterBottom>저희의 맥주는 KBA에서 금상을 수상하였습니다.</Typography>
                <Typography variant="body1" gutterBottom>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus cumque et velit impedit excepturi porro voluptatem. Perspiciatis unde quia possimus facere iusto, qui cupiditate, quos earum deleniti debitis dolores aspernatur?</Typography>
        </div>
    )
}

export default Press
