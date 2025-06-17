// import React from "react";
// import "./SubscriptionSection.module.css";
//
// const SubscriptionSection: React.FC = () => {
//     return (
//         <section className="subscription-section">
//             <div className="subscription-container">
//                 <div className="subscription-image-wrapper">
//                     <img
//                         src="https://cdn.builder.io/api/v1/image/assets/TEMP/9d7cb2c25af6e06baccab0ca2ac7328e72ba22dd?placeholderIfAbsent=true&apiKey=26b706e6e9b243c3a40d02522978a4d9"
//                         className="subscription-image"
//                         alt="Subscription illustration"
//                     />
//                 </div>
//                 <div className="subscription-form-wrapper">
//                     <div className="subscription-form-container">
//                         <div className="form-content">
//                             <div className="form-header">
//                                 <h2 className="form-title">Подписаться на обновления базы</h2>
//                                 <p className="form-description">
//                                     Мы будет присылать вам информацию каждую неделю,
//                                     <br /> по каким сферам у нас появились кандидаты.
//                                 </p>
//                             </div>
//                             <form className="subscription-form">
//                                 <input
//                                     type="text"
//                                     placeholder="Ваше имя"
//                                     className="form-input"
//                                 />
//                                 <input
//                                     type="email"
//                                     placeholder="Email"
//                                     className="form-input"
//                                 />
//                                 <input
//                                     type="tel"
//                                     placeholder="Номер телефона"
//                                     className="form-input"
//                                 />
//                                 <button
//                                     type="submit"
//                                     className="submit-button"
//                                 >
//                                     Подписаться
//                                 </button>
//                             </form>
//                         </div>
//                         <div className="form-divider" />
//                         <div className="form-footer">
//                             <p>
//                                 Отправка данной формы означает согласие с{" "}
//                                 <span className="footer-link">Пользовательским соглашением</span> и{" "}
//                                 <span className="footer-link">Политикой конфиденциальности</span>
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };
//
// export default SubscriptionSection;

import React, { useState } from "react";
import Subscr from "../../../pages/Subscr.png"
import { Link } from "react-router-dom";

const SubscriptionSection: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmissionStatus('idle');

        // Mock submission logic
        console.log({
            name,
            email,
            phone,
        });

        // Simulate API call
        setTimeout(() => {
            setSubmissionStatus('success');
            // Optionally, clear form fields after success
            setName('');
            setEmail('');
            setPhone('');
        }, 1500);
    };

    return (
        <section style={{
            width: '1504px',
            margin: '0 auto',
            maxWidth: '100%',
            padding: '0 20px',
            boxSizing: 'border-box'
        }}>
            <div style={{
                display: 'flex',
                // gap: '10px',
                flexDirection: window.innerWidth <= 768 ? 'column' : 'row'
            }}>
                <div style={{
                    width: window.innerWidth <= 768 ? '100%' : '43%'
                }}>
                    <img
                        src={Subscr}
                        style={{
                            objectFit: 'contain',
                            width: '90%',
                            aspectRatio: '1.04'
                        }}
                        alt="Subscription illustration"
                    />
                </div>


                <div style={{
                    width: window.innerWidth <= 768 ? '100%' : '57%',
                    marginLeft: window.innerWidth <= 768 ? '0' : '20px'
                }}>
                    <div style={{
                        overflow: 'hidden',
                        width: '100%',
                        backgroundColor: 'white',
                        borderRadius: '16px'
                    }}>

                        <div style={{
                            padding: window.innerWidth <= 768 ? '20px' : '32px 60px 44px',

                            backgroundColor: 'white'
                        }}>
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                width: '100%',
                                textAlign: 'center',
                                color: '#111827'
                            }}>
                                <h2 style={{
                                    alignSelf: 'center',
                                    fontSize: window.innerWidth <= 768 ? '20px' : '24px',
                                    lineHeight: 1,
                                    color: '#111827'
                                }}>
                                    Подписаться на обновления базы
                                </h2>
                                <p style={{
                                    marginTop: '8px',
                                    fontSize: window.innerWidth <= 768 ? '16px' : '20px',
                                    lineHeight: window.innerWidth <= 768 ? '24px' : '32px',
                                    color: '#111827'
                                }}>
                                    Мы будет присылать вам информацию каждую неделю,
                                    <br /> по каким сферам у нас появились кандидаты.
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} style={{
                                marginTop: '32px',
                                width: '100%',
                                fontSize: '14px',
                                lineHeight: 1,
                                color: '#6B7280'
                            }}>
                                <input
                                    type="text"
                                    placeholder="Ваше имя"
                                    style={inputStyle}
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                                <input
                                    type="email"
                                    placeholder="Email"
                                    style={{ ...inputStyle, marginTop: '20px' }}
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <input
                                    type="tel"
                                    placeholder="Номер телефона"
                                    style={{ ...inputStyle, marginTop: '20px' }}
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                                <button
                                    type="submit"
                                    style={{
                                        overflow: 'hidden',
                                        alignSelf: 'stretch',
                                        padding: '12px 28px',
                                        marginTop: '32px',
                                        width: '105%',
                                        fontSize: '18px',
                                        lineHeight: 1,
                                        color: 'black',
                                        whiteSpace: 'nowrap',
                                        backgroundColor: '#FDE68A',
                                        borderRadius: '24px',
                                        minHeight: '48px',
                                        border: 'none',
                                        cursor: 'pointer',
                                        transition: 'background-color 0.2s'
                                    }}
                                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#FCD34D'}
                                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#FDE68A'}
                                >
                                    Подписаться
                                </button>

                                {submissionStatus === 'success' && (
                                    <div style={{
                                        marginTop: '20px',
                                        padding: '12px 20px',
                                        backgroundColor: '#D1FAE5',
                                        color: '#065F46',
                                        borderRadius: '8px',
                                        textAlign: 'center',
                                        fontSize: '16px'
                                    }}>
                                        Успешно! Спасибо за подписку.
                                    </div>
                                )}
                                {submissionStatus === 'error' && (
                                    <div style={{
                                        marginTop: '20px',
                                        padding: '12px 20px',
                                        backgroundColor: '#FEE2E2',
                                        color: '#991B1B',
                                        borderRadius: '8px',
                                        textAlign: 'center',
                                        fontSize: '16px'
                                    }}>
                                        Произошла ошибка при отправке формы. Попробуйте еще раз.
                                    </div>
                                )}
                            </form>
                        </div>

                        {/* Разделитель и футер */}
                        <div style={{
                            width: '100%',
                            backgroundColor: '#E5E7EB',
                            minHeight: '2px'
                        }} />
                        <div style={{
                            padding: '24px 40px',
                            width: '100%',
                            fontSize: '12px',
                            lineHeight: 1.5,
                            color: '#6B7280',
                            backgroundColor: '#F9FAFB'
                        }}>
                            <p>
                                Отправка данной формы означает согласие с{' '}
                                <Link to="/terms-of-service" style={{ color: '#111827', cursor: 'pointer', textDecoration: 'none' }}>Пользовательским соглашением</Link> и{' '}
                                <Link to="/privacy-policy" style={{ color: '#111827', cursor: 'pointer', textDecoration: 'none' }}>Политикой конфиденциальности</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};


const inputStyle = {
    overflow: 'hidden',
    alignSelf: 'stretch',
    padding: '12px 20px',
    maxWidth: '100%',
    width: '100%',
    color: '#6B7280',
    backgroundColor: 'white',
    borderRadius: '24px',
    border: '1px solid #D1D5DB',
    boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    fontSize: '14px'
};

export default SubscriptionSection;