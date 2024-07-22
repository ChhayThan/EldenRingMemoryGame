import { useState, useEffect } from "react";
import Scoreboard from "./Scoreboard";

export default function Game({
  bestScoreboard,
  setBestScoreboard,
  setGameStatus,
}) {
  const [characterArray, setCharacterArray] = useState([]);
  const [endGame, setEndGame] = useState(false);

  const [currentScoreboard, setCurrentScoreboard] = useState(0);

  function shuffle(array) {
    let currentIndex = array.length;
    while (currentIndex != 0) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
  }

  async function getCharacterArray() {
    try {
      const response = await fetch("https://eldenring.fanapis.com/api/npcs", {
        mode: "cors",
      });
      const characters = await response.json();
      return characters.data;
    } catch (error) {
      console.log(error);
      return ["Error"];
    }
  }

  useEffect(() => {
    async function fetchCharacters() {
      const characters = await getCharacterArray();
      let newCharacterArray = [];
      characters.map((character) => {
        let characterObject = { ...character, picked: false };
        newCharacterArray.push(characterObject);
      });
      shuffle(newCharacterArray);
      setCharacterArray(newCharacterArray);
    }
    fetchCharacters();
  }, [endGame]);

  const handleCharacterClick = (character) => {
    if (character.picked) {
      setCurrentScoreboard(0);
      setEndGame(true);
      setGameStatus("end");
    } else {
      const updatedCharacterArray = characterArray.map((char) =>
        char.id === character.id ? { ...char, picked: true } : char
      );
      setCurrentScoreboard((prevScore) => {
        const newScore = prevScore + 1;
        if (newScore > bestScoreboard) {
          setBestScoreboard(newScore);
        }
        return newScore;
      });
      shuffle(updatedCharacterArray);
      setCharacterArray(updatedCharacterArray);
    }
  };
  return (
    <div className="gameContainer">
      <Scoreboard currentScore={currentScoreboard} bestScore={bestScoreboard} />

      <div className="cardContainer">
        {characterArray.length > 0 &&
          characterArray.map((character) => (
            <div key={character.id} className="card">
              <img
                src={character.image}
                alt={`image of ${character.name}`}
                onClick={() => handleCharacterClick(character)}
              />
              {character.name}
            </div>
          ))}
      </div>
    </div>
  );
}
