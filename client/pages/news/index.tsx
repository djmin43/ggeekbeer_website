import React, { useEffect, useState } from 'react';
import styles from '../../styles/News.module.css'
import Button from '@material-ui/core/Button'
import Link from 'next/link'
import Image from 'next/image'
import axios from 'axios'

interface News {
    id: number;
    name: string;
    date: string;
    description: string;
    image: string;
    link: string;
};

const index = () => {

    const [news, setNews] = useState<News[]>([]);

    const getNewsData = async () => {
        const res = await axios.get('http://localhost:3000/newsdata.json');
        setNews(res.data);
    };

    useEffect(() => {
        getNewsData();
    }, []);

    return (
        <div>
            {news.map((item: News) => <div className={styles.news} key={item.id}>
                <Image src={item.image} width={300} height={300} className={styles.image}/>
                <span><i>{item.date}</i></span>
                <h2>{item.name}</h2>
                <p>{item.description}</p>
                <Link href={item.link}><Button color="primary" variant="outlined" component="button" fullWidth>더 알아보기</Button></Link>
            </div>)}
        </div>
    )
}

export default index
