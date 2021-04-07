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
            
        </div>
    )
}

export default Footer
