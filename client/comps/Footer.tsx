import React from 'react'
import classes from '../styles/Footer.module.css'
import styles from '../styles/Footer.module.css'
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';

const Footer = () => {
    return (
        <div className={classes.footer} id="#footer">
            <h2>copyright &copy;2021 Ggeek Beer Company</h2>
            <div>
            <InstagramIcon onClick={() => window.open('https://www.instagram.com/ggeek_beer/')}
            fontSize="large" />
            <FacebookIcon onClick={() => window.open('https://www.facebook.com/ggekbeer/')}
            fontSize="large"/>
            </div>
            <p>탭하우스: 서울특별시 중구 을지로 157 3층 외부 다열 376호 산림동 (전화번호: 0507-1308-6864)</p>
            <p>양조장: 경기도 고양시 덕양구 고골길 128-10 가동 (전화번호: 0507-1392-5225)</p>
            
        </div>
    )
}

export default Footer
