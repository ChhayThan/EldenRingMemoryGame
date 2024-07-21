import { useState, useEffect } from "react";
import eldenRing from "./assets/Elden-Ring-Logo.png";
import Rules from "./components/Rules";
import Game from "./components/Game";
import "./style/App.css";

function App() {
  return (
    <main>
      <header>
        <img src={eldenRing} alt="Elden Ring logo" />
        <h1>Memory Game</h1>
      </header>
      <Rules />
      <Game />
    </main>
  );
}

export default App;
