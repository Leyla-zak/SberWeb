import React from "react";
import CandidateCard from "../CandidateCard/CandidateCard";
import styles from "./CandidatesSection.module.css"
import CandOne from "../../../pages/Candidates/Cand1.png"
import Cand2 from "../../../pages/Candidates/Cand2.png"
import Cand3 from "../../../pages/Candidates/Cand3.png"
import Cand4 from "../../../pages/Candidates/Cand4.png"

const CandidatesSection: React.FC = () => {
    const candidates = [
        {
            name: "Тео Джеймс",
            position: "Мой муж",
            experience: "более 13 лет",
            salary: "от 200 тыс. ₽",
            image: CandOne,
            badges: [
                { text: "part-time", type: "part-time" as const },
                { text: "full-time", type: "full-time" as const },
            ],
        },
        {
            name: "Екатерина Мизуллина",
            position: "Аналитик",
            experience: "более 13 лет",
            salary: "от 150 тыс. ₽",
            image: Cand2,
            badges: [{ text: "full-time", type: "full-time" as const }],
        },
        {
            name: "Райан Госуслуг",
            position: "Брендмейкер",
            experience: "более 10 лет",
            salary: "от 100 тыс. ₽",
            image: Cand3,
            badges: [
                { text: "part-time", type: "part-time" as const },
                { text: "full-time", type: "full-time" as const },
            ],
        },
        {
            name: "Павел Дуров",
            position: "Директор по развитию бизнеса",
            experience: "более 20 лет",
            salary: "от 150 тыс. ₽",
            image: Cand4,
            badges: [{ text: "full-time", type: "full-time" as const }],
        },
    ];

    // return (
    //     <section style={{     width: '1504px',
    //         padding: '0 20px',
    //         margin:' 0 auto',
    //         overflow: 'hidden', }}>
    //
    //         <h2 className={styles.sectionTitle}>Как выглядит база кандидатов</h2>
    //         <div className={styles.candidatesScrollContainer}>
    //             {/*<div className={styles.candidatesList}/>*/}
    //             <div style={{
    //                 display: 'flex',
    //                 gap: '20px',
    //                 width: 'max-content',
    //             }}>
    //                 {candidates.map((candidate, index) => (
    //                     <div key={index} style={{ flex: '0 0 auto', width: '300px' }}>
    //
    //                         <CandidateCard {...candidate} />
    //                     </div>
    //                 ))}
    //             </div>
    //         </div>
    //     </section>
    // );
    return (
        <section style={{
            width: '100%',
            maxWidth: '1504px',
            padding: '0 20px',
            margin: '0 auto',
            overflow: 'hidden'
        }}>
            <h2 style={{
                fontSize: '36px',
                textAlign: 'center',
                marginBottom: '24px',
                color: '#111827',
                fontWeight: 80,
                width: '100%'

            }}>
                Как выглядит база кандидатов
            </h2>

            <div style={{
                overflowX: 'auto',
                paddingBottom: '20px',
                WebkitOverflowScrolling: 'touch'
            }}>
                <div style={{
                    display: 'flex',
                    gap: '80px',
                    paddingBottom: '10px',
                    width: 'max-content'
                }}>
                    {candidates.map((candidate, index) => (
                        <div key={index} style={{
                            flex: '0 0 auto',
                            width: '300px'
                        }}>
                            <CandidateCard {...candidate} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CandidatesSection;
