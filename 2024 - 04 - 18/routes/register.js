import express from 'express';
import { checkInputs } from '../middleware/validation.js';
import { registerUser } from '../controllers/userController.js';

const router = express.Router();

router.post("/", checkInputs, registerUser);

export default router;