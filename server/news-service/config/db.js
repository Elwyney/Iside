const mongoose = require('mongoose');

// Получаем строку подключения из переменных окружения
const dbURI = 'mongodb://localhost:27017/news';

// Функция для подключения к базе данных
const connectDB = async () => {
    try {
        await mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Подключено к MongoDB');
    } catch (err) {
        console.error('Ошибка подключения к MongoDB:', err);
        process.exit(1);  // Завершаем процесс, если не удается подключиться
    }
};

module.exports = connectDB;
