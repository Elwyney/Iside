const express = require('express');
const router = express.Router();
const { createArticle, getListNews } = require('../controllers/articleController');

// Создание новой статьи
router.post('/get', createArticle);
router.get('/list', getListNews);

module.exports = router;
