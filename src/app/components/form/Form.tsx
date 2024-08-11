'use client'
import React, {useState} from 'react';
import axios from 'axios';
import styles from './form.module.css';

const Form: React.FC = () => {
    const [author, setAuthor] = useState<string>('');
    const [word, setWord] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [responseMessage, setResponseMessage] = useState<string>('');

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/api/form/submit', {
                author,
                word,
                description
            });
            setResponseMessage(response.data);
            setAuthor('');
            setWord('');
            setDescription('');
        } catch (error) {
            setResponseMessage('Ошибка при отправке данных.');
            console.error('Ошибка:', error);
        }
    };

    return (
        <form className={styles.formContainer} onSubmit={handleSubmit}>
            <input
                type="text"
                className={styles.inputField}
                placeholder="Автор"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
            />
            <input
                type="text"
                className={styles.inputField}
                placeholder="Слово"
                value={word}
                onChange={(e) => setWord(e.target.value)}
            />
            <textarea
                className={styles.inputField}
                placeholder="Значение"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <button type="submit" className={styles.submitButton}>
                Отправить
            </button>
            {responseMessage && <p>{responseMessage}</p>}
        </form>
    );
};

export default Form;
