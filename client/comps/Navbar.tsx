import React from 'react'
import styles from '../styles/Navbar.module.css'
import Link from 'next/link'
import Grid from '@material-ui/core/Grid'

const Navbar = () => {
    return (
        
        <Grid className={styles.container} container>
            <Grid xs={12} md={6}  item>
                <nav className={styles.navbar} >
                <Link href="/"><a>HOME</a></Link>
                <Link href="/aboutus"><a>ABOUT</a></Link>
                <Link href="/beers"><a>BEERS</a></Link>
                <Link href="/"><a>LOCATION</a></Link>
                <Link href="/"><a>BLOG</a></Link>
                <Link href="/"><a>JOBS</a></Link>
                <Link href="/news"><a>NEWS</a></Link>
                <Link href="/contact_us"><a>CONTACT</a></Link>
                </nav>
            </Grid>
        </Grid>

        
    )
}

export default Navbar
