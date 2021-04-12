import React, {useState, useEffect} from 'react'
import Grid from '@material-ui/core/Grid'
import Image from 'next/image'
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

const index = () => {

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
        <div className={styles.beer} >
        <Grid  container>
            {regular.map((item: Beer) =>
            <>
            <Grid xs={12} sm={6} item>
                <Image src={item.image} width={500} height={500}/>
            </Grid>
            <Grid className={styles.container} xs={12} sm={6} item>
                <h1>{item.name}</h1>
                <h4><i>{item.summary}</i></h4>
                <span><i>{item.ingredients}</i></span>
                <p>{item.descriptionLong}</p>
            </Grid>
            </>
            )}
        </Grid>
        </div>
    )
}

export default index