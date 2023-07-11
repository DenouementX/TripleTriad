import { useContext } from "react";
import Image from "next/image";
import PlayingCard from "./playingCard";
import { PlayerTurnContext } from "../context/playerTurnContext";

export default function Hand({cardIDs, color}) {
    const {playerTurn, updatePlayerTurn} = useContext(PlayerTurnContext);
    return (
        <div className="flex justify-center items-center rounded-md xl:mx-44 lg:mx-24 md:mx-12 my-2 h-36">
            <div className="relative -gap-x-2">
                {playerTurn === color ?
                    <div className="absolute -left-16 -top-2">
                        <Image
                            className="h-8 w-12"
                            src={"/hand.png"}
                            width={50}
                            height={50}
                            alt="pointer hand"
                            title="pointer hand"
                        />
                    </div>
                    :
                    "" 
                }
            </div>
            <div className="m-1">
                <PlayingCard cardID = {cardIDs[0]} color = {color}/>
            </div>
            <div className="m-1">
                <PlayingCard cardID = {cardIDs[1]} color = {color}/>
            </div>
            <div className="m-1">
                <PlayingCard cardID = {cardIDs[2]} color = {color}/>
            </div>
            <div className="m-1">
                <PlayingCard cardID = {cardIDs[3]} color = {color}/>
            </div>
            <div className="m-1">
                <PlayingCard cardID = {cardIDs[4]} color = {color}/>
            </div>
        </div>
    );
}