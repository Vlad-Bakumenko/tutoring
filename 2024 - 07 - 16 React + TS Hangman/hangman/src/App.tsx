import { useCallback, useEffect, useState } from "react";
import HangmanDrawing from "./components/HangmanDrawing";
import HangmanWord from "./components/HangmanWord";
import Keyboard from "./components/Keyboard";
import words from "./wordsList.ts";



const App = () => {
  function getWord() {
    return words[Math.floor(Math.random() * words.length)];
  }
  //! Look notes.js #1

  const [wordToGuess, setWordToGuess] = useState(getWord);
    // const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  console.log(wordToGuess);

  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const incorrectLetters = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );

  const isLoser = incorrectLetters.length >= 6;
  const isWinner = wordToGuess
    .split("")
    .every((letter) => guessedLetters.includes(letter));

  //! Look notes.js #4

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;

      if (key !== "Enter") return;

      e.preventDefault();
      setGuessedLetters([]);
      setWordToGuess(getWord());
    };

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, []);


  //! Look notes.js #5

  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter) || isLoser || isWinner) return;

      setGuessedLetters((currentLetters) => [...currentLetters, letter]);
    },

    [guessedLetters, isWinner, isLoser]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;

      if (!key.match(/^[a-z]$/)) return;

      e.preventDefault();
      addGuessedLetter(key);
      //console.log(key);
      //! Look notes.js #6
    };

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [guessedLetters]);

  return (
    <div
      style={{
        maxWidth: "800px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1rem",
        margin: "0 auto",
      }}
    >
      <div style={{ fontSize: "2rem", textAlign: "center" }}>
        {isWinner && "Winner! If you want to try again => Refresh the page"}
        {isLoser &&
          "Game over, nice try! If you want to try again => Refresh the page"}
      </div>
      <HangmanDrawing incorrectLetters={incorrectLetters} />
      <HangmanWord guessedLetters={guessedLetters} wordToGuess={wordToGuess} reveal={isLoser}/>
      <div style={{ alignSelf: "stretch" }}>
        <Keyboard
          correctLetters={guessedLetters.filter((letter) =>
            wordToGuess.includes(letter)
          )}
          incorrectLetters={incorrectLetters}
          addGuessedLetter={addGuessedLetter}
          isKeyboardDisabled={isWinner || isLoser}
        />
      </div>
    </div>
  );
};

export default App;
