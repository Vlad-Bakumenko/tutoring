// ? 7. useCallback
// useCallback is used to memoize a function, so it's not recreated on every render.
import Child from "./Child";
import { useState } from "react";
import { useCallback } from "react";

const UseCallbackHook = () => {
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState("hello worl");

  const returnComment = useCallback((name) => {
    return data + name;
  }, [name]
) 

  return (
    <div>
      <Child returnComment={returnComment}/>
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >Toggle</button>
      {toggle && <h1> toggle </h1>}
    </div>
  );
};

export default UseCallbackHook;
