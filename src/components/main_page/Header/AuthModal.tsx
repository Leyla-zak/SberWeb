import React, { useState } from 'react';
import styles from './AuthModal.module.css';
import LoginPage from '../../Auth/LoginPage';
import RegistrationPage from '../../Auth/RegistrationPage';

interface UserData {
    email: string;
    name: string;
}

interface AuthModalProps {
    onClose: () => void;
    initialForm: 'login' | 'register';
    onLoginSuccess: (user: UserData) => void;
    onRegisterSuccess: (user: UserData) => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ onClose, initialForm, onLoginSuccess, onRegisterSuccess }) => {
    const [currentForm, setCurrentForm] = useState<'login' | 'register'>(initialForm);

    const switchToRegister = () => setCurrentForm('register');
    const switchToLogin = () => setCurrentForm('login');

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <button className={styles.closeButton} onClick={onClose}>&times;</button>
                {currentForm === 'login' ? (
                    <LoginPage onLoginSuccess={onLoginSuccess} onSwitchToRegister={switchToRegister} />
                ) : (
                    <RegistrationPage onRegisterSuccess={onRegisterSuccess} onSwitchToLogin={switchToLogin} />
                )}
            </div>
        </div>
    );
};

export default AuthModal; 