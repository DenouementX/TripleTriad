import Image from "next/image";
import { getCard, getCardImageURL } from "../lib/cardHelper";

export default function Card({cardID, color, owner}) {

    var cardInfo = getCard(cardID);
    var cardURL = getCardImageURL(cardID, '/../public/cards/');

    return (
        <div className="relative">
            <Image
                className={`h-32 w-28 ${color === 'R' ? 'bg-red-300' : 'bg-blue-300'}`}
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
            {/* Hack to make entire card draggable, not just the image */}
            <div className="absolute top-0 left-0 h-32 w-28 opacity-0"></div>
        </div>
    );
}