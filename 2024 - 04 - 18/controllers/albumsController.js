import albumsData from "../data/albumsData.js";
import { v4 as uuidv4 } from "uuid";

// Task 2 - Controllers for Albums

// show all albums
export const showAlbums = (req, res) => {
    res.json(albumsData);
}

// show specific album by its id
export const showAlbum = (req, res) => {
    const necessaryAlbum = albumsData.find(album => album.id === req.params.id);
    res.json(necessaryAlbum);
}

// add album
export const addAlbum = (req, res) => {
    const { title, artist, year } = req.body;
    const newAlbum = {
        title:title,
        artist:artist,
        year:year,
        id:uuidv4()
    }
    albumsData.push(newAlbum);
    res.json(newAlbum);
}

// Bonus Task - delete specific album

export const deleteAlbum = (req,res) => {
    const albumToDelete = albumsData.find(album=>album.id === req.params.id);
    const indexOfItemToDelete = albumsData.indexOf(albumToDelete);
    albumsData.splice(indexOfItemToDelete, 1);
    res.json(albumsData);
}