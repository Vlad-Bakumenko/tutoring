/*

? 2. useEffect

useEffect is a React Hook that lets perform side-effects in the component. Side effect - action which connects the component to the outside world

* Syntax:

useEffect(
  function to be executed;
  cleanup function (optional);
  , [Dependency array]
)

? When are effects executed?

Mount (initial render) -> result of rendering committed to the DOM -> DOM changes are painted onto the screen by browser -> useEffect executed

* (Optional) - useLayoutEffect - same as useEffect, but executed before DOM changes are painted onto the screen

Dependency array cases:

1. useEffect(fn, [x,y,z]) - effect synchronizes with x,y,z / runs on mount and re-renders triggered by updating or x, or y, or z
2. useEffect(fn, []) - effect synchronizes with no state/props / runs only on mount (on initial render)
3. useEffect(fn) - effect synchronizes with everything / runs on every render

Cleanup function runs on 2 different occasions:
- before the effect executed again;
- after a component has unmounted ( component has been removed from DOM and is no longer rendered by React)

*/

import React, { useEffect, useLayoutEffect, useState } from 'react'

const UseEffectHook = () => {
  const [count, setCount] = useState(0);
  const [countPlusOne, setcountPlusOne] = useState(0);

  
  useEffect(() => {
    document.title = `You  clicked ${count} times`
    // return () => {
    //   setCount(0);
    // }
  }, [count])
  
  // useLayoutEffect(() => {
  //   console.log("hello world");
  // }, [])

  return (
    <div>
      <p>You  clicked ${count} times</p>
      <p>{countPlusOne}</p>
      <button onClick={()=> setCount(count + 1)}>Click me useEffect</button>
      <button onClick={()=> setcountPlusOne(countPlusOne + 2)}>CLICK</button>
    </div>
  )
}

export default UseEffectHook