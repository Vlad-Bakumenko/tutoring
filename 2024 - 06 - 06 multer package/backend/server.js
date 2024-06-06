import express from "express";
import mongoose from "mongoose";
import Album from "./Model/Album.js";
import cors from "cors";

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

//* Delete route to delete an album

//* Patch route to update an album jacket


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
