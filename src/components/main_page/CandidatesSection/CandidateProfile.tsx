import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { candidatesData, Candidate } from './SearchCandidates';
import styles from './CandidateProfile.module.css';

const CandidateProfile: React.FC = () => {
    const { id } = useParams();
    const [showContactForm, setShowContactForm] = useState(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [contactInfo, setContactInfo] = useState({
        name: '',
        company: '',
        email: '',
        phone: '',
        message: ''
    });

    const candidate = candidatesData.find((c: Candidate) => c.id === Number(id));
    if (!candidate) return <div style={{padding: 40}}>Кандидат не найден</div>;

    const handleContactSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Здесь будет логика отправки формы
        console.log('Contact form submitted:', contactInfo);
        setShowContactForm(false);
        setShowSuccessMessage(true);
        setContactInfo({
            name: '',
            company: '',
            email: '',
            phone: '',
            message: ''
        });
    };

    return (
        <div className={styles.profilePage}>
            <div className={styles.headerCard}>
                <img src={candidate.photo} alt={candidate.name} className={styles.avatar} />
                <div className={styles.headerInfo}>
                    <div className={styles.headerTop}>
                        <span className={styles.name}>{candidate.name}</span>
                        <span className={styles.position}>{candidate.position}</span>
                        {candidate.type.map((t: string) => (
                            <span key={t} className={styles.typeTag}>{t}</span>
                        ))}
                    </div>
                    <div className={styles.location}>📍 {candidate.location}</div>
                    <div className={styles.status}>Зарплатные ожидания: {candidate.salary.toLocaleString()} ₽</div>
                    <button 
                        className={styles.contactBtn}
                        onClick={() => setShowContactForm(true)}
                    >
                        Обсудить сотрудничество
                    </button>
                </div>
            </div>
            <div className={styles.card}>
                <b>Опыт:</b> {candidate.experience}
            </div>
            <div className={styles.card}>
                <b>Навыки:</b> {candidate.skills.join(', ')}
            </div>

            {showContactForm && (
                <div className={styles.modalOverlay}>
                    <div className={styles.modalContent}>
                        <button 
                            className={styles.closeButton}
                            onClick={() => setShowContactForm(false)}
                        >
                            ×
                        </button>
                        <h2>Обсудить сотрудничество с {candidate.name}</h2>
                        <form onSubmit={handleContactSubmit} className={styles.contactForm}>
                            <div className={styles.formGroup}>
                                <label htmlFor="name">Ваше имя</label>
                                <input
                                    type="text"
                                    id="name"
                                    value={contactInfo.name}
                                    onChange={(e) => setContactInfo({...contactInfo, name: e.target.value})}
                                    required
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="company">Компания</label>
                                <input
                                    type="text"
                                    id="company"
                                    value={contactInfo.company}
                                    onChange={(e) => setContactInfo({...contactInfo, company: e.target.value})}
                                    required
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={contactInfo.email}
                                    onChange={(e) => setContactInfo({...contactInfo, email: e.target.value})}
                                    required
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="phone">Телефон</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    value={contactInfo.phone}
                                    onChange={(e) => setContactInfo({...contactInfo, phone: e.target.value})}
                                    required
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="message">Сообщение</label>
                                <textarea
                                    id="message"
                                    value={contactInfo.message}
                                    onChange={(e) => setContactInfo({...contactInfo, message: e.target.value})}
                                    required
                                />
                            </div>
                            <button type="submit" className={styles.submitButton}>
                                Отправить
                            </button>
                        </form>
                    </div>
                </div>
            )}

            {showSuccessMessage && (
                <div className={styles.modalOverlay}>
                    <div className={styles.modalContent}>
                        <button 
                            className={styles.closeButton}
                            onClick={() => setShowSuccessMessage(false)}
                        >
                            ×
                        </button>
                        <div className={styles.successMessage}>
                            <h2>Спасибо!</h2>
                            <p>Мы получили ваш запрос и скоро свяжемся с вами.</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CandidateProfile; 