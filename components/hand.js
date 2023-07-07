import Card from "./card";

export default function Hand({cardIDs, color}) {
    return (
        <div>
            This is a hand
            <Card cardID = {cardIDs[0]} color = {color}/>
            <Card cardID = {cardIDs[1]} color = {color}/>
            <Card cardID = {cardIDs[2]} color = {color}/>
            <Card cardID = {cardIDs[3]} color = {color}/>
            <Card cardID = {cardIDs[4]} color = {color}/>
        </div>
    );
}