import React, { useContext } from 'react'
import { NewsContext } from '../../comps/contexts/NewsContext'


const news_1 = () => {

    
    const news: any = useContext(NewsContext);

    // console.log(news[0].name)

    return (
        <div className="news">
            <img src={news[2].image} />
            <h2>{news[2].name}</h2>
            <p>{news[2].description}</p>
        </div>
    )
}

export default news_1