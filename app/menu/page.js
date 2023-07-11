'use client';

import Opponent from "../../components/menu/opponent";

export default function Page() {
    var cardIDs = [];
    for (var i = 1; i < 111; i+=5) {
        cardIDs.push([i, i+1, i+2, i+3, i+4]);
    }
    
    return (
        <div className="mb-16 mt-4">
            <Opponent name="Goldie" description="A mighty golden retriever who is set on being the triple triad champion. Is he all bark with no bite?" difficulty={2}/>
        </div>
    );
}