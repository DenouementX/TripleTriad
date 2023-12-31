import { useState } from "react";
import cardDroppedSound from '../../public/sounds/sound-card.mp3';

export default function GameboardCell({position, onCardPlayed}) {
    const [isHover, setIsHover] = useState(false);
    function dragEnter() {
        setIsHover(true);
    }
    function dragLeave() {
        setIsHover(false);
    }
    function drop(event) {
        setIsHover(false);
        event.preventDefault();
        const data = event.dataTransfer.getData("Card");
        onCardPlayed(position, data);
        event.target.appendChild(document.getElementById(data));
        new Audio(cardDroppedSound).play();
    }
    function allowDrag(event) {
        event.preventDefault();
    }
    
    return (
        <div id={position} className={`h-32 w-28 border border-1 rounded border-dashed border-[#BD8E83] ${isHover ? 'bg-[#c8edc7]' : ''}`}  onDragEnter={dragEnter} onDragLeave={dragLeave} onDrop={()=>drop(event)} onDragOver={()=>allowDrag(event)} />
    );
}