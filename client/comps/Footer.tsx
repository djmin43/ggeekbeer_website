import React from 'react'
import classes from '../styles/Footer.module.css'
import styles from '../styles/Footer.module.css'
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';

const Footer = () => {
    return (
        <div className={classes.footer} id="#footer">
            <p>copyright &copy;2021</p>
            <InstagramIcon />
            <FacebookIcon />
        </div>
    )
}

export default Footer
