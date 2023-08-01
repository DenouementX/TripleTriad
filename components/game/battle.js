import { useEffect, useState } from "react";
import Gameboard from "./gameboard";
import GameHand from "./gameHand";
import { generateRandomHand } from "../../lib/cardHelper";
import { GameboardContext } from "../../context/gameboardContext";
import { GameboardColorContext } from "../../context/gameboardColorContext";
import { getUpdatedGameboardColor } from "../../lib/gameHelper";
import MusicToggler from "../musicToggler";
import normal from '../../public/sounds/bgm.mp3';
import { PlayerTurnContext } from "../../context/playerTurnContext";
import EndScreen from "./endScreen";
import $ from 'jquery';
import cardDroppedSound from '../../public/sounds/sound-card.mp3';
import { playStupid } from "../../lib/gameAI";

export default function Battle() {
    const [hand1, setHand1] = useState([0,0,0,0,0]); // Red
    const [hand2, setHand2] = useState([0,0,0,0,0]); // Blue
    const [redScore, setRedScore] = useState(0);
    const [blueScore, setBlueScore] = useState(0);
    const [gameboard, setGameboard] = useState(Array(10).fill(-1)); // Manage state for gameboard cards
    const [gameboardColor, setGameboardColor] = useState(Array(9).fill(-1)); // Manage state for gameboard colors
    const [playerTurn, setPlayerTurn] = useState("B"); // Manage state for game turn
    const [winner, setWinner] = useState("G");

    function updateGameboard (newGameboard) {
        setGameboard(newGameboard);
    }
    function updateGameboardColor(newGameboardColor) {
        setGameboardColor(newGameboardColor);
    }
    function updatePlayerTurn(newPlayerTurn) {
        setPlayerTurn(newPlayerTurn);
    }

    function countColor (color) {
        var count = 0;
        for (const c of gameboardColor) {
            if (c === color) {
                count++;
            }
        }
        return count;
    }

    useEffect(()=>{
        if (playerTurn === "R" && winner === "G") {
            setTimeout(() => {
                var play = playStupid(hand1, hand2, gameboard, gameboardColor);
                var cardID = play[0];
                var position = parseInt(play[1]);
                $('#' + cardID).detach().appendTo('#' + position);
                var newGameboard = gameboard.slice();
                newGameboard[position] = cardID;
                newGameboard[9] = position;
                setGameboard(newGameboard);
                if (playerTurn === "B") {
                    setPlayerTurn("R");
                } else {
                    setPlayerTurn("B");
                }
                new Audio(cardDroppedSound).play();
            }, 1000);
        }
    },[playerTurn])

    useEffect(()=>{
        setHand1([1, 2, 3, 4, 5]);
        setHand2([1, 2, 3, 4, 5]);
    },[])

    useEffect(()=>{
        var lastCardPlayed = gameboard[9];
        var newGameboardColor = getUpdatedGameboardColor(lastCardPlayed, gameboard, gameboardColor.slice());
        setGameboardColor(newGameboardColor)
    },[gameboard])

    useEffect(()=>{
        // console.log(gameboardColor);
        var redCount = countColor("R");
        var blueCount = countColor("B");
        setRedScore(redCount);
        setBlueScore(blueCount);
        if (redCount + blueCount === 9) {
            if (redCount > blueCount) {
                console.log("Red Player Wins!");
                setWinner("R");
            } else {
                console.log("Blue Player Wins!");
                setWinner("B");
            }
        }
    },[gameboardColor])
    
    return (
        <PlayerTurnContext.Provider value={{playerTurn, updatePlayerTurn}}>
            <GameboardColorContext.Provider value={{gameboardColor, updateGameboardColor}}>
                <GameboardContext.Provider value={{gameboard, updateGameboard}}>
                    <EndScreen winner = {winner}></EndScreen>
                    <div className="bg-[#E9DAC4] xl:mx-40 lg:mx-24 md:mx-8 border bg-no-repeat bg-center bg-[url('../public/TripleTriadLogo.png')]">
                        <div className="relative">
                            <div className="absolute right-4">
                                <MusicToggler soundLocation={normal}></MusicToggler>
                            </div>
                            <GameHand cardIDs = {hand1} color = "R"/>
                        </div>
                        <div className="flex justify-center">
                            <div className="grid grid-rows-3 grid-flow-col justify-center w-24">
                                <p className="text-9xl text-red-500 items-start">{redScore}</p>
                            </div>
                            <Gameboard />
                            <div className="grid grid-rows-3 grid-flow-col justify-center w-24">
                                <p className="row-start-3 text-9xl text-blue-500 items-end">{blueScore}</p>
                            </div>
                        </div>
                        <GameHand cardIDs = {hand2} color = "B"/>
                    </div>
                </GameboardContext.Provider>
            </GameboardColorContext.Provider>
        </PlayerTurnContext.Provider>
    );
}