import express from "express";
import mongoose from "mongoose";
import Album from "./Model/Album.js";
import cors from "cors";
import { upload } from "./storage/storage.js";

// Multer is a node.js middleware for handling multipart/form-data, which is primarily used for uploading files

// Multer adds a body object and a file or files object to the request object. The body object contains the values of the text fields of the form, the file or files object contains the files uploaded via the form

//? https://www.npmjs.com/package/multer

const app = express();

app.use(express.json());
app.use(cors());

//* Store your own MongoDB connection string in .env file!
try {
  await mongoose.connect(process.env.MONGODB_CONNECTION_STRING);
  console.log("Database is connected! 🐱");
} catch (error) {
  console.log(error.message);
  console.log("Database connection failed... :(");
}


//* Default route to get all albums
app.get("/", async (req, res) => {
  const albums = await Album.find();
  res.status(200).json(albums);
});

//* Post route to add an album
app.post("/add", upload.single("jacket"), async (req, res, next)=> {
  // Syntax #1
  // const {artist, year, title} = req.body;
  try {
    // let newAlbum = new Album({artist, year, title});
    // newAlbum.jacket = req.file.filename;
    // await newAlbum.save();

    // Syntax #2
    // const newAlbum = await Album.create({artist,year,title,jacket:req.file.filename});

    // Syntax #3
    const newAlbum = await Album.create({...req.body, jacket:req.file.filename});
    res.status(200).json(newAlbum);
  } catch (error) {
    next(error);
  }
})

//* Delete route to delete an album

app.delete("/:id", async (req,res,next)=>{
  const {id} = req.params;
  let albumToDelete;
  try {
    albumToDelete = await Album.findById(id);
  } catch (error) {
    return next(error);
  }
  if (albumToDelete) {
    albumToDelete = await Album.findByIdAndDelete(id);
    res.send(`${albumToDelete.title} is deleted`);
  } else {
    next({message:"Such album doesn't exist"})
  }
})

//* Patch route to update an album jacket
app.patch("/:id", upload.single("jacket"), async (req,res,next)=> {
  const {id} = req.params;
  let albumToUpdate;
  try {
    albumToUpdate = await Album.findById(id);
  } catch (error) {
    return next(error);
  }

  if (albumToUpdate) {
    albumToUpdate = await Album.findByIdAndUpdate(id, {jacket:req.file.filename}, {new:true});
    res.status(200).json(albumToUpdate);
  } else {
    next({message: "Such album doesn't exist"})
  }
})

//* Global Error Handling
app.use(function errorHandler(err, req, res, next) {
  console.log("error handler is running...");
  res.status(err.status || 400).send({
    error: {
      message: err.message,
      status: err.status,
    },
  });
});

app.listen(3002, () => {
  console.log("Server is listening to port 3002");
});
