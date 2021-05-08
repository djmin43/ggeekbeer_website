import React, {useState, useEffect} from 'react'
import Grid from '@material-ui/core/Grid'
import styles from '../../styles/Beer.module.css'

interface Beer {
    id: number;
    name: string;
    summary: string;
    ingredients: string;
    format: string;
    descriptionShort: string;
    descriptionLong: string;
    image: string;
}


const index = ({regularBeers, seasonalBeers}: any) => {

    return (
        <div id="beers" className={styles.beer} >
        <Grid  container>
            {regularBeers.map((item: Beer) =>
            <div key={item.id} >
            <Grid  xs={12} sm={6} item>
                    <img className={styles.images} src={item.image} />
            </Grid>
            <Grid  className={styles.container} xs={12} sm={6} item>
                <h2>{item.name}</h2>
                <h4><i>{item.summary}</i></h4>
                <span><i>{item.ingredients}</i></span>
                <p>{item.descriptionLong}</p>
            </Grid>
            </div>
            )}
        </Grid>
        </div>
    )
}

export default index
