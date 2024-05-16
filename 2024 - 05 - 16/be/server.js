import express from "express";
import mongoose from "mongoose";
import routes from "./routes/hotelRoute.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

/* Road map 
1. Basic preparations (npm i, .env file, faker library) ;
2. Add ownedBy property to hotelSchema ;
3. Complete seed.js ;
4. Update controller function so basing on the query we can send in the response required documents from database ;
5. Test in Thunder Client ;
6. Implement changes in backend to frontend ;
*/

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

app.listen(3001, () => {
  console.log("Server is listening to port 3001");
});
