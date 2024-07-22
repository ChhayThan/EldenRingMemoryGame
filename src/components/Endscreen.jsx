import "../style/Endscreen.css";

export default function Endscreen({ handleRestart, bestScoreboard }) {
  return (
    <div className="endScreenContainer">
      <h2>Game Over!</h2>
      <p>Your best score is {bestScoreboard}!</p>
      <button className="restartBtn" onClick={() => handleRestart("game")}>
        Restart Game!
      </button>
    </div>
  );
}
