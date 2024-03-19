import { createContext } from "react";
import { useReducer, useEffect } from "react";

export const UsersContext = createContext();

// The app's state should be managed by a reducer in UsersContext.jsx
const initialState = {
    users: [],
    loggedInUserId: null,
    formError: false,
    loginDetails: {
      username: "",
      password: ""
    }
  };
  
  
  function reducer(state, action) {
    switch(action.type) {
      case "updateUsers": {
        return { ...state, users: action.payload }
      }
      case "loginSubmit": {
        const user = state.users.find(user => {
          return user.username === state.loginDetails.username && user.email === state.loginDetails.password
        });
    
        if (user) {
          return { ...state, formError: false, loggedInUserId: user.id, loginDetails: { username: "", password: "" } };
        } else {
          return { ...state, formError: true, loginDetails: { username: "", password: "" } };
        }
      }
      case "logout": {
        return { ...state, loggedInUserId: null };
      }
      case "loginChange": {
        if (action.payload.name === "username") {
          return { ...state, loginDetails: { ...state.loginDetails, username: action.payload.value } }
        } else {
          return { ...state, loginDetails: { ...state.loginDetails, password: action.payload.value } }
        }
      }
    }
  
    throw new Error("Unknown action: ", action.type);
  }

function UsersContextProvider({children}) {
    const [ state, dispatch ] = useReducer(reducer, initialState);
    console.log(state);
    const loggedInUser = state.users.find(user => user.id === state.loggedInUserId);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => {
          if (response.ok) {
            return response.json()
          }
          throw new Error("Could not fetch users");
        })
        .then(data => {
          const fetchedUsers = [];
    
          data.forEach(user => {
            fetchedUsers.push({
              id: user.id,
              username: user.username,
              email: user.email,
              name: user.name
            });
          })
    
          dispatch({ type: "updateUsers", payload: fetchedUsers });
        })
        .catch(err => {
          alert(err.message);
        })
    
      }, []);
  return (
    // UsersContext.jsx should also provide context for any child component which needs to access state and/or the dispatch function (to update state)
    <UsersContext.Provider value={{state, dispatch, loggedInUser}}>{children}</UsersContext.Provider>
  )
}

export default UsersContextProvider