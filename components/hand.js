import Card from "./card";

export default function Hand({cardIDs, color}) {
    return (
        <div className="flex justify-center items-center rounded-md xl:mx-44 lg:mx-24 md:mx-12 my-2 h-36">
            <div className="m-1">
                <Card cardID = {cardIDs[0]} color = {color}/>
            </div>
            <div className="m-1">
                <Card cardID = {cardIDs[1]} color = {color}/>
            </div>
            <div className="m-1">
                <Card cardID = {cardIDs[2]} color = {color}/>
            </div>
            <div className="m-1">
                <Card cardID = {cardIDs[3]} color = {color}/>
            </div>
            <div className="m-1">
                <Card cardID = {cardIDs[4]} color = {color}/>
            </div>
        </div>
    );
}