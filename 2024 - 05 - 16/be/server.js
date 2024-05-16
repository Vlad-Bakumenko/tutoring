import express from "express";
import mongoose from "mongoose";
import routes from "./routes/hotelRoute.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

try {
  await mongoose.connect(process.env.MONGODB_CONNECTION_STRING);
  console.log("Database is connected! 🐱");
} catch (error) {
  console.log(error.message);
  console.log("Database connection failed... :(");
}

app.use("/hotels", routes);

//* Global Error Handling
app.use(function errorHandler(err, req, res, next) {
  console.log("error handler is running...")
  res.status(err.status || 400).send({
      error: {
          message: err.message,
          status: err.status
      }
  })
})

app.listen(3001, (req, res) => {
  console.log("Server is listening to port 3001");
});
