import React from "react";
import { useReducer } from "react";

const initialState = { clicks: 0, score: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment": {
      //! state.clicks = state.clicks + 1
      //! state.score = state.score + 1
      //! return state;
      return { clicks: state.clicks + 1, score: state.score + 1 };
    }
    case "decrement": {
      return { clicks: state.clicks + 1, score: state.score - 1 };
    }
    case "double": {
      return { clicks: state.clicks + 1, score: state.score * 2 };
    }
    case "custom+": {
      return { clicks: state.clicks + 1, score: state.score + +action.value };
    }
    case "custom-": {
      return { clicks: state.clicks + 1, score: state.score + +action.value };
    }
    case "abs": {
      return {
        clicks: state.clicks + 1,
        score: Math.abs(state.score),
      };
    }
    case "reset": {
      return initialState;
    }
    default:
      console.error("unknown action");
  }
}

function Hundred() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>Make it 100!</h2>
      <h3>Score: {state.score}</h3>
      {state.score === 100 && (
        <h2>You made 100 within {state.clicks} clicks!</h2>
      )}
      <button onClick={() => dispatch({ type: "increment" })}>+1</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-1</button>
      <button onClick={() => dispatch({ type: "double" })}>Double</button>
      <input
        type="button"
        onClick={(e) => dispatch({ type: "custom+", value: e.target.value })}
        value={25}
      />
      <input
        type="button"
        onClick={(e) => dispatch({ type: "custom-", value: e.target.value })}
        value={-25}
      />
      <button onClick={() => dispatch({ type: "abs" })}>Abs</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}

export default Hundred;
