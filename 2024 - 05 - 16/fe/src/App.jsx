import { useState, useEffect } from "react";
import Hotel from "./Hotel";
import "./App.css";

function App() {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    getHotels();
  }, []);

  async function getHotels() {
    try {
      const response = await fetch(`http://localhost:3001/hotels`);
      const result = await response.json();
      setHotels(result);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Breakfast included
          <input type="checkbox" name="breakfast" value="" />
        </label>
        <label>
          Rating over (0-10)
          <input type="number" min="0" max="10" name="rated" value="" />
        </label>
        <label>
          Sort by
          <select name="sortby">
            <option value="name">Name</option>
            <option value="stars">Stars</option>
            <option value="rating">Rating</option>
          </select>
        </label>
        <label>
          <input type="radio" name="sortdir" value="asc" />
          Ascending
        </label>
        <label>
          <input type="radio" name="sortdir" value="desc" />
          Descending
        </label>
        <button type="submit">Go</button>
      </form>
      <label>
        current page: 1
        <input type="button" value="to the previous page" />
        <input type="button" value="to the next page" />
      </label>

      {hotels.length && hotels.map((hotel, i) => <Hotel hotel={hotel} key={i} />)}

      {!hotels.length && <p>no hotels found</p>}
    </>
  );
}

export default App;
