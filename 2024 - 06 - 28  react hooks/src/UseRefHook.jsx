import React from 'react'
import { useRef } from 'react';

// ? 5. useRef
// useRef is used to create a reference to a DOM node or a value that persists across renders.

const UseRefHook = () => {
  const inputEl = useRef(null);

  const handleClick = () => {
    inputEl.current.focus();
  }
  
  return (
    <div>
        <input type="text" ref={inputEl}/>
        <button onClick={handleClick}>Use Ref Example</button>
    </div>
  )
}

export default UseRefHook