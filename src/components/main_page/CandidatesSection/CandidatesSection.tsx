import React from "react";
import CandidateCard from "../CandidateCard/CandidateCard";
import { candidatesData } from "./SearchCandidates";

const CandidatesSection: React.FC = () => {
    // Берем первые 4 кандидата из базы данных
    const candidates = candidatesData.slice(0, 4).map(candidate => ({
        id: candidate.id,
        name: candidate.name,
        position: candidate.position,
        experience: candidate.experience,
        salary: `от ${candidate.salary.toLocaleString()} ₽`,
        image: candidate.photo,
        badges: candidate.type.map(type => ({ 
            text: type, 
            type: type as "part-time" | "full-time" 
        })),
    }));

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
