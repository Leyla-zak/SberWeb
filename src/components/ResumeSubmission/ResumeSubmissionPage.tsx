import React, { useState } from 'react';
import styles from './ResumeSubmissionPage.module.css';
import { useNavigate } from 'react-router-dom';

const ResumeSubmissionPage: React.FC = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [position, setPosition] = useState('');
    const [experience, setExperience] = useState('');
    const [skills, setSkills] = useState('');
    const [resumeText, setResumeText] = useState('');
    const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmissionStatus('idle');

        // Mock submission logic
        console.log({
            fullName,
            email,
            phone,
            position,
            experience,
            skills,
            resumeText,
        });

        // Simulate API call
        setTimeout(() => {
            setSubmissionStatus('success');
            // Optionally, clear form fields after success
            setFullName('');
            setEmail('');
            setPhone('');
            setPosition('');
            setExperience('');
            setSkills('');
            setResumeText('');
        }, 1500);
    };

    return (
        <div className={styles.container}>
            <h1>Попасть в базу</h1>
            <p className={styles.subtitle}>Заполните форму, и мы свяжемся с вами!</p>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formGroup}>
                    <label htmlFor="fullName">Полное имя:</label>
                    <input type="text" id="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)} required className={styles.input} />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required className={styles.input} />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="phone">Телефон:</label>
                    <input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} className={styles.input} />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="position">Желаемая должность:</label>
                    <input type="text" id="position" value={position} onChange={(e) => setPosition(e.target.value)} required className={styles.input} />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="experience">Опыт работы (лет):</label>
                    <input type="number" id="experience" value={experience} onChange={(e) => setExperience(e.target.value)} required className={styles.input} />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="skills">Ключевые навыки (через запятую):</label>
                    <input type="text" id="skills" value={skills} onChange={(e) => setSkills(e.target.value)} required className={styles.input} />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="resumeText">Краткое резюме (текст):</label>
                    <textarea id="resumeText" value={resumeText} onChange={(e) => setResumeText(e.target.value)} rows={5} className={styles.textarea} required></textarea>
                </div>
                
                <button type="submit" className={styles.submitButton}>Отправить анкету</button>

                {submissionStatus === 'success' && (
                    <div className={styles.successMessage}>
                        <p>Анкета успешно отправлена! Мы свяжемся с вами после проверки.</p>
                        <button onClick={() => navigate('/')} className={styles.backButton}>Вернуться на главную</button>
                    </div>
                )}
                {submissionStatus === 'error' && (
                    <div className={styles.errorMessage}>
                        <p>Произошла ошибка при отправке анкеты. Попробуйте еще раз.</p>
                    </div>
                )}
            </form>
        </div>
    );
};

export default ResumeSubmissionPage; 