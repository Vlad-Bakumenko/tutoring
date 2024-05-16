import mongoose from "mongoose";
import Hotel from "./models/Hotel.js";
import Owner from "./models/Owner.js";
import { faker } from "@faker-js/faker";

//* IIFE - immediately invoked function expression
(async function () {
  //* CONNECT TO DB
  try {
    await mongoose.connect(process.env.MONGODB_CONNECTION_STRING);
    console.log("Database is connected! 🐱");
  } catch (error) {
    console.log(error.message);
    console.log("Database connection failed... :(");
  }

  //* DELETE ALL OWNERS

  //* DELETE ALL HOTELS

  //* CREATE 10 RANDOM OWNERS
  
  //* CREATE 100 RANDOM HOTELS
  
  //* UPDATE HOTELS WITH ROOMS



  //* SHUT DOWN THE CONNECTION TO DB
  mongoose.connection.close();
})();
