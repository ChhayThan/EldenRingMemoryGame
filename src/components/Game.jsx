import { useState, useEffect } from "react";

export default function Game() {
  const [characterArray, setCharacterArray] = useState([]);

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
      setCharacterArray(characters);
    }
    fetchCharacters();
  }, []);

  console.log(characterArray);
  return (
    <div className="gameContainer">
      {characterArray.length > 0 && (
        <ul>
          {characterArray.map((character) => (
            <li key={character.id}>
              <img
                src={character.image}
                alt="image of character"
                onClick={() => {
                  let newCharacterArray = [...characterArray];
                  shuffle(newCharacterArray);
                  setCharacterArray(newCharacterArray);
                }}
              />
              {character.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
