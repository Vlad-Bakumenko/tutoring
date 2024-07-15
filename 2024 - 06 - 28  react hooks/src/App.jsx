import React from "react";
import { useState } from "react";
import UseEffectHook from "./UseEffectHook";
import UseReducerHook from "./UseReducerHook";
import UseRefHook from "./UseRefHook";
import UseMemoHook from "./UseMemoHook";
import UseCallbackHook from "./UseCallbackHook";
/*
Most used:

- useState
- useEffect
- useReducer
- useContext

Less used:

- useRef
- useMemo
- useCallback

Specific:
- customHooks

? 1. useState

useState is a React Hook that lets add a state variable to component which returns an array with exactly two values:
- current state
- set function

Syntax:
const [value, setValue] = useState(initialState)

If you update with setFunction the state variable which is either object or array, first you need to make copy of it and after update as necessary
*/

const App = () => {
  // const [count, setCount] = useState(0);

  const [options, setOptions] = useState({
    count:0,
  })
  // const handleClick = () => {
  //   setCount(count + 1);
  // };

  return (
    <>
      <div>{options.count}</div>
      <button onClick={()=> setOptions({...options, count:options.count + 1})}>Click</button>

      <UseEffectHook/>
      <UseReducerHook/>
      <UseRefHook/>
      <UseMemoHook/>
      <UseCallbackHook/>
    </>
  );
};

export default App;
