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

const index = () => {

    const [regular, setRegular] = useState<Beer[]>([])
    const [seasonal, setSeasonal] = useState<Beer[]>([])


    const getBeersData = async () => {
        try {
            const res = await fetch('/beerdata.json');
            const data = await res.json();
            console.log(data)
            await setRegular(data.regular)
            await setSeasonal(data.seasonal)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getBeersData()
    }, [])

    return (
        <div className={styles.beer} >
        <Grid  container>
            {regular.map((item: Beer) =>
            <>
            <Grid key={item.id} xs={12} sm={6} item>
                    <img className={styles.images} src={item.image} />
            </Grid>
            <Grid  className={styles.container} xs={12} sm={6} item>
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
