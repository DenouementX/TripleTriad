# Triple Triad
A web implementation of the card mini-game [Triple Triad](https://finalfantasy.fandom.com/wiki/Triple_Triad_(Final_Fantasy_VIII)) from Final Fantasy VIII. The frontend is built using React, Tailwind CSS, and jQuery while the backend is powered by Next.js. Future developments will include a hefty backend to save user card collections and decks and upload custom cards.

- Website Link: [https://triple-triad.vercel.app](https://triple-triad.vercel.app)
- Play against a friend in sandbox mode: [https://triple-triad.vercel.app/sandbox](https://triple-triad.vercel.app/sandbox)
- Play against AI in game mode: [https://triple-triad.vercel.app/game](https://triple-triad.vercel.app/game)

## TODO
- [x] Implement MVP requirements
    - [x] Add scoring labels
    - [x] Make hand generation ignore duplicate cards
    - [x] Make card flip animations cooler
    - [x] Include game sound and card sound effects with volume toggle
    - [x] Implement turn based movement
    - [x] Get custom cursor to work : /
    - [x] Create winning/losing screen
- [x] Implement enemy AI
- [ ] Implement smarter enemy AI
- [ ] Create adventure mode
    - [ ] Create level picker page
- [ ] Allow users to save progress
    - [ ] Create log-in and intro page
    - [ ] Set up Google Authentication
    - [ ] Deck Building

## Developer Notes (for Mac)
Follow these steps to get a working instance set up on your computer:

1) Run `npm install` to install all dependencies
2) Boot up the application with `npm run dev`
