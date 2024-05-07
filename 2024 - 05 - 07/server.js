// Task 1
import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/userRoute.js";
import articleRouter from "./routes/articleRoute.js";
const app = express();

app.use(express.json());

try {
    await mongoose.connect(process.env.MONGODB_CONNECTION_STRING);
    console.log("Database is connected");
} catch (error) {
    console.log(error.message);
    console.log("Database connection failed");
}

app.use("/users", userRouter);
app.use("/articles", articleRouter)

app.listen(5000, ()=>{
    console.log('server is listening to port 5000');
})