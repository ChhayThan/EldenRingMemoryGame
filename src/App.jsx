import { useState, useEffect } from "react";
import eldenRing from "./assets/Elden-Ring-Logo.png";
import Rules from "./components/Rules";
import Game from "./components/Game";
import "./style/App.css";
import Endscreen from "./components/Endscreen";

function App() {
  const [gameStatus, setGameStatus] = useState("rule");
  const [bestScoreboard, setBestScoreboard] = useState(0);
  return (
    <main>
      <header>
        <img src={eldenRing} alt="Elden Ring logo" />
        <h1>Memory Game</h1>
      </header>
      {gameStatus === "rule" ? (
        <Rules handleStart={setGameStatus} />
      ) : gameStatus === "game" ? (
        <Game
          setGameStatus={setGameStatus}
          bestScoreboard={bestScoreboard}
          setBestScoreboard={setBestScoreboard}
        />
      ) : (
        <Endscreen
          handleRestart={setGameStatus}
          bestScoreboard={bestScoreboard}
        />
      )}
    </main>
  );
}

export default App;
