import express from 'express';
import { showAlbums, showAlbum, addAlbum, deleteAlbum } from '../controllers/albumsController.js';
import { checkExistAlbum, checkAlbumInputs } from '../middleware/validation.js';

const router = express.Router();

router.get("/", showAlbums);

router.get("/:id", checkExistAlbum, showAlbum);

router.post("/", checkAlbumInputs, addAlbum);

router.delete("/:id", checkExistAlbum, deleteAlbum);

export default router;