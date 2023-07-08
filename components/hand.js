import Card from "./card";

export default function Hand({cardIDs, color}) {
    return (
        <div className="flex justify-center items-center space-x-2 py-1 border border-[#BD8E83] rounded-md mx-60 my-2 h-36">
            <Card cardID = {cardIDs[0]} color = {color}/>
            <Card cardID = {cardIDs[1]} color = {color}/>
            <Card cardID = {cardIDs[2]} color = {color}/>
            <Card cardID = {cardIDs[3]} color = {color}/>
            <Card cardID = {cardIDs[4]} color = {color}/>
        </div>
    );
}