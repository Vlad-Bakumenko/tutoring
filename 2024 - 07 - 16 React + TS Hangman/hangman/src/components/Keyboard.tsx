import styles from "../Keyboard.module.css";

const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

type KeyboardProps = {
  correctLetters: string[];
  incorrectLetters: string[];
  addGuessedLetter: (letter: string) => void;
  isKeyboardDisabled?: boolean;
};

const Keyboard = ({
  correctLetters,
  incorrectLetters,
  addGuessedLetter,
  isKeyboardDisabled = false,
}: KeyboardProps) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))",
        gap: ".5rem",
      }}
    >
      {KEYS.map((key) => {
        const isActive = correctLetters.includes(key);
        const isInactive = incorrectLetters.includes(key);

        return (
          <button
            onClick={() => addGuessedLetter(key)}
            key={key}
            className={`${styles.btn} ${isActive ? styles.active : ""} ${
              isInactive ? styles.inactive : ""
            }`}
            disabled={isInactive || isActive || isKeyboardDisabled}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
};

export default Keyboard;
