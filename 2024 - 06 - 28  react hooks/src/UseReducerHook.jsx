import React, { Children } from 'react'
import { useReducer, createContext } from 'react'
import UseContextHook from './UseContextHook';

/*
? 3. useReducer
useReducer is an alternative to useState for managing complex state logic, with a reducer function. Returns an array with the current state and a dispatch function.
*/

export const CountContext = createContext(null);

const initialState = {
  count:0,
  toggle:false
}

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {...state, count:state.count+1};
    case 'decrement':
      return {...state, count:state.count-1};  
  }
}

const UseReducerHook = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <CountContext.Provider value={{state, dispatch}}>
      <UseContextHook/>
      {/* {children} */}
    </CountContext.Provider>
    // <div>
    //   <p>Count: {state.count}</p>
    //   <button onClick={()=> dispatch({type:'decrement'})}>-</button>
    //   <button onClick={()=> dispatch({type:'increment'})}>+</button>
    // </div>
  )
}

// User components(for the components related to User - we can create UserContext + state and dispatch for User)

// Register.jsx
// Login.jsx

// Cart components: (and have separate CartContext and state + dispatch for Cart)

// Cart.jsx
// Checkout.jsx

// Navbar.jsx component :

// state variable: const [isHamburgerOpened, setIsHamburgerOpened] = useState(false);

// function Navbar () {
//    return (
//      { isHamburgerOpened ? <Hamburger/> : <Home/> }
//)  
// }
export default UseReducerHook