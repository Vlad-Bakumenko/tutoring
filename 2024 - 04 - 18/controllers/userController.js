import usersData from "../data/usersData.js";
import { v4 as uuidv4 } from "uuid";

// Task 1

// Controller for registering user
export const registerUser = (req, res) => {
    const { email, password } = req.body;
    const newUser = {
        email:email,
        password:password,
        id:uuidv4()
    }
    usersData.push(newUser);
    res.json(newUser);
}

// Controller for logging user
export const loginUser = (req, res) => {
    const { email, password } = req.body;
    const loggedInUser = usersData.find(user=> user.email === email && user.password === password);
    res.json(loggedInUser);
}