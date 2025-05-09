import React from "react";
import "./CandidateCard.module.css";

interface BadgeProps {
    text: string;
    type: "part-time" | "full-time";
}

const Badge: React.FC<BadgeProps> = ({ text, type }) => {
    return (
        <span className={`badge ${type}`}>
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
        <article className="candidate-card">
            <div className="card-content">
                <div className="badges-container">
                    {badges.map((badge, index) => (
                        <Badge key={index} text={badge.text} type={badge.type} />
                    ))}
                </div>
                <img
                    src={image}
                    className="candidate-image"
                    alt={name}
                />
                <div className="candidate-info">
                    <h3 className="candidate-name">{name}</h3>
                    <p className="candidate-position">{position}</p>
                </div>
                <div className="candidate-details">
                    <div className="detail-item">
                        <span>Опыт:</span>
                        <span>{experience}</span>
                    </div>
                    <div className="detail-item">
                        <span>Зарплата:</span>
                        <span>{salary}</span>
                    </div>
                </div>
                <button className="view-button">
                    Посмотреть справку
                </button>
            </div>
        </article>
    );
};

export default CandidateCard;
