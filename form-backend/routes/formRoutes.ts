import express from 'express';
import FormData from '../models/FormData';

const router = express.Router();

router.post('/submit', async (req, res) => {
    try {
        const { author, word, description } = req.body;
        const newFormData = new FormData({ author, word, description });
        await newFormData.save();
        res.status(200).send('Данные успешно сохранены!');
    } catch (error) {
        res.status(500).send('Ошибка при сохранении данных.');
    }
});

export default router;

