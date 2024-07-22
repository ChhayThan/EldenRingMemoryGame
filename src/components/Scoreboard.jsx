import "../style/Scoreboard.css";
export default function Scoreboard({ currentScore, bestScore }) {
  return (
    <div className="scoreboardContainer">
      <p className="currentScore">Current Score: {currentScore}</p>
      <p className="bestScore">Best Score: {bestScore}</p>
    </div>
  );
}
