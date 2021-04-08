import React from 'react'
import styles from '../styles/AboutUs.module.css'
import Grid from '@material-ui/core/Grid'
import { GridListTile } from '@material-ui/core'
  
const About = () => {
    return (
        <div className={styles.about} id="about">
        <Grid  container>
                <Grid xs={12} sm={4} item>
                </Grid>        
                <Grid xs={12} sm={8} item>
                <h1>About Ggeek Beer</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex necessitatibus, praesentium illum accusantium inventore exercitationem aliquam repellendus molestias quis quaerat ullam reprehenderit iste quam odio. Eaque, maxime distinctio. Nobis, accusantium.</p>    
                </Grid>

        </Grid>
        </div>


    )
}

export default About
