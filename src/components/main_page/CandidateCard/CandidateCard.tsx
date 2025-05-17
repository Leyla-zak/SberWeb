// import React from "react";
// import styles from "./CandidateCard.module.css";
//
// interface BadgeProps {
//     text: string;
//     type: "part-time" | "full-time";
// }
//
// const Badge: React.FC<BadgeProps> = ({ text, type }) => {
//     return (
//         <span className={`${styles.badge} ${styles[type]}`}>
//             {text}
//         </span>
//     );
// };
//
// interface CandidateCardProps {
//     name: string;
//     position: string;
//     experience: string;
//     salary: string;
//     image: string;
//     badges: Array<{ text: string; type: "part-time" | "full-time" }>;
// }
//
// const CandidateCard: React.FC<CandidateCardProps> = ({
//                                                          name,
//                                                          position,
//                                                          experience,
//                                                          salary,
//                                                          image,
//                                                          badges,
//                                                      }) => {
//     return (
//         <article className={styles.candidateCard}>
//             <div className={styles.cardContent}>
//                 <div className={styles.badgesContainer}>
//                     {badges.map((badge, index) => (
//                         <Badge key={index} text={badge.text} type={badge.type} />
//                     ))}
//                 </div>
//                 <img
//                     src={image}
//                     className={styles.candidateImage}
//                     alt={name}
//                 />
//                 <div className={styles.candidateInfo}>
//                     <h3 className={styles.candidateName}>{name}</h3>
//                     <p className={styles.candidatePosition}>{position}</p>
//                 </div>
//                 <div className={styles.candidateDetails}>
//                     <div className={styles.detailItem}>
//                         <span>Опыт:</span>
//                         <span>{experience}</span>
//                     </div>
//                     <div className={styles.detailItem}>
//                         <span>Зарплата:</span>
//                         <span>{salary}</span>
//                     </div>
//                 </div>
//                 <button className={styles.viewButton}>
//                     Посмотреть справку
//                 </button>
//             </div>
//         </article>
//     );
// };
//
// export default CandidateCard;

import React from "react";

interface BadgeProps {
    text: string;
    type: "part-time" | "full-time";
}

const Badge: React.FC<BadgeProps> = ({ text, type }) => {
    const baseStyle = {
        alignSelf: 'stretch',
        padding: '4px 12px',
        borderRadius: '12px',
        fontWeight: 500,
        fontSize: '16px'
    };

    const typeStyles = {
        'part-time': {
            backgroundColor: '#FEF3C7',
            color: '#92400E'
        },
        'full-time': {
            backgroundColor: '#EDE9FE',
            color: '#5B21B6'
        }
    };

    return (
        <span style={{ ...baseStyle, ...typeStyles[type] }}>
            {text}
        </span>
    );
};

interface CandidateCardProps {
    name: string;
    position: string;
    experience: string;
    salary: string;
    image: string;
    badges: Array<{ text: string; type: "part-time" | "full-time" }>;
}

const CandidateCard: React.FC<CandidateCardProps> = ({
                                                         name,
                                                         position,
                                                         experience,
                                                         salary,
                                                         image,
                                                         badges,
                                                     }) => {
    return (
        <article style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '28px 40px',
            width: '260px',
            margin: '0 10px',
            backgroundColor: 'white',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
            flexShrink: 0
        }}>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '100%',
                maxWidth: '100%'
            }}>
                <div style={{
                    display: 'flex',
                    gap: '12px',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    fontSize: '16px',
                    lineHeight: 1,
                    textAlign: 'center',
                    whiteSpace: 'nowrap'
                }}>
                    {badges.map((badge, index) => (
                        <Badge key={index} text={badge.text} type={badge.type} />
                    ))}
                </div>
                <img
                    src={image}
                    style={{
                        objectFit: 'contain',
                        marginTop: '20px',
                        maxWidth: '100%',
                        aspectRatio: 1,
                        minHeight: '104px',
                        borderRadius: '102px',
                        width: '104px'
                    }}
                    alt={name}
                />
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    marginTop: '20px',
                    width: '100%',
                    textAlign: 'center'
                }}>
                    <h3 style={{
                        fontSize: '20px',
                        lineHeight: 1.2,
                        color: '#111827'
                    }}>{name}</h3>
                    <p style={{
                        alignSelf: 'center',
                        marginTop: '4px',
                        fontSize: '16px',
                        color: '#9CA3AF'
                    }}>{position}</p>
                </div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    marginTop: '20px',
                    fontSize: '16px',
                    lineHeight: 1.5
                }}>
                    <div style={{
                        display: 'flex',
                        gap: '8px',
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        color: '#111827'
                    }}>
                        <span>Опыт:</span>
                        <span>{experience}</span>
                    </div>
                    <div style={{
                        display: 'flex',
                        gap: '8px',
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        color: '#111827',
                        marginTop: '4px'
                    }}>
                        <span>Зарплата:</span>
                        <span>{salary}</span>
                    </div>
                </div>
                <button style={{
                    overflow: 'hidden',
                    alignSelf: 'stretch',
                    padding: '12px 32px',
                    marginTop: '20px',
                    fontSize: '18px',
                    lineHeight: 1,
                    color: '#111827',
                    backgroundColor: '#FDE68A',
                    borderRadius: '24px',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'background-color 0.2s'
                }} onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#FCD34D'}
                        onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#FDE68A'}>
                    Посмотреть справку
                </button>
            </div>
        </article>
    );
};

export default CandidateCard;