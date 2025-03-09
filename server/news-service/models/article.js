const mongoose = require('mongoose');

// Схема для элемента в статье
const elementSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ['header', 'paragraph', 'image', 'quote'],
        required: true
    },
    data: {
        type: mongoose.Schema.Types.Mixed,
        required: true
    }
});
const articleSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true
    },
    keywords: {
        type: [String],
        required: true
    },
    elements: [elementSchema],
});

// Создание модели на основе схемы
const Article = mongoose.model('news', articleSchema);

module.exports = Article;
