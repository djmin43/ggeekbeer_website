import React, { useContext } from 'react';
import Card from '@material-ui/core/Card';
import Link from 'next/link'
import Grid from '@material-ui/core/Grid';
import styles from '../styles/BeerList.module.css';
import Button from '@material-ui/core/Button';
import { SeasonalContext } from '../comps/contexts/SeasonalContext';
import { RegularContext } from '../comps/contexts/RegularContext';



const Beer = () => {

    const regular = useContext(RegularContext);
    const seasonal = useContext(SeasonalContext);

    return (
        <div className={styles.beer} id="beer">
        {/* Regular Line */}
        <h1 >Year-round</h1>
        <Grid container spacing={5}>
        {regular.map(item => <Grid  item xs={12} sm={6} md={4} key={item.id}>
                    <Card className={styles.card} elevation={4}>
                    <h2>{item.name}</h2>
                    <h4>{item.descriptionShort}</h4>
                    <p><i>{item.summary}</i></p>
                        <Link href="/beers"><Button color="primary" variant="outlined" fullWidth>더 알아보기</Button></Link>
                    </Card>
                </Grid>)}
        </Grid>

        {/* Seasonals */}
        <h1>Seasonals</h1>
            <Grid container spacing={5}>
            {seasonal.map(item => <Grid  item xs={12} sm={6} md={4} key={item.id}>
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

export default Beer
