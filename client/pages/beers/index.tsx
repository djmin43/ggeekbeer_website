import React, {useState, useEffect} from 'react'
import Grid from '@material-ui/core/Grid'
import styles from '../../styles/Beer.module.css'
import Ggulggeok from './ggulggeok'
import Smimm from './smimm'



const index = () => {


    return (
        <div id="beers" className={styles.beer} >
            <Ggulggeok />
            <Smimm />
        </div>
    )
}

export default index
