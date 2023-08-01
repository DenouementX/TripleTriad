
// Since Hand1 and Hand2 is not updated when a card is placed on the gameboard,
// this function determines which cards each player actively has in their hands
function actualHand(hand, gameboard, color) {
    var actualHand = [];
    for (var card of hand) {
        if (!gameboard.includes(card + color)) {
            actualHand.push(card + color);
        }
    }
    return actualHand;
}


// Given AI hand, player hand, gameboard, and gameboardColor
// Returns the card and position for it to be played as [cardID, position]
// Most basic AI, takes the first available card and places it in the first available cell
export function playStupid(hand1, hand2, gameboard, gameboardColor) {
    var handAI = actualHand(hand1, gameboard, "R") // Actual AI hand
    for (var cell in gameboard) {
        if (gameboard[cell] === -1) {
            return [handAI[0], cell];
        }
    }
}
