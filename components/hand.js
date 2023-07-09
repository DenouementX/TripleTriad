import PlayingCard from "./playingCard";

export default function Hand({cardIDs, color}) {
    return (
        <div className="flex justify-center items-center border border-[#BD8E83] rounded-md xl:mx-44 lg:mx-24 md:mx-12 my-2 h-36 gap-x-2">
            <PlayingCard cardID = {cardIDs[0]} color = {color}/>
            <PlayingCard cardID = {cardIDs[1]} color = {color}/>
            <PlayingCard cardID = {cardIDs[2]} color = {color}/>
            <PlayingCard cardID = {cardIDs[3]} color = {color}/>
            <PlayingCard cardID = {cardIDs[4]} color = {color}/>
        </div>
    );
}