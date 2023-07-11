import Link from "next/link";

export default function Page() {
  return (
    <div className="text-center">
      <h1 className="text-8xl mt-8">Welcome to Triple Triad!</h1>
      <br />
      <div className="text-3xl mx-80">
        This is a fan-made web implementation of the card mini-game Triple Triad from Final Fantasy VIII. 
        <br />
        <br />
        - - - - - - - - - - * Game Rules * - - - - - - - - - -
        <br />
        <ol className="text-left">
          <li>1) Each player takes turns placing cards on a 3x3 grid</li>
          <li>2) When a card is placed, it battles neighboring opposite colored cards via adjacent numbers</li>
          <li>3) If the card placed has a higher number, it flips the other card to its color</li>
          <li>4) After 9 cards have been placed, the player with more cards of their color wins!</li>
        </ol> 
        <br />
      </div>
      <p className="text-2xl underline">
        <Link href="/sandbox">Click here to try a demo of the game</Link>
        <br />
        <Link href="/cards">Click here to see all the cards</Link>
        <br />
        <Link className="underline" href="https://github.com/DenouementX/TripleTriad">Click here to see the project</Link>
      </p>
    </div>
  )
}