import React, { useEffect, useState } from "react";
import Carousel from 'react-material-ui-carousel';
import Button from '@material-ui/core/Button';
import styles from '../styles/NewsList.module.css';
import CSS from 'csstype';
import Link from 'next/link';
import axios from 'axios'

interface News {
    id: number;
    name: string;
    date: string;
    description: string;
    image: string;
    link: string;
};

const newslist = () => {

    const [news, setNews] = useState<News[]>([]);

    const getNewsData = async () => {
        const res = await axios.get('http://localhost:3000/newsdata.json');
        setNews(res.data);
    };

    useEffect(() => {
        getNewsData();
    }, []);

    return (
        <div style={{backgroundColor: 'black'}}>

            <Carousel
            stopAutoPlayOnHover={true}
            interval={6000}
            animation="slide"
            indicatorContainerProps={{
                className: 'indicator',
                style: {
                    backgroundColor: '#000000',
                    paddingTop: '1vw',
                }}}
            >
                {
                    news.map( (item: News, i: number) => <Item key={i} item={item}  /> )
                }
            </Carousel>
        </div>
    );
        };


    const Item = ( {item}: any) =>{
        
    // Had to style background image separately to get image link prop
    const imageStyle: CSS.Properties = {
        background: `url(${item.image}) center center`,
        backgroundSize: 'contain',
        padding: '5vw 20vw'
    };

    return (
        <div >
        <div style={imageStyle} className={styles.slideshow}>
            {/* <img src={item.image} width="500" height="500"/>  */}
            <h1>{item.name}</h1>
            <p>{item.description}</p>
            <Link href={`/news`}><Button color="primary" variant="contained" fullWidth>더 알아보기</Button></Link>
        </div>
        </div>
    );
};

export default newslist
