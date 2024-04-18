import { v4 as uuidv4 } from "uuid";

const albumsData = [
  {
    title: "The Slim Shady LP",
    artist: "Slim Shady",
    year: "1999",
    id: uuidv4(),
  },
  {
    title: "The Marshall Mathers LP",
    artist: "Marshall Mathers",
    year: "2000",
    id: uuidv4(),
  },
  {
    title: "The Eminem Show",
    artist: "Eminem",
    year: "2002",
    id: uuidv4(),
  },
];

export default albumsData;