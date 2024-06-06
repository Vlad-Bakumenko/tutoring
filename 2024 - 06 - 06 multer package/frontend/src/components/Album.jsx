import { useState } from "react";

const Album = ({
  album,
  handleDeleteAlbum,
  jacket,
  setJacket,
  handleGetAlbums,
}) => {
  const [isClicked, setIsClicked] = useState(false);
  async function handleChangeAlbumPicture(id) {
    try {
      const formData = new FormData();
      formData.append("jacket", jacket);
      const response = await fetch(`http://localhost:3002/${id}`, {
        method: "PATCH",
        body: formData,
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        alert("Album picture updated");
        handleGetAlbums(); // after updating Document in collection, GET updated collection
        setIsClicked(!isClicked);
      } else throw new Error("File is not valid");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div
      style={{
        width: "15rem",
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "center",
        border: "solid 2px white",
        gap: "1rem",
        marginRight: "2rem",
        marginTop: "5rem",
      }}
    >
        {/* conditional rendering based on state variable "isClicked" */}
      {!isClicked && (
        <div style={{display:"flex", flexDirection:"column", alignItems:"center", gap:"10px"}}>
          <img src={album.jacket} width="200" height="200" alt="" />
          <button onClick={() => setIsClicked(!isClicked)}>Change Image</button>
        </div>
      )}
      {isClicked && (
        <div>
          <input
            type="file"
            placeholder="upload image"
            accept="image/*"
            onChange={(e) => setJacket(e.target.files[0])}
          />
          <button onClick={() => handleChangeAlbumPicture(album._id)}>
            Update
          </button>
          <button onClick={() => setIsClicked(false)}>Back</button>
        </div>
      )}
      <p>{album.artist}</p>
      <p>{album.title}</p>
      <p>{album.year}</p>
      <button onClick={() => handleDeleteAlbum(album._id)}>X</button>
    </div>
  );
};

export default Album;
