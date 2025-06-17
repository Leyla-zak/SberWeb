import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Auth.module.css';

interface RegistrationPageProps {
    onRegisterSuccess: (user: { email: string; name: string }) => void;
    onSwitchToLogin: () => void;
}

const RegistrationPage: React.FC<RegistrationPageProps> = ({ onRegisterSuccess, onSwitchToLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [userName, setUserName] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleRegister = (e: React.FormEvent) => {
        e.preventDefault();
        setMessage('');

        if (password !== confirmPassword) {
            setMessage('Пароли не совпадают!');
            return;
        }

        // Mock registration logic
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        const userExists = users.some((user: any) => user.email === email);

        if (userExists) {
            setMessage('Пользователь с таким email уже существует!');
        } else {
            users.push({ email, password, name: userName });
            localStorage.setItem('users', JSON.stringify(users));
            onRegisterSuccess({ email: email, name: userName });
        }
    };

    return (
        <div className={styles.authContainer} style={{ minHeight: 'auto', padding: '0', backgroundColor: 'transparent', boxShadow: 'none' }}>
            <form onSubmit={handleRegister} className={styles.authForm}>
                <h2>Регистрация</h2>
                {message && <p className={styles.message}>{message}</p>}
                <div className={styles.formGroup}>
                    <label htmlFor="userName">Имя:</label>
                    <input
                        type="text"
                        id="userName"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        required
                        className={styles.authInput}
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className={styles.authInput}
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="password">Пароль:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className={styles.authInput}
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="confirmPassword">Подтвердите пароль:</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                        className={styles.authInput}
                    />
                </div>
                <button type="submit" className={styles.authButton}>Зарегистрироваться</button>
                <p className={styles.switchFormText}>Уже есть аккаунт? <button type="button" onClick={onSwitchToLogin} className={styles.switchButton}>Войти</button></p>
            </form>
        </div>
    );
};

export default RegistrationPage; 