import "./App.css";
import { useState,useRef,useEffect } from "react";
import Album from "./components/Album";

function App() {

  const [albums, setAlbums] = useState([]);
  const [artist, setArtist] = useState("");
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [jacket, setJacket] = useState("");
  const inputForFile = useRef(null);

  useEffect(() => {
    handleGetAlbums();
  }, [])

  async function handleGetAlbums() {
    try {
      const response = await fetch("http://localhost:3002/");
      if (response.ok) {
        const data = await response.json();
        setAlbums(data);
      }
    } catch (error) {
      console.log(error.message);
    }
  }
  
  async function handleAddAlbum(e) {
    e.preventDefault();
    const formData = new FormData();
    // console.log(formData);
    formData.append("artist", artist);
    formData.append("title", title);
    formData.append("year", year);
    formData.append("jacket", jacket);
    setArtist("");
    setYear("");
    setTitle("");
    inputForFile.current.value = "";
    
    try {
      const response = await fetch("http://localhost:3002/add", {
        method:"POST",
        body: formData
      })
      if (response.ok) {
        // handleGetAlbums(); - after creating new Document in collection, GET updated collection
        const data = await response.json();
        setAlbums([...albums, data]); // updating state variable, so adding new Component on page
      } else throw new Error("Something wrong...")
    } catch (error) {
      console.log(error);
    }
  }

  async function handleDeleteAlbum(id) {
    try {
      const response = await fetch(`http://localhost:3002/${id}`, {
        method:"DELETE"
      });
      if (response.ok) {
        const data = await response.text();
        alert(data);
        handleGetAlbums(); // after deleting Document in collection, GET updated collection
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <h1>My Favorites</h1>
      <form onSubmit={handleAddAlbum}>
        <input
          type="text"
          placeholder="artist"
          value={artist}
          onChange={(e)=>setArtist(e.target.value)}
        />
        <input
          type="text"
          placeholder="title"
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="year"
          value={year}
          onChange={(e)=>setYear(e.target.value)}
        />
        <input
          type="file"
          placeholder="upload image"
          accept="image/*"
          onChange={(e)=>setJacket(e.target.files[0])}
          ref={inputForFile}
        />
        <button>Add</button>
      </form>
      {albums.map(album => <Album key={album._id} album={album} handleDeleteAlbum={handleDeleteAlbum} jacket={jacket} setJacket={setJacket} handleGetAlbums={handleGetAlbums}/> )}
    </>
  );
}

export default App;
