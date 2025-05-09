import React from "react";
import "./SubscriptionSection.module.css"; // Импортируем CSS файл

const SubscriptionSection: React.FC = () => {
    return (
        <section className="subscription-section">
            <div className="subscription-container">
                <div className="subscription-image-wrapper">
                    <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/9d7cb2c25af6e06baccab0ca2ac7328e72ba22dd?placeholderIfAbsent=true&apiKey=26b706e6e9b243c3a40d02522978a4d9"
                        className="subscription-image"
                        alt="Subscription illustration"
                    />
                </div>
                <div className="subscription-form-wrapper">
                    <div className="subscription-form-container">
                        <div className="form-content">
                            <div className="form-header">
                                <h2 className="form-title">Подписаться на обновления базы</h2>
                                <p className="form-description">
                                    Мы будет присылать вам информацию каждую неделю,
                                    <br /> по каким сферам у нас появились кандидаты.
                                </p>
                            </div>
                            <form className="subscription-form">
                                <input
                                    type="text"
                                    placeholder="Ваше имя"
                                    className="form-input"
                                />
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="form-input"
                                />
                                <input
                                    type="tel"
                                    placeholder="Номер телефона"
                                    className="form-input"
                                />
                                <button
                                    type="submit"
                                    className="submit-button"
                                >
                                    Подписаться
                                </button>
                            </form>
                        </div>
                        <div className="form-divider" />
                        <div className="form-footer">
                            <p>
                                Отправка данной формы означает согласие с{" "}
                                <span className="footer-link">Пользовательским соглашением</span> и{" "}
                                <span className="footer-link">Политикой конфиденциальности</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SubscriptionSection;