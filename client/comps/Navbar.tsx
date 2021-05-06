import React from 'react'
import styles from '../styles/Navbar.module.css'
import Link from 'next/link'

const Navbar = () => {
    return (
        <>
        <nav className={styles.navbar} >
            <Link href="/"><a>Home</a></Link>
            <Link href="/aboutus"><a>About Us</a></Link>
            <Link href="/beers"><a>Our beer</a></Link>
            <Link href="/news"><a>News</a></Link>
            <Link href="/contact_us"><a>Contact Us</a></Link>
        </nav>
        </>
    )
}

export default Navbar
