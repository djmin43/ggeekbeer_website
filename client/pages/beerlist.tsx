import React, { useState, useContext, useEffect } from 'react';
import Card from '@material-ui/core/Card';
import Link from 'next/link'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import styles from '../styles/BeerList.module.css';



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

const beerlist = () => {

    const [regular, setRegular] = useState<Beer[]>([])
    const [seasonal, setSeasonal] = useState<Beer[]>([])

    useState(async () =>{
        const res = await fetch('/beerdata.json');
        const data = await res.json();
        setRegular(data.regular);
        setSeasonal(data.seasonal);
    }
    ), [];


    return (
        <div className={styles.beer} id="beer">
        <h1 >Year-round</h1>
        <Grid container spacing={5}>
        {regular.map((item: Beer) => <Grid  item xs={12} sm={6} md={4} key={item.id}>
                    <Card className={styles.card} elevation={4}>
                    <h2>{item.name}</h2>
                    <h4>{item.descriptionShort}</h4>
                    <p><i>{item.summary}</i></p>
                        <Link href="/beers"><Button color="primary" variant="outlined" fullWidth>더 알아보기</Button></Link>
                    </Card>
                </Grid>)}
        </Grid>

        <h1>Seasonals</h1>
            <Grid container spacing={5}>
            {seasonal.map((item: Beer) => <Grid  item xs={12} sm={6} md={4} key={item.id}>
                    <Card className={styles.card} elevation={4}>
                    <h2>{item.name}</h2>
                    <h4>{item.descriptionShort}</h4>
                    <p><i>{item.summary}</i></p>
                        <Link href="/beers"><Button color="primary" variant="outlined" fullWidth>더 알아보기</Button></Link>
                    </Card>
                </Grid>)}
            </Grid>
        </div>
    )
}


export default beerlist
