'use client'
import React, {useState} from 'react';
import styles from './form.module.css';
const Form: React.FC = () => {
    const [author, setAuthor] = useState<string>('');
    const [word, setWord] = useState<string>('');
    const [description, setDescription] = useState<string>('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log('Автор:', author);
        console.log('Слово:', word);
        console.log('Значение:', description);
        // Здесь можно добавить логику отправки данных на сервер
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
        </form>
    );
};

export default Form;
