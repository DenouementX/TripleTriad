import Image from "next/image";
import card from "../public/cards/001.png";
import { getCard, getCardImageURL } from "../lib/cardHelper";
import { useEffect, useState } from "react";
export default function Card({cardID, color}) {
    // const [cardInfo, setCardInfo] = useState(getCard(cardID));
    // const [cardURL, setCardURL] = useState(getCardImageURL(cardID));
    var cardInfo = getCard(cardID);
    const RELATIVEPATH = '/../public/cards/';
    var cardURL = getCardImageURL(cardID, RELATIVEPATH);
        
    useEffect(() => {
        cardInfo = getCard(cardID);
        console.log(cardInfo);
        console.log(cardURL);
    }, [])

    return (
        <div className="relative">
            <Image
                className={`w-32 h-40 ${color === 'R' ? 'bg-red-200' : 'bg-blue-200'}`}
                src={cardURL}
                width={150}
                height={150}
                alt={cardInfo.name}
                title={cardInfo.name}
            />
            <div className="text-white text-xl text-center">
                <p className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)] absolute top-2 left-6">{cardInfo.ranks[0]}</p>
                <p className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)] absolute top-5 left-3">{cardInfo.ranks[1]}</p>
                <p className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)] absolute top-8 left-6">{cardInfo.ranks[3]}</p>
                <p className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)] absolute top-5 left-9">{cardInfo.ranks[2]}</p>
            </div>
        </div>
      
    );
}