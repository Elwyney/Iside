const Article = require('../models/article');
const { v4: uuidv4 } = require('uuid');

const createArticle = async (req, res) => {
    const id = uuidv4();
    const { title, keywords, elements } = req.body
    const newArticle = new Article({ id, title, keywords, elements });
    await newArticle.save();
    res.status(201).json(newArticle);
};
const getListNews = async (req,res) => {
    try {
        const articles = await Article.find({});
        res.status(200).json(articles);
    } catch (error) {
        console.error('Ошибка при получении статей:', error);
        res.status(500).json({ message: 'Ошибка при получении статей' });
    }
}
module.exports = { createArticle, getListNews };
