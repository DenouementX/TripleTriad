'use client';

import Hand from "../../components/hand";

export default function Page() {
    var cardIDs = [];
    for (var i = 1; i < 111; i+=5) {
        cardIDs.push([i, i+1, i+2, i+3, i+4]);
    }
    
    return (
        <div className="mb-16 mt-4">
            {cardIDs.map(cardID => (
                <Hand cardIDs = {cardID} color="G"></Hand>
            ))}
        </div>
    );
}