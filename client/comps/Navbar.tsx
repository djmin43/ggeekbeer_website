import React from 'react'
import styles from '../styles/Navbar.module.css'
import Link from 'next/link'
import Grid from '@material-ui/core/Grid'
import Image from 'next/image'


const Navbar = () => {
    return (
        <Grid className={styles.container} container>
            <Grid xs={12} sm={6} lg={6} item>
                {/* <Image src='/ggeek_logo_long.jpg' height="30%" width="100%" /> */}
            </Grid>
            <Grid xs={12} sm={6} lg={6} item>
                <nav className={styles.navbar} >
                <Link href="/"><a>Home</a></Link>
                <Link href="/about"><a>ABOUT</a></Link>
                <Link href="/beers"><a>BEERS</a></Link>
                <Link href="/"><a>VISIT US</a></Link>
                <Link href="/"><a>BLOG</a></Link>
                <Link href="/"><a>JOBS</a></Link>
                <Link href="/news"><a>News</a></Link>
                <Link href="/contact_us"><a>CONTACT</a></Link>
                </nav>
            </Grid>
        </Grid>

    )
};

export default Navbar
