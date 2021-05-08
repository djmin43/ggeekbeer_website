import React from 'react'
import styles from '../styles/Navbar.module.css'
import Grid from '@material-ui/core/Grid'
import Link from 'next/link'

const Navbar = () => {
 
    return (
        <>

            <Grid className={styles.container} container>
            <Grid xs={12} md={6}  item>
                <nav className={styles.navbar} >
                <Link href="/"><a>HOME</a></Link>
                <Link href="/#about"><a>ABOUT</a></Link>
                <Link href="/#beers"><a>BEERS</a></Link>
                <Link href="/#location"><a>LOCATION</a></Link>
                <Link href="/"><a>BLOG</a></Link>
                <Link href="/"><a>JOBS</a></Link>
                <Link href="/"><a>NEWS</a></Link>
                <Link href="/#contact"><a>CONTACT</a></Link>
                </nav>
            </Grid>
        </Grid>
        </>


        
    )
}

export default Navbar
