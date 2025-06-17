import React from 'react';
import { Link } from 'react-router-dom';
import styles from './AuthDropdown.module.css';

interface AuthDropdownProps {
    onClose: () => void;
    currentUser: string | null;
    onLogout: () => void;
}

const AuthDropdown: React.FC<AuthDropdownProps> = ({ onClose, currentUser, onLogout }) => {
    return (
        <div className={styles.authDropdown}>
            {currentUser ? (
                <button onClick={onLogout} className={styles.menuItem}>Выйти</button>
            ) : (
                <>
                    <Link to="/register" className={styles.menuItem} onClick={onClose}>Регистрация</Link>
                    <Link to="/login" className={styles.menuItem} onClick={onClose}>Войти</Link>
                </>
            )}
        </div>
    );
};

export default AuthDropdown; 