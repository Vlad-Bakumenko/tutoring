// 1. useState+useContext = state variable available in all components we want
// 2. useReducer+useContext = state object and dispatch function available in all components we want

// To implement this concept

// Step 1.1(import createContext and useState) & Step 2.1 (import createContext and useReducer)
import { createContext, useState, useReducer } from "react";

// Step 1.2(create context and export it)
export const RandomContext = createContext();

//Step 2.3(create initial state for state object)
const initialState = {
    items: JSON.parse(localStorage.getItem("items")),
    isPlaying:false,
    pickedItem:"",
    gifs: [
        "https://media.giphy.com/media/vVzH2XY3Y0Ar6/giphy.gif?cid=82a1493bbbv8efs3t500i4utn59xjxd7lmhj10jzulcq23sl&ep=v1_gifs_trending&rid=giphy.gif&ct=g",
        "https://media.giphy.com/media/L9AqjFr6H4iaY/giphy.gif?cid=82a1493bau9tmkbb3k7pnn3zxuy4pwxhlmsud9dwflyq4b9w&ep=v1_gifs_trending&rid=giphy.gif&ct=g",
        "https://media.giphy.com/media/5K7ngCtszoxxbaBieC/giphy.gif?cid=82a1493bau9tmkbb3k7pnn3zxuy4pwxhlmsud9dwflyq4b9w&ep=v1_gifs_trending&rid=giphy.gif&ct=g",
        "https://media.giphy.com/media/aiE3JQU3vLqTK/giphy.gif?cid=790b76118pb352guosl0jokipcr20oacqek5flm834nfagqc&ep=v1_gifs_search&rid=giphy.gif&ct=g",
        "https://media.giphy.com/media/aKLfLPnrRNkze7OrUJ/giphy.gif?cid=790b7611kuwf9vxbllwgh8v1kjbrrrbsajvdzk0eot6ykacw&ep=v1_gifs_search&rid=giphy.gif&ct=g",
      ],
      pickedGif:"https://media.giphy.com/media/vVzH2XY3Y0Ar6/giphy.gif?cid=82a1493bbbv8efs3t500i4utn59xjxd7lmhj10jzulcq23sl&ep=v1_gifs_trending&rid=giphy.gif&ct=g"
}

function reducer(currentState, action) {
    switch (action.type) {
        case "ADD":
            return {...currentState, items:[...currentState.items, action.payload]}
        case "DELETE":
            return {...currentState, items: currentState.items.filter(item => item !== action.payload)}
        case "PLAY":
            return {...currentState, isPlaying:!currentState.isPlaying}
        case "PICK":
             const randomItem = getRandomItem(currentState.items);
             const randomGif = getRandomItem(currentState.gifs)
             return {...currentState, pickedItem:randomItem, pickedGif:randomGif};
        case "RESET":
             return {...initialState, items:[]};
    }
}

function getRandomItem(array) {
    // min value = 0 (because 1st element of array have index 0)
    // max value = array.length-1 (index of last element in array)
    const randomIndex = Math.floor(Math.random()*array.length);
    return array[randomIndex];
}

// Step 1.3 (create provider-component)

function RandomContextProvider({children}) {
  const [input, setInput] = useState("");
  function handleChange(e) {
    setInput(e.target.value);    
  }  

  //Step 2.2(declare state object and dispatch function)
  const [state, dispatch] = useReducer(reducer, initialState)

  //Step 2.4(create function for handling add )
  function handleClick(e) {
    e.preventDefault();
    const duplicate = state.items.find(item => input === item);
    if (duplicate) {
        setError({open:true, content:"such item already exist"})
    } else if (!input) {
        setError({open:true, content:"no input"})
    } else {
        dispatch({type:"ADD", payload:input})
    }
    setInput("");
  }

  function handlePlay() {
    if (state.items.length < 2) {
        setError({open:true, content:"u need 2 items"})
    } else {
        dispatch({type:"PLAY"});
    }
  }
  
  // state variable for error handling(see Modal.jsx, handleClick and handlePlay functions)
  const [error, setError] = useState({content:"",open:false})

  console.log(state);
  return (
    // Step 1.4(define provider and who can subscribe to context (in our case children))
    //        |               Step 1.7(pass variables/functions that can be accessible by subscribers of context)
    <RandomContext.Provider value={{input,setInput, handleChange, handleClick, state, dispatch, handlePlay, error, setError}}>{children}</RandomContext.Provider>
  )
}

export default RandomContextProvider