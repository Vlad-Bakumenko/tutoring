import vite from "/vite.svg";
import kuma from "/kuma.png";

import { useReducer } from "react";

const initialState = {
  message: "Good morning",
  isClicked: false,
  src: vite,
};
// treat `action` as an object, and its type property defines the name of action - later in event handler, we will dispatch a certain action by choosing the action type
function reducer(currentState, action) {
  if (action.type === "message") {
    return { ...currentState, message: action.value };
  } else if (action.type === "isClicked") {
    return { ...currentState, isClicked: !currentState.isClicked };
  } else if (action.type === "src") {
    return { ...currentState, src: currentState.src === kuma ? vite : kuma };
  } else if (action.type === "reset") {
    return initialState;
  } else throw new Error("unknown action");
}

function First() {
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log(state.message);

  return (
    <div className="wrapper">
      <input
        onChange={(e) => dispatch({ type: "message", value: e.target.value })}
        value={state.message}
      />
      <button onClick={() => dispatch({ type: "isClicked" })}>click</button>
      {state.isClicked && (
        <div>
          Toggle Image
          <img onClick={() => dispatch({ type: "src" })} src={state.src} />
        </div>
      )}
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
    </div>
  );
}

export default First;
