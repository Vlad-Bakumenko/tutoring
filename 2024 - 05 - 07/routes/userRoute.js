// Task 4
import { Router } from "express";
// import express from "express"
import { showAllUsers, addUser } from "../controllers/userController.js";

const router = Router(); // const router = express.Router()

router.route("/").get(showAllUsers).post(addUser)

export default router;