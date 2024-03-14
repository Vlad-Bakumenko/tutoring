import { useState, useReducer } from "react";

const initialState = [{ id: 0, todo: "book a room", done: false }];

function reducer(currentState, action) {
  switch (action.type) {
    case "add":
      return [
        ...currentState,
        { id: Date.now(), todo: action.todo, done: false },
      ]; // making copy of array and add object with properties (id, todo (value is property of action object line 34), done)
    case "remove":
      return currentState.filter((todoObj) => todoObj.id !== action.id); // returning an array without necessary object (that matches id with id of action object)
    case "toggle":
      return currentState.map((todoObj) =>
        todoObj.id === action.id ? { ...todoObj, done: !todoObj.done } : todoObj
      );
    // Create a new array from currentState array and fill new array with currentState elements(todoObj) and for object that matches id with actionObj id change property "done" on true
  }
}

function Todo() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);

  // State to control input value
  const [inputValue, setInputValue] = useState("");

  // function for updating the state "inputValue" 
  function handleChange(e) {
    setInputValue(e.target.value);
  }
  // console.log(inputValue);

  // function for handling submit if user "add" empty string - alert
  function handleSubmit(e) {
    e.preventDefault();
    if (inputValue.length > 0) {
      dispatch({ type: "add", todo: inputValue });
      setInputValue("");
    } else {
      alert("please fill input field");
    }
  }

  // function for handling toggling of checkbox
  function handleChecked(id) {
    dispatch({ type: "toggle", id });
  }

  // function for handling delete
  function handleDelete(id) {
    // object that will be deleted
    const taskToDelete = state.find((todo) => todo.id === id);

    // if such object exists and property "done" is falsy value - alert
    if (taskToDelete && !taskToDelete.done) { //if task exists & if tasks isn't done
      alert("You must complete the tasks before deleting them!");
    } else {
      // carry out action
      dispatch({ type: "remove", id });
    }
  }

  return (
    <div>
      <h3>To-do List</h3>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="what to do"
          onChange={handleChange}
          value={inputValue}
        />
        <button>add</button>
      </form>
      <ul>
        {state.map((todoObj) => (
          <li key={todoObj.id}>
            <input
              type="checkbox"
              checked={todoObj.done}
              onChange={() => handleChecked(todoObj.id)}
            />
            { todoObj.done && <span>✅</span> } {todoObj.todo}
            <button
              onClick={()=>handleDelete(todoObj.id)
              }
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
