// Task 5
import { Router } from "express";
import { showAllArticles,addArticle } from "../controllers/articleController.js";

const router = Router();

router.route("/").get(showAllArticles).post(addArticle);

export default router;