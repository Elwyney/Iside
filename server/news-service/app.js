const express = require('express');
const connectDB = require('./config/db'); // Подключение к базе данных
const { createArticle } = require('./controllers/articleController');
const articleRoutes = require('./routes/articleRoutes')
const bodyParser = require('body-parser');
const cors = require('cors')

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.json()); // Для обработки JSON данных в теле запроса
connectDB()
app.use('/api/list', articleRoutes)
app.listen(7000, () => {
    console.log(`Сервер работает на порту `);
});