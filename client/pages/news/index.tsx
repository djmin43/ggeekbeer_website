import React from 'react'
import { NewsProvider } from '../../comps/contexts/NewsContext'
import News1 from './news_1'
import News2 from './news_2'
import News3 from './news_3'

const index = () => {
    return (
        <NewsProvider>
            <News1 />
            <News2 />
            <News3 />
        </NewsProvider>
    )
}

export default index
