import { useContext, useEffect, useState } from "react";
import { GameboardContext } from "../context/gameboardContext";
import { GameboardColorContext } from "../context/gameboardColorContext";
import Card from "./card";

export default function PlayingCard({cardID, color, owner}) {
    const {gameboard, updateGameboard} = useContext(GameboardContext);
    const {gameboardColor, updateGameboardColor} = useContext(GameboardColorContext);
    const [placed, setPlaced] = useState(false);
    const [cardColor, setCardColor] = useState(color);
    
    function drag(event) {
        event.dataTransfer.setData("Card", event.target.id);
    }

    useEffect(() => {
        if (gameboard.includes(cardID + "|" + cardColor)) {
            setPlaced(true);
        }
    }, [gameboard]);

    useEffect(() => {
        if (gameboard.includes(cardID + "|" + cardColor)) {
            var cardPosition = gameboard.indexOf(cardID + "|" + cardColor);
            setCardColor(gameboardColor[cardPosition]);
        }
    }, [gameboardColor]);

    return (
        <div>
            {placed ? 
                <div id={cardID + "|" + cardColor}>
                    <Card cardID = {cardID} color = {cardColor} owner = {owner}/>
                </ div>
                :
                <div id={cardID + "|" + cardColor} className="relative transition ease-in-out delay-50 hover:scale-125" draggable="true" onDragStart={()=>drag(event)}>
                    <Card cardID = {cardID} color = {cardColor} owner = {owner}/>
                </div>
            }
        </div>
    );
}