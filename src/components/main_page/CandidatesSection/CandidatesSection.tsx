import React from "react";
import CandidateCard from "../CandidateCard/CandidateCard";
import "./CandidatesSection.module.css";

const CandidatesSection: React.FC = () => {
    const candidates = [
        {
            name: "Анциферов Владимир",
            position: "Директор по маркетингу",
            experience: "более 13 лет",
            salary: "200 тыс. ₽",
            image: "https://cdn.builder.io/api/v1/image/assets/TEMP/b06a13e90c214236bf95eb836cf18aeb2da47a59?placeholderIfAbsent=true&apiKey=26b706e6e9b243c3a40d02522978a4d9",
            badges: [
                { text: "part-time", type: "part-time" as const },
                { text: "full-time", type: "full-time" as const },
            ],
        },
        {
            name: "Сикорская Анна",
            position: "Аналитик",
            experience: "более 13 лет",
            salary: "от 150 тыс. ₽",
            image: "https://cdn.builder.io/api/v1/image/assets/TEMP/036f3b1a5b43aa3a68e48213c8137ef901a365f7?placeholderIfAbsent=true&apiKey=26b706e6e9b243c3a40d02522978a4d9",
            badges: [{ text: "full-time", type: "full-time" as const }],
        },
        {
            name: "Демидова Дарья",
            position: "Брендмейкер",
            experience: "более 10 лет",
            salary: "от 100 тыс. ₽",
            image: "https://cdn.builder.io/api/v1/image/assets/TEMP/19ca5adafeb3158833c4af8064e10351095e85e9?placeholderIfAbsent=true&apiKey=26b706e6e9b243c3a40d02522978a4d9",
            badges: [
                { text: "part-time", type: "part-time" as const },
                { text: "full-time", type: "full-time" as const },
            ],
        },
        {
            name: "Харисов Евгений",
            position: "Директор по развитию бизнеса",
            experience: "более 20 лет",
            salary: "от 150 тыс. ₽",
            image: "https://cdn.builder.io/api/v1/image/assets/TEMP/1bbf7a1b43cd6367327749b70f6c8ca4b87ca8b4?placeholderIfAbsent=true&apiKey=26b706e6e9b243c3a40d02522978a4d9",
            badges: [{ text: "full-time", type: "full-time" as const }],
        },
    ];

    return (
        <section className="candidates-section">
            <h2 className="section-title">Как выглядит база кандидатов</h2>
            <div className="candidates-scroll-container">
                <div className="candidates-list">
                    {candidates.map((candidate, index) => (
                        <div key={index} className="candidate-item">
                            <CandidateCard {...candidate} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CandidatesSection;