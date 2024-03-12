import { useContext } from "react";
import { ScoreContext } from "../contexts/ScoreContext";

function Scoreboard() {
    // useContext returns the context value for the calling component. It is determined as the value passed to the closest SomeContext.Provider above the calling component in the tree.

    const {score, plusScore, minusScore}=useContext(ScoreContext);

  return (
    <>
    <h1>Score Board</h1>
    <h2>Your current score is <span>{score}</span></h2>
    <div className="btn-container">
        <button onClick={plusScore}>+</button>
        <button onClick={minusScore}>-</button>
    </div>
    </>
  )
}

export default Scoreboard