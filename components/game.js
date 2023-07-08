import Gameboard from "./gameboard";
import Hand from "./hand";

export default function Game() {
    return (
        <div className="bg-[#E9DAC4] mx-40 border bg-no-repeat bg-center bg-[url('../public/TripleTriadLogo.png')]">
            <Hand cardIDs = {[1,2,3,4,5]} color = "R"/>
            <Gameboard />
            <Hand cardIDs = {[6,7,8,9,10]} color = "B"/>
        </div>
    );
}