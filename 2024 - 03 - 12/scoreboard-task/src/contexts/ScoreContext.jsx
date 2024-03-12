import { createContext, useState } from "react";

// The context itself does not hold the information, it only represents the kind of information you can provide or read from components.
export const ScoreContext = createContext();

function ScoreContextProvider({children}) {
    const [score, setScore] = useState(0);
    function plusScore() {
        setScore(score+10);
    }
    function minusScore() {
        setScore(score-10);
    }

  return (
    <ScoreContext.Provider value={{score, plusScore, minusScore}}>{children}</ScoreContext.Provider>
  )
}

export default ScoreContextProvider