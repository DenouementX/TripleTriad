import { getCardStatsDown, getCardStatsLeft, getCardStatsRight, getCardStatsUp } from "./cardHelper";


function getIndexOfCardsToFlip(lastCardPlayed) {

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

export function getUpdatedGameboardColor(lastCardPlayed, gameboard, gameboardColor) {
    if (lastCardPlayed === -1) {
        return gameboardColor;
    }

    var cardIDs = Array(9).fill(-1);
    for (var i = 0; i < 9; i++) {
        if (gameboard[i] != -1) {
            cardIDs[i] = gameboard[i].split('|')[0];
        }
    }

    var newCardColor = gameboard[lastCardPlayed].split('|')[1];
    gameboardColor[lastCardPlayed] = newCardColor;

    switch(lastCardPlayed) {
        case 0:
            // Positions to compare: 1, 3
            if (cardIDs[1] != -1 && battleRight(cardIDs[lastCardPlayed], cardIDs[1])) {
                gameboardColor[1] = newCardColor;
            }
            if (cardIDs[3] != -1 && battleDown(cardIDs[lastCardPlayed], cardIDs[3])) {
                gameboardColor[3] = newCardColor;
            }
            break;
        case 1:
            // Positions to compare: 0, 2, 4
            if (cardIDs[0] != -1 && battleLeft(cardIDs[lastCardPlayed], cardIDs[0])) {
                gameboardColor[0] = newCardColor;
            }
            if (cardIDs[2] != -1 && battleRight(cardIDs[lastCardPlayed], cardIDs[2])) {
                gameboardColor[2] = newCardColor;
            }
            if (cardIDs[4] != -1 && battleDown(cardIDs[lastCardPlayed], cardIDs[4])) {
                gameboardColor[4] = newCardColor;
            }
            break;
        case 2:
            // Positions to compare: 1, 5
            if (cardIDs[1] != -1 && battleLeft(cardIDs[lastCardPlayed], cardIDs[1])) {
                gameboardColor[1] = newCardColor;
            }
            if (cardIDs[5] != -1 && battleDown(cardIDs[lastCardPlayed], cardIDs[5])) {
                gameboardColor[5] = newCardColor;
            }
            break;
        case 3:
            // Positions to compare: 0, 4, 6
            if (cardIDs[0] != -1 && battleUp(cardIDs[lastCardPlayed], cardIDs[0])) {
                gameboardColor[0] = newCardColor;
            }
            if (cardIDs[4] != -1 && battleRight(cardIDs[lastCardPlayed], cardIDs[4])) {
                gameboardColor[4] = newCardColor;
            }
            if (cardIDs[6] != -1 && battleDown(cardIDs[lastCardPlayed], cardIDs[6])) {
                gameboardColor[6] = newCardColor;
            }
            break;
        case 4:
            // Positions to compare: 1, 3, 5, 7
            if (cardIDs[1] != -1 && battleUp(cardIDs[lastCardPlayed], cardIDs[1])) {
                gameboardColor[1] = newCardColor;
            }
            if (cardIDs[3] != -1 && battleLeft(cardIDs[lastCardPlayed], cardIDs[3])) {
                gameboardColor[3] = newCardColor;
            }
            if (cardIDs[5] != -1 && battleRight(cardIDs[lastCardPlayed], cardIDs[5])) {
                gameboardColor[5] = newCardColor;
            }
            if (cardIDs[7] != -1 && battleDown(cardIDs[lastCardPlayed], cardIDs[7])) {
                gameboardColor[7] = newCardColor;
            }
            break;
        case 5:
            // Positions to compare: 2, 4, 8
            if (cardIDs[2] != -1 && battleUp(cardIDs[lastCardPlayed], cardIDs[2])) {
                gameboardColor[2] = newCardColor;
            }
            if (cardIDs[4] != -1 && battleLeft(cardIDs[lastCardPlayed], cardIDs[4])) {
                gameboardColor[4] = newCardColor;
            }
            if (cardIDs[8] != -1 && battleDown(cardIDs[lastCardPlayed], cardIDs[8])) {
                gameboardColor[8] = newCardColor;
            }
            break;
        case 6:
            // Positions to compare: 3, 7
            if (cardIDs[3] != -1 && battleUp(cardIDs[lastCardPlayed], cardIDs[3])) {
                gameboardColor[3] = newCardColor;
            }
            if (cardIDs[7] != -1 && battleRight(cardIDs[lastCardPlayed], cardIDs[7])) {
                gameboardColor[7] = newCardColor;
            }
            break;
        case 7:
            // Positions to compare: 4, 6, 8
            if (cardIDs[4] != -1 && battleUp(cardIDs[lastCardPlayed], cardIDs[4])) {
                gameboardColor[4] = newCardColor;
            }
            if (cardIDs[6] != -1 && battleLeft(cardIDs[lastCardPlayed], cardIDs[6])) {
                gameboardColor[6] = newCardColor;
            }
            if (cardIDs[8] != -1 && battleRight(cardIDs[lastCardPlayed], cardIDs[8])) {
                gameboardColor[8] = newCardColor;
            }
            break;
        case 8:
            // Positions to compare: 5, 7
            if (cardIDs[5] != -1 && battleUp(cardIDs[lastCardPlayed], cardIDs[5])) {
                gameboardColor[5] = newCardColor;
            }
            if (cardIDs[7] != -1 && battleLeft(cardIDs[lastCardPlayed], cardIDs[7])) {
                gameboardColor[7] = newCardColor;
            }
            break;
    }
    return gameboardColor;
}