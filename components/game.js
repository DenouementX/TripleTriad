import Gameboard from "./gameboard";
import Hand from "./hand";

export default function Game() {
    return (
        <div>
            This is a game
            <hr />
            <Hand cardIDs = {[1,2,3,4,5]} color = "R"/>
            <hr />
            <Gameboard />
            <hr />
            <Hand cardIDs = {[6,7,8,9,10]} color = "B"/>
            <hr />
        </div>
    );
}