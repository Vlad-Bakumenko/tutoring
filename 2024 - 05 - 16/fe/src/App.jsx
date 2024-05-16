import { useState, useEffect } from "react";
import Hotel from "./Hotel";
import "./App.css";

function App() {
  const [hotels, setHotels] = useState([]);
  const [page, setPage] = useState(1);
  const [breakfast, setBreakfast] = useState(false);
  const [rating, setRating] = useState(0);
  const [sortby, setSortby] = useState("name");
  const [sortdir, setSortdir] = useState("asc");

  useEffect(() => {
    getHotels();
  }, [page]);

  async function getHotels() {
    try {
      const response = await fetch(`http://localhost:3001/hotels?page=${page}&breakfast=${breakfast}&rating=${rating}&sortby=${sortby}&sortdir=${sortdir}`);
      const result = await response.json();
      setHotels(result);
    } catch (error) {
      console.log(error);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    getHotels();
  }

  function nextPage() {
    setPage(page+1);
  }

   function previousPage() {
    setPage(page-1);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Breakfast included
          <input type="checkbox" name="breakfast" value={breakfast} onClick={()=> setBreakfast(!breakfast)}/>
        </label>
        <label>
          Rating over (0-10)
          <input type="number" min="0" max="10" name="rated" value={rating} onChange={(e)=>setRating(e.target.value)} />
        </label>
        <label>
          Sort by
          <select name="sortby" onChange={(e)=>setSortby(e.target.value)} value={sortby}>
            <option value="name">Name</option>
            <option value="stars">Stars</option>
            <option value="rating">Rating</option>
          </select>
        </label>
        <label>
          <input type="radio" name="sortdir" value="asc" onClick={(e)=> setSortdir(e.target.value)}/>
          Ascending
        </label>
        <label>
          <input type="radio" name="sortdir" value="desc" onClick={(e)=> setSortdir(e.target.value)}/>
          Descending
        </label>
        <button type="submit">Go</button>
      </form>
      <label>
        current page: {page}
        <input type="button" value="to the previous page" onClick={previousPage} />
        <input type="button" value="to the next page" onClick={nextPage} />
      </label>

      {hotels.length && hotels.map((hotel, i) => <Hotel hotel={hotel} key={i} />)}

      {!hotels.length && <p>no hotels found</p>}
    </>
  );
}

export default App;
