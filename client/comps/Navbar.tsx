import React from 'react'
import styles from '../styles/Navbar.module.css'
import Grid from '@material-ui/core/Grid'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const Navbar = () => {
    return (
        <Router>
            <Grid className={styles.container} container>
            <Grid xs={12} md={6}  item>
                <nav className={styles.navbar} >
                <Link to="/"><a>HOME</a></Link>
                <Link to="/about"><a>ABOUT</a></Link>
                <Link to="/beers"><a>BEERS</a></Link>
                <Link to="/location"><a>LOCATION</a></Link>
                <Link to="/"><a>BLOG</a></Link>
                <Link to="/"><a>JOBS</a></Link>
                <Link to="/"><a>NEWS</a></Link>
                <Link to="/contact"><a>CONTACT</a></Link>
                </nav>
            </Grid>
        </Grid>
        </Router>


        
    )
}

export default Navbar
