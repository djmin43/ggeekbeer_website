import React from 'react'
import Cookies from 'js-cookie'
import styles from '../styles/Front.module.css'


const Front = () => {

    const setCookie = () => {
        Cookies.set('age', 'yes', {expires: 7, path:'/'})
        location.reload();
    }

    return (
        <>
        <div className={styles.front}>
            <h1>Ggeek Beer Company</h1>
            <h2>만 19세 이상 음주 가능한 연령입니까?</h2>
            <div>
            <button className={styles.yes} onClick={() => setCookie()} >예</button>
            <button className={styles.no} >아니오</button>
            </div>
        </div>
        </>
    )
}

export default Front
