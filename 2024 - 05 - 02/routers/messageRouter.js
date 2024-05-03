import express from 'express';
import { getMessages, addMessage,getMsgById } from '../controllers/messageControllers.js';
const router = express.Router();

// on the path "/message" for GET request execute getMessages function and for post requests on same("/message") path execute addMessage function
router.route("/").get(getMessages).post(addMessage);
router.route("/:id").get(getMsgById);

//? __v

// __v is the versionKey property set on each document when first created by Mongoose. Its value contains the internal revision of the document. 

export default router;