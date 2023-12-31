import { useContext, useState } from "react";
import GameboardCell from "./gameboardCell";
import { GameboardContext } from "../../context/gameboardContext";
import { PlayerTurnContext } from "../../context/playerTurnContext";

export default function Gameboard() {
    const {gameboard, updateGameboard} = useContext(GameboardContext);
    const {playerTurn, updatePlayerTurn} = useContext(PlayerTurnContext);

    const onCardPlayed = (position, cardID) => {
        var newGameboard = gameboard.slice();
        newGameboard[position] = cardID;
        newGameboard[9] = position;
        updateGameboard(newGameboard);
        if (playerTurn === "B") {
            updatePlayerTurn("R");
        } else {
            updatePlayerTurn("B");
        }
    }

    return (
        <div>
            <div className="grid grid-rows-3 grid-flow-col gap-2">
                <GameboardCell position={0} onCardPlayed={onCardPlayed}></GameboardCell>
                <GameboardCell position={3} onCardPlayed={onCardPlayed}></GameboardCell>
                <GameboardCell position={6} onCardPlayed={onCardPlayed}></GameboardCell>
                <GameboardCell position={1} onCardPlayed={onCardPlayed}></GameboardCell>
                <GameboardCell position={4} onCardPlayed={onCardPlayed}></GameboardCell>
                <GameboardCell position={7} onCardPlayed={onCardPlayed}></GameboardCell>
                <GameboardCell position={2} onCardPlayed={onCardPlayed}></GameboardCell>
                <GameboardCell position={5} onCardPlayed={onCardPlayed}></GameboardCell>
                <GameboardCell position={8} onCardPlayed={onCardPlayed}></GameboardCell>
            </div>
        </div>
    );
}