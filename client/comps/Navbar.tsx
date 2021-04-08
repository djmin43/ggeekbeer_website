import React from 'react'
import styles from '../styles/Navbar.module.css'
import Link from 'next/link'

const Navbar = () => {
    return (
        <>
        <nav className={styles.navbar} >
            <Link href="/"><a>Home</a></Link>
            <Link href="#about"><a>About Us</a></Link>
            <Link href="#beer"><a>Our beer</a></Link>
            <Link href="#press"><a>Press</a></Link>
            <Link href="#contactus"><a>Contact Us</a></Link>
        </nav>
        </>
    )
}

export default Navbar
