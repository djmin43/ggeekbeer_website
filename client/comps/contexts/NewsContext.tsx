import React, { useState, createContext } from 'react'

export const NewsContext = createContext({});

interface News {
    id: number;
    name: string;
    description: string;
    image: string;
    link: string;
    
}

export const NewsProvider = ({children}: any) => {

    const [news, setNews] = useState<News[]>([
        {   
            id: 1,
            name: "체리페퍼와 크림치즈",
            description: "맥주만 드시기엔 조금 심심하셨죠? 끽 비어에서 간단하게 드실 수 있게 새로운 메뉴를 준비 했습니다. 2월 3일(수) 부터 을지로 PUB에서 판매 됩니다.",
            image: "/press/press1.jpg",
            link: "/press/news_1"

        },
        {
            id: 2,
            name: "거리두기 완화",
            description: "안녕하세요.끽 비어 컴퍼니입니다. 15일(월) 사회적 거리두기2 단계 시행으로 PUB 영업시간 변경 안내 드립니다. 🚫 5인 이상 사적 모임 금지는 유지됩니다.",
            image: "/press/press2.jpg",
            link: "/press/news_2"
        },
        {
            id: 3,
            name:"잉",
            description: "잉 새로운 배치가 온탭되었습니다. 😎-✔️NEIPA✔️ABV : 6.8✔️BU : 40✔️Hop combo : El dorado, Simcoe, Mosaic, Citra",
            image: "/press/press3.jpg",
            link: "/press/news_3"
        }
    ])

    return (
        <NewsContext.Provider value={news}>
            {children}
        </NewsContext.Provider>
    )
}

