import "./App.css";
import react from "react";

function App() {

  return (
    <>
      <h1>My Favorites</h1>
      <form >
        <input
          type="text"
          placeholder="artist"
          value=""
        />
        <input
          type="text"
          placeholder="title"
          value=""
        />
        <input
          type="text"
          placeholder="year"
          value=""
        />
        <input
          type="file"
          placeholder="upload image"
          accept="image/*"
        />
        <button>Add</button>
      </form>
      
    </>
  );
}

export default App;
