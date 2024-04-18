import express from 'express';
import { checkLoggedInUser } from '../middleware/validation.js';
import { loginUser } from '../controllers/userController.js';

const router = express.Router();

router.post("/", checkLoggedInUser, loginUser );

export default router;