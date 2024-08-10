'use client'
import React, {useState} from 'react';
import styles from './form.module.css';
const Form: React.FC = () => {
    const [author, setName] = useState<string>('');
    const [word, setEmail] = useState<string>('');
    const [description, setMessage] = useState<string>('');

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
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="email"
                className={styles.inputField}
                placeholder="Слово"
                value={word}
                onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
                className={styles.inputField}
                placeholder="Значение"
                value={description}
                onChange={(e) => setMessage(e.target.value)}
            />
            <button type="submit" className={styles.submitButton}>
                Отправить
            </button>
        </form>
    );
};

export default Form;
