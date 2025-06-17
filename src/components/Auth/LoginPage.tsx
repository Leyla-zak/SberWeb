import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Auth.module.css';

interface LoginPageProps {
    onLoginSuccess: (user: { email: string; name: string }) => void;
    onSwitchToRegister: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLoginSuccess, onSwitchToRegister }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setMessage('');

        const users = JSON.parse(localStorage.getItem('users') || '[]');
        const user = users.find((u: any) => u.email === email && u.password === password);

        if (user) {
            localStorage.setItem('currentUser', JSON.stringify(user));
            onLoginSuccess({ email: user.email, name: user.name || user.email });
        } else {
            setMessage('Неверный email или пароль.');
        }
    };

    return (
        <div className={styles.authContainer} style={{ minHeight: 'auto', padding: '0', backgroundColor: 'transparent', boxShadow: 'none' }}>
            <form onSubmit={handleLogin} className={styles.authForm}>
                <h2>Вход</h2>
                {message && <p className={styles.message}>{message}</p>}
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
                <button type="submit" className={styles.authButton}>Войти</button>
                <p className={styles.switchFormText}>Нет аккаунта? <button type="button" onClick={onSwitchToRegister} className={styles.switchButton}>Зарегистрироваться</button></p>
            </form>
        </div>
    );
};

export default LoginPage; 