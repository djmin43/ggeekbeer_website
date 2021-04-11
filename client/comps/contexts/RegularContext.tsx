import React, { useState, createContext } from 'react'

export const RegularContext = createContext({});

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

export const RegularProvider = ({children}: any) => {

    const [regular, setRegular] = useState<Beer[]>([
        {   
            id: 1,
            name: "꿀꺽",
            summary:"german lager • 4.6% • IBU 18",
            ingredients:"Malt: Finest lager malt and dextrin malt \n Hops: American cascade, centennial, columbus, and german noble variety \n Yeast: W-34/70 Germal Lager",
            format:"",
            descriptionShort: "맥주만 드시기엔 조금 심심하셨죠? 끽 비어에서 간단하게 드실 수 있게 새로운 메뉴를 준비 했습니다. 2월 3일(수) 부터 을지로 PUB에서 판매 됩니다.",
            descriptionLong: "맥주만 드시기엔 조금 심심하셨죠? 끽 비어에서 간단하게 드실 수 있게 새로운 메뉴를 준비 했습니다. 2월 3일(수) 부터 을지로 PUB에서 판매 됩니다. \n 편안하게 다가가면서 메인 스트림과 다른 크래프트 맥주의 매력을 소개하고 싶었습니다. 크래프트 맥주를 좋아하는 사람들, 처음 접하게 될 사람들 간의 경계를 허물고 모두 즐길 수 있는 술이 되길 바랍니다.",
            image: "/ggeek_logo.jpg",
        },
        {   
            id: 2,
            name: "잉",
            summary:"new england IPA • 6.8% • IBU 40",
            ingredients:"Malt: Extra pale ale, oats, malted wheat \n Hops: El dorado, galaxy, citra \n Yeast: English ale strain",
            format:"",
            descriptionShort: "'잉'은 New England IPA 스타일의 맥주로, 뉴잉, 혹은 NEW IPA라고 부르는 이 스타일은 IPA가 가지는 홉의 과일, 꽃과 같은 긍정적인 향이 극대화되어 터져나오며 적절한 단 맛과 조화를 이루는 juice같은 맥주입니다. 사용된 홉의 양과 질감을 살리기 위해 들어간 귀리, 밀 등의 재료로 인하여 다소 혼탁한 외관을 가집니다.",
            descriptionLong: "'잉'은 New England IPA 스타일의 맥주로, 뉴잉, 혹은 NEW IPA라고 부르는 이 스타일은 IPA가 가지는 홉의 과일, 꽃과 같은 긍정적인 향이 극대화되어 터져나오며 적절한 단 맛과 조화를 이루는 juice같은 맥주입니다. 사용된 홉의 양과 질감을 살리기 위해 들어간 귀리, 밀 등의 재료로 인하여 다소 혼탁한 외관을 가집니다. \n '홉'IPA를 만들며 설명드린 바와 같이 홉 종들은 저마다 특유의 향을 가지고 있으며 우리는 재미잇는 콤보와 적절한 밸런스를 찾아 여러분과 공유하려고 합니다.",
            image: "/ggeek_logo.jpg",
        },
        {   
            id: 3,
            name: "스밈",
            summary:"Craft Ale • 5.5% • IBU 44",
            ingredients:"Malt: ? \n Hops: ? \n Yeast: ?",
            format:"형태:Keg(발주가능) • Bottle(준비중)",
            descriptionShort: "'스밈'은 크래프트 에일로 호밀과 카라멜 몰트를 절제하여 사용해 뽑아낸 몰트 캐릭터와 은은한 효모 에스테르의 바탕 위에 팔코너스 플라이트, 심코 홉을 사용하여 레몬, 자몽의 시트러스한 느낌과 꽃향을 가진 홉 캐릭터가 주를 이루는 맥주입니다.",
            descriptionLong: "'스밈'은 크래프트 에일로 호밀과 카라멜 몰트를 절제하여 사용해 뽑아낸 몰트 캐릭터와 은은한 효모 에스테르의 바탕 위에 팔코너스 플라이트, 심코 홉을 사용하여 레몬, 자몽의 시트러스한 느낌과 꽃향을 가진 홉 캐릭터가 주를 이루는 맥주입니다. \n 향에서 시작되는 달달한 뉘앙스에서 시작해 민트, 허브와 같은 상쾌한 피니시가 특징입니다.",
            image: "/ggeek_logo.jpg",
        },

    ])

    return (
        <RegularContext.Provider value={regular}>
            {children}
        </RegularContext.Provider>
    )
}

