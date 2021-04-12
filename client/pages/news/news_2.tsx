import React, { useContext } from 'react'
import { NewsContext } from '../../comps/contexts/NewsContext'


const news_2 = () => {

    
    const news: any = useContext(NewsContext);

    // console.log(news[0].name)

    return (
        <div className="news">
            <img style={{height:"30vh"}}src={news[1].image} />
            <h2>{news[1].name}</h2>
            
            <p>{news[1].description}</p>
        </div>
    )
}

export default news_2