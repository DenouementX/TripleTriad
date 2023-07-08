import { useState } from "react";

export default function GameboardCell({position}) {
    const [isHover, setIsHover] = useState(false);
    function dragEnter() {
        console.log("drag enter");
    }
    function dragLeave() {
        console.log("drag leave");
    }
    function drop(event) {
        event.preventDefault();
        const data = event.dataTransfer.getData("Card");
        event.target.appendChild(document.getElementById(data));
        console.log("dropped");
    }
    function allowDrag(event) {
        event.preventDefault();
    }
    return (
        <div className="h-32 w-28 border border-1 rounded-md border-dashed border-[#BD8E83]" onDragEnter={dragEnter} onDragLeave={dragLeave} onDrop={()=>drop(event)} onDragOver={()=>allowDrag(event)}>

        </div>
    );
}