import { useContext, useEffect, useState } from "react";
import { GameboardContext } from "../../context/gameboardContext";
import { GameboardColorContext } from "../../context/gameboardColorContext";
import Card from "../card";
import selectSound from '../../public/sounds/sound-select.mp3';
import invalidSound from '../../public/sounds/sound-invalid.mp3';
import soundTurn from '../../public/sounds/sound-turn.mp3';
import { PlayerTurnContext } from "../../context/playerTurnContext";

export default function PlayingCard({cardID, color}) {
    const {gameboard, updateGameboard} = useContext(GameboardContext);
    const {gameboardColor, updateGameboardColor} = useContext(GameboardColorContext);
    const {playerTurn, updatePlayerTurn} = useContext(PlayerTurnContext);
    const [placed, setPlaced] = useState(false);
    const [cardColor, setCardColor] = useState(color);
    const [cardFlipped, setCardFlipped] = useState(false);

    function drag(event) {
        event.dataTransfer.setData("Card", event.target.id);
    }

    function playSelect() {
        new Audio(selectSound).play();
    }

    function playInvalid() {
        new Audio(invalidSound).play();
    }

    useEffect(() => {
        if (gameboard.includes(cardID + "|" + color)) {
            setPlaced(true);
        }
    }, [gameboard]);

    useEffect(() => {
        if (gameboard.includes(cardID + "|" + color)) {
            var cardPosition = gameboard.indexOf(cardID + "|" + color);
            if (gameboardColor[cardPosition] !== cardColor) {
                setCardColor(gameboardColor[cardPosition]);
            }
        }
    }, [gameboardColor]);

    // Spin the card after it's been flipped
    useEffect(() => {
        setCardFlipped(true);
        new Audio(soundTurn).play();
        setTimeout(() => {
            setCardFlipped(false);
        }, 1000);
    }, [cardColor])

    return (
        <div className="h-32 w-28 border rounded border-[#BD8E83]">
            {placed ? 
                <div id={cardID + "|" + color} className={cardFlipped ? 'transition ease-in-out duration-500 delay-50 rotate-[360deg]' : ''}>
                    <Card cardID = {cardID} color = {cardColor}/>
                </ div>
                :
                playerTurn === color ?
                    <div id={cardID + "|" + color} className="transition ease-in-out delay-50 hover:scale-125 hover:-translate-y-4" draggable="true" onDragStart={()=>drag(event)} onMouseEnter={playSelect}>
                        <Card cardID = {cardID} color = {cardColor}/>
                    </div>
                    :
                    <div id={cardID + "|" + color} draggable="false" onClick={playInvalid}>
                        <Card cardID = {cardID} color = {cardColor}/>
                    </div>
            }
        </div>
    );
}