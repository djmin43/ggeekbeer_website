import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import styles from '../styles/Beer.module.css'



const Beer = () => {
    return (
        <div className={styles.beer} id="beer">
        {/* Regular Line */}

        <div className={styles.box}>
        <Typography variant="h2" gutterBottom>Regulars</Typography>
            <Grid container spacing={5}>
                <Grid  item xs={12} sm={6} md={4} >
                    <Card elevation={3}>
                        <CardHeader
                        title="꿀꺽"
                        subheader="Pilsner ABV 5.0%"/>
                        <CardContent>
                            <Typography >
                                꿀꺽은 모두가 맛있게 먹을 수 있는 라거입니다.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid  item xs={12} sm={6} md={4} >
                    <Card elevation={3}>
                        <CardHeader
                        title="라거라거"
                        subheader="Unfiltered Lager ABV 5.0%"/>
                        <CardContent>
                            <Typography >
                                필터링되지 않은 라거라거입니다.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid  item xs={12} sm={6} md={4} >
                    <Card elevation={3}>
                        <CardHeader
                        title="새검정IPA"
                        subheader="IPA 5.0%"/>
                        <CardContent>
                            <Typography >
                                It's black IPA
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
   

            </Grid>
            </div>

            <div className={styles.box}>
            {/* Seasonals */}
            <Typography variant="h2" gutterBottom>Seasonals</Typography>
            <Grid container spacing={5}>
                <Grid  item xs={12} sm={6} md={4} >
                    <Card elevation={3}>
                        <CardHeader
                        title="홒IPA"
                        subheader="Pilsner ABV 5.0%"/>
                        <CardContent>
                            <Typography >
                                West Coast식의 IPA입니다.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid  item xs={12} sm={6} md={4} >
                    <Card elevation={3}>
                        <CardHeader
                        title="table beer"
                        subheader="Pilsner ABV 5.0%"/>
                        <CardContent>
                            <Typography >
                                저도수의 누구나 즐겁게 마실 수 있는 맥주입니다!
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
        </div>
    )
}

export default Beer
