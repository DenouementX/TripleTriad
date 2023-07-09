import { useEffect, useState } from "react";
import Gameboard from "./gameboard";
import Hand from "./hand";
import { generateRandomHand } from "../lib/cardHelper";
import { GameboardContext } from "../context/gameboardContext";
import { GameboardColorContext } from "../context/gameboardColorContext";
import { getUpdatedGameboardColor } from "../lib/gameHelper";


export default function Game() {
    const [hand1, setHand1] = useState([0,0,0,0,0]);
    const [hand2, setHand2] = useState([0,0,0,0,0]);
    const [redScore, setRedScore] = useState(0);
    const [blueScore, setBlueScore] = useState(0);
    const [gameboard, setGameboard] = useState(Array(10).fill(-1)); // Manage state for gameboard cards
    const [gameboardColor, setGameboardColor] = useState(Array(9).fill(-1)); // Manage state for gameboard colors

    function updateGameboard (newGameboard) {
        setGameboard(newGameboard);
    }
    function updateGameboardColor(newGameboardColor) {
        setGameboardColor(newGameboardColor);
    }

    useEffect(()=>{
        setHand1(generateRandomHand);
        setHand2(generateRandomHand);
    },[])

    useEffect(()=>{
        var lastCardPlayed = gameboard[9];
        var newGameboardColor = getUpdatedGameboardColor(lastCardPlayed, gameboard, gameboardColor.slice());
        setGameboardColor(newGameboardColor)
    },[gameboard])

    useEffect(()=>{
        console.log(gameboardColor);
    },[gameboardColor])
    
    return (
        <GameboardColorContext.Provider value={{gameboardColor, updateGameboardColor}}>
            <GameboardContext.Provider value={{gameboard, updateGameboard}}>
                <div className="bg-[#E9DAC4] mx-40 border bg-no-repeat bg-center bg-[url('../public/TripleTriadLogo.png')]">
                    <Hand cardIDs = {hand1} color = "R" owner = {1}/>
                    <div className="flex justify-center items-end">
                        {/* <p className="text-9xl text-red-400 items-start">{blueScore}</p> */}
                        <Gameboard />
                        {/* <p className="text-9xl text-blue-400 items-end">{redScore}</p> */}
                    </div>
                    <Hand cardIDs = {hand2} color = "B" owner = {2} />
                </div>
            </GameboardContext.Provider>
        </GameboardColorContext.Provider>
    );
}