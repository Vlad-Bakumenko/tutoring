// Task 5
import Article from "../models/Article.js";

export const showAllArticles = async (req,res) => {
    const allArticles = await Article.find();
    res.status(200).json(allArticles)
}

export const addArticle = async (req,res) => {
    try {
        const articleToAdd = await Article.create(req.body);
        res.status(200).send(`${articleToAdd.title} is added`)
    } catch (error) {
        console.log(error);
    }
}