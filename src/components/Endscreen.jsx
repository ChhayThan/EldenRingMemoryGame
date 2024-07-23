import "../style/Endscreen.css";

export default function Endscreen({ handleRestart, bestScoreboard }) {
  return (
    <div className="endScreenContainer">
      <h2>Game Over!</h2>
      <p>
        {bestScoreboard === 20
          ? `Congratulations! You scored 20 out of 20, you have an amazing memory`
          : `Good try, your best score is ${bestScoreboard} out of 20!`}
      </p>
      <button className="restartBtn" onClick={() => handleRestart("game")}>
        Restart Game!
      </button>
    </div>
  );
}
