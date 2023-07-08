import GameboardCell from "./gameboardCell";

export default function Gameboard() {
    return (
        <div className="grid grid-rows-3 grid-flow-col justify-center gap-2">
            <GameboardCell position={1}></GameboardCell>
            <GameboardCell position={4}></GameboardCell>
            <GameboardCell position={7}></GameboardCell>
            <GameboardCell position={2}></GameboardCell>
            <GameboardCell position={5}></GameboardCell>
            <GameboardCell position={8}></GameboardCell>
            <GameboardCell position={3}></GameboardCell>
            <GameboardCell position={6}></GameboardCell>
            <GameboardCell position={9}></GameboardCell>
        </div>
    );
}