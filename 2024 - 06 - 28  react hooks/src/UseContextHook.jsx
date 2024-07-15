import React from 'react'
import { useContext } from 'react';
import {CountContext} from './UseReducerHook';


/*
? 4. useContext

useContext is used to subscribe to context changes,  accesses context values without prop drilling.

Context was created in UseReducerHook.jsx and consumed here
*/

const UseContextHook = () => {
    const {state, dispatch} = useContext(CountContext);
  return (
    <div>
       <p>Count: {state.count}</p>
       <button onClick={()=> dispatch({type:'decrement'})}>-</button>
       <button onClick={()=> dispatch({type:'increment'})}>+</button>
     </div>
  )
}

export default UseContextHook