// ? 6. useMemo
// useMemo is used to memoize a value, so it's not recalculated on every render.

import { useEffect, useState, useMemo } from "react";

const UseMemoHook = () => {
  const [data, setData] = useState(null);

  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    async function getComments(){
      const res = await fetch("https://jsonplaceholder.typicode.com/comments");
      const result = await res.json();
      setData(result);
    }

    getComments();
    
  }, []);

  console.log(data);

  const findLongestComment = (comments) => {
    if (!comments) return null;

    let longestComment = "";
    for (let i = 0; i < comments.length; i++) {
      let currentComment = comments[i].name;
      if (currentComment.length > longestComment.length) {
        longestComment = currentComment;
      }
    }

    console.log("THIS WAS COMPUTED");

    return longestComment;
  };

  const getLongestComment = useMemo(()=> findLongestComment(data), [data])

  return (
    <div>
      <div>{getLongestComment}</div>
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        Toggle
      </button>
      {toggle && <h1>Toggle</h1>}
    </div>
  );
};

export default UseMemoHook;
