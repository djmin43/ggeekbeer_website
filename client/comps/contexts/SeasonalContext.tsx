import React, { useState, createContext } from 'react'

export const SeasonalContext = createContext({});

interface Beer {
    id: number;
    name: string;
    summary: string;
    descriptionShort: string;
    descriptionLong: string;
    ingredients: string;
    format: string;
    image: string;

    
}

export const SeasonalProvider = ({children}: any) => {

    const [seasonal, setSeasonal] = useState<Beer[]>([
        
        {   
            id: 1,
            name: "새검정 IPA",
            summary:"Black IPA • 7.0% • IBU 63",
            ingredients:"Malt: Finest lager malt and dextrin malt \n Hops: American cascade, centennial, columbus, and german noble variety \n Yeast: W-34/70 Germal Lager",
            format:"형태:Keg(발주가능) • Bottle(330ml)",
            descriptionShort: "'새검정'은 Black IPA / Cascadian Dark Ale 스타일로, IPA 스타일로 베이스로 검은 맥아의 조심스러운 사용을 통해 색과 캐릭터에 변화를 준 맥주입니다. 과실 향이 메인 캐릭터를 이루고, 코코아와 같은 힌트가 이를 받쳐주며 밸런스를 이룹니다.",
            descriptionLong: "'새검정'은 Black IPA / Cascadian Dark Ale 스타일로, IPA 스타일로 베이스로 검은 맥아의 조심스러운 사용을 통해 색과 캐릭터에 변화를 준 맥주입니다. 과실 향이 메인 캐릭터를 이루고, 코코아와 같은 힌트가 이를 받쳐주며 밸런스를 이룹니다. \n 이 맥주는 'Bottle conditioning' 기법을 활용해 패키징 된 맥주로, 부드러운 탄산 질감을 가집니다. 케그와 병에서 2차 발효 및 숙성된 제품입니다. 냉장 보관 후 음용해 주세요.",
            image: "/ggeek_logo.jpg",
        },
        {   
            id: 2,
            name: "홒 IPA",
            summary:"west coast IPA • 6.3% • IBU 55",
            ingredients:"Malt: Finest pale ale golden promise, oats, mlated rye, light crystal \n Hops: Falconers flight, galaxy \n Yeast: US-05",
            format:"",
            descriptionShort: "'홒'은 West coast IPA 스타일의 맥주로, 맥주의 여러 스타일 중 '맥주 꽃'이라고 불리는 재료인 'hop'의 캐릭터가 인상적인 술입니다.",
            descriptionLong: "'홒'은 West coast IPA 스타일의 맥주로, 맥주의 여러 스타일 중 '맥주 꽃'이라고 불리는 재료인 'hop'의 캐릭터가 인상적인 술입니다. \n 각 종은 저마다 특유의 향을 가지고 있으며 우리는 재미있는 콤보와 적절한 밸런스를 찾아 여러분과 공유하려고 합니다",
            image: "/ggeek_logo.jpg",
        },
    ])

    return (
        <SeasonalContext.Provider value={seasonal}>
            {children}
        </SeasonalContext.Provider>
    )
}

