
// Since Hand1 and Hand2 is not updated when a card is placed on the gameboard,

import { getCardStats, getCardStatsUp, getCardStatsRight, getCardStatsDown, getCardStatsLeft } from "./cardHelper";

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


// Given AI hand, player hand, and gameboard
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

// Plays card that leads to the most number of card flips each time
// If there is no possible flip, it just picks and places a random card in a random spot
export function playHungry(hand1, hand2, gameboard, gameboardColor) {
    var handAI = actualHand(hand1, gameboard, "R") // Actual AI hand
    var maxFlip = -1;
    var maxPosition = -1;
    var maxCardID = "";

    for (var cell in gameboard) {
        if (gameboard[cell] === -1) {
            for (var card of handAI) {
                var numFlips = numCardsFlipped(cell, card.slice(0, -1), gameboard, gameboardColor);
                if (numFlips > maxFlip) {
                    maxFlip = numFlips;
                    maxPosition = cell;
                    maxCardID = card;
                }
            }
        }
    }
    return [maxCardID, maxPosition];
}

// Returns true if card1's up attribute is higher than card2's down attribute
function battleUp(card1, card2) {
    return getCardStatsUp(card1) > getCardStatsDown(card2);
}

function battleRight(card1, card2) {
    return getCardStatsRight(card1) > getCardStatsLeft(card2);
}

function battleDown(card1, card2) {
    return getCardStatsDown(card1) > getCardStatsUp(card2);
}

function battleLeft(card1, card2) {
    return getCardStatsLeft(card1) > getCardStatsRight(card2);
}

// Simulates how many cards would be flipped given a card is placed at index
function numCardsFlipped(index, card, gameboard, gameboardColor) {
    var numFlips = 0;
    switch(parseInt(index)) {
        case 0:
            // Positions to compare: 1, 3
            if (gameboardColor[1] === "B" && battleRight(card, gameboard[1].slice(0, -1))) {
                numFlips += 1;
            }
            if (gameboardColor[3] === "B" && battleDown(card, gameboard[3].slice(0, -1))) {
                numFlips += 1;
            }
            break;
        case 1:
            // Positions to compare: 0, 2, 4
            if (gameboardColor[0] === "B" && battleLeft(card, gameboard[0].slice(0, -1))) {
                numFlips += 1;
            }
            if (gameboardColor[2] === "B" && battleRight(card, gameboard[2].slice(0, -1))) {
                numFlips += 1;
            }
            if (gameboardColor[4] === "B" && battleDown(card, gameboard[4].slice(0, -1))) {
                numFlips += 1;
            }
            break;
        case 2:
            // Positions to compare: 1, 5
            if (gameboardColor[1] === "B" && battleLeft(card, gameboard[1].slice(0, -1))) {
                numFlips += 1;
            }
            if (gameboardColor[5] === "B" && battleDown(card, gameboard[5].slice(0, -1))) {
                numFlips += 1;
            }
            break;
        case 3:
            // Positions to compare: 0, 4, 6
            if (gameboardColor[0] === "B" && battleUp(card, gameboard[0].slice(0, -1))) {
                numFlips += 1;
            }
            if (gameboardColor[4] === "B" && battleRight(card, gameboard[4].slice(0, -1))) {
                numFlips += 1;
            }
            if (gameboardColor[6] === "B" && battleDown(card, gameboard[6].slice(0, -1))) {
                numFlips += 1;
            }
            break;
        case 4:
            // Positions to compare: 1, 3, 5, 7
            if (gameboardColor[1] === "B" && battleUp(card, gameboard[1].slice(0, -1))) {
                numFlips += 1;
            }
            if (gameboardColor[3] === "B" && battleLeft(card, gameboard[3].slice(0, -1))) {
                numFlips += 1;
            }
            if (gameboardColor[5] === "B" && battleRight(card, gameboard[5].slice(0, -1))) {
                numFlips += 1;
            }
            if (gameboardColor[7] === "B" && battleDown(card, gameboard[7].slice(0, -1))) {
                numFlips += 1;
            }
            break;
        case 5:
            // Positions to compare: 2, 4, 8
            if (gameboardColor[2] === "B" && battleUp(card, gameboard[2].slice(0, -1))) {
                numFlips += 1;
            }
            if (gameboardColor[4] === "B" && battleLeft(card, gameboard[4].slice(0, -1))) {
                numFlips += 1;
            }
            if (gameboardColor[8] === "B" && battleDown(card, gameboard[8].slice(0, -1))) {
                numFlips += 1;
            }
            break;
        case 6:
            // Positions to compare: 3, 7
            if (gameboardColor[3] === "B" && battleUp(card, gameboard[3].slice(0, -1))) {
                numFlips += 1;
            }
            if (gameboardColor[7] === "B" && battleRight(card, gameboard[7].slice(0, -1))) {
                numFlips += 1;
            }
            break;
        case 7:
            // Positions to compare: 4, 6, 8
            if (gameboardColor[4] === "B" && battleUp(card, gameboard[4].slice(0, -1))) {
                numFlips += 1;
            }
            if (gameboardColor[6] === "B" && battleLeft(card, gameboard[6].slice(0, -1))) {
                numFlips += 1;
            }
            if (gameboardColor[8] === "B" && battleRight(card, gameboard[8].slice(0, -1))) {
                numFlips += 1;
            }
            break;
        case 8:
            // Positions to compare: 5, 7
            if (gameboardColor[5] === "B" && battleUp(card, gameboard[5].slice(0, -1))) {
                numFlips += 1;
            }
            if (gameboardColor[7] === "B" && battleLeft(card, gameboard[7].slice(0, -1))) {
                numFlips += 1;
            }
            break;
    }
    return numFlips;
}