import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import "./App.css";
import Todo from "./components/Todo"
import Hundred from "./components/Hundred";
import First from "./components/First";


// //? Purpose

// Components with many state updates spread across many event handlers can get overwhelming. For these cases, you can consolidate all the state update logic outside your component in a single function, called a reducer.

//? Syntax 

// const [state, dispatch] = useReducer(reducer, initialArg)

// - reducer: The reducer function that specifies how the state gets updated. 
// - initialArg: The value from which the initial state is calculated. It can be a value of any type.

// action: The action performed by the user. It can be a value of any type. By convention, an action is usually an object with a type property identifying it and, optionally, other properties with additional information.

//? useReducer returns an array with exactly two values:

// 1) The current state. During the first render, it’s set to initialArg.
// 2) The dispatch function that lets you update the state to a different value and trigger a re-render.

//? Comparing useState and useReducer 

// Readability: useState is very easy to read when the state updates are simple. When they get more complex, they can bloat your component’s code and make it difficult to scan. In this case, useReducer lets you cleanly separate the how of update logic from the what happened of event handlers.

// Debugging: When you have a bug with useState, it can be difficult to tell where the state was set incorrectly, and why. With useReducer, you can add a console log into your reducer to see every state update, and why it happened (due to which action)

// We recommend using a reducer if you often encounter bugs due to incorrect state updates in some component, and want to introduce more structure to its code. You don’t have to use reducers for everything: feel free to mix and match! You can even useState and useReducer in the same component.

function App() {
  return (
    <main>
      <Nav />
      <Routes>
        <Route path="/" element={<First />}></Route>
        <Route path="hundred" element={<Hundred />}></Route>
        <Route path="todo" element={<Todo />}></Route>
      </Routes>
    </main>
  );
}

export default App;
