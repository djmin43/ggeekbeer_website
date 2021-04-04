import React from 'react'
import Typography from '@material-ui/core/Typography'
import styles from '../styles/AboutUs.module.css'
import Box from '@material-ui/core/Box';

const theme = {
    spacing: 8,
  }
  
const About = () => {
    return (
            <div className={styles.background} id="about">
            <Box m={10}>            
                <Typography variant="h1" gutterBottom>About Ggeek Beer</Typography>
                <Typography variant="body1">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem repellat debitis sapiente eius tempore, esse nec</Typography>
            </Box>
            </div>


    )
}

export default About
