import React from 'react';
import styles from './AboutPage.module.css';

const AboutPage: React.FC = () => {
    return (
        <div className={styles.aboutPage}>
            <section className={styles.heroSection}>
                <h1 className={styles.title}>О сервисе ЛИЦА.Кандидаты</h1>
                <p className={styles.subtitle}>
                    Мы помогаем компаниям находить проверенных специалистов, а кандидатам — получать интересные предложения
                </p>
            </section>

            <section className={styles.featuresSection}>
                <div className={styles.featureCard}>
                    <h2>Наша миссия</h2>
                    <p>
                        Создать эффективную платформу для поиска работы, где каждый кандидат проходит тщательную проверку, 
                        а работодатели получают доступ к базе квалифицированных специалистов.
                    </p>
                </div>

                <div className={styles.featureCard}>
                    <h2>Как это работает</h2>
                    <ul>
                        <li>Кандидаты проходят предварительное собеседование</li>
                        <li>Мы проверяем профессиональные навыки и опыт</li>
                        <li>Работодатели получают доступ к проверенным резюме</li>
                        <li>Быстрый процесс найма без лишних этапов</li>
                    </ul>
                </div>

                <div className={styles.featureCard}>
                    <h2>Преимущества</h2>
                    <ul>
                        <li>Экономия времени на поиск и проверку кандидатов</li>
                        <li>Гарантия качества найма</li>
                        <li>Прозрачность процесса</li>
                        <li>Персональный подход к каждому клиенту</li>
                    </ul>
                </div>
            </section>

            <section className={styles.statsSection}>
                <div className={styles.statCard}>
                    <h3>1000+</h3>
                    <p>Проверенных кандидатов</p>
                </div>
                <div className={styles.statCard}>
                    <h3>500+</h3>
                    <p>Компаний-партнеров</p>
                </div>
                <div className={styles.statCard}>
                    <h3>95%</h3>
                    <p>Успешных наймов</p>
                </div>
            </section>

            <section className={styles.contactSection}>
                <h2>Свяжитесь с нами</h2>
                <p>Если у вас есть вопросы или предложения, мы всегда на связи</p>
                <div className={styles.contactInfo}>
                    <div className={styles.contactItem}>
                        <h3>Email</h3>
                        <p>info@licakandidaty.ru</p>
                    </div>
                    <div className={styles.contactItem}>
                        <h3>Телефон</h3>
                        <p>+7 (999) 123-45-67</p>
                    </div>
                    <div className={styles.contactItem}>
                        <h3>Адрес</h3>
                        <p>г. Москва, ул. Примерная, д. 1</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage; 