'use server'
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import formRoutes from './routes/formRoutes.js';

const app = express();
const PORT = 5000;

// Подключение к MongoDB
mongoose.connect('mongodb://localhost:27017/formdb', {
    // useNewUrlParser: true,
    // useUnifiedTopology: true
}).then(() => {
    console.log('Подключение к MongoDB успешно!');
}).catch((error) => {
    console.error('Ошибка подключения к MongoDB:', error);
});

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Маршруты
app.use('/api/form', formRoutes);

app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
});
