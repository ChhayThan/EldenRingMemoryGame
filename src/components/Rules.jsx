import "../style/Rules.css";

export default function Rules({ handleStart }) {
  return (
    <div className="rulesContainer">
      <h2>Rules of this memory game!</h2>
      <ul>
        <li>
          A grid of random characters of the Elden Ring game cards will be
          displayed.
        </li>
        <li>Click each Character only once.</li>
        <li>All of the characters will be shuffled after each click.</li>
        <li>Try your best to remember which ones you've already clicked.</li>
        <li>Clicking on the same card twice will result in Game Over.</li>
        <li>When you're ready, click Start!</li>
      </ul>

      <button className="startBtn" onClick={() => handleStart("game")}>
        Start Game!
      </button>
    </div>
  );
}
