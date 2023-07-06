import Gameboard from "./gameboard";
import Hand from "./hand";

export default function Game() {
    return (
        <div>
            This is a game
            <hr />
            <Hand />
            <hr />
            <Gameboard />
            <hr />
            <Hand />
            <hr />
        </div>
    );
}