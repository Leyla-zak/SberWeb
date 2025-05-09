import React from "react";
import styles from "./DirectionCard.module.css";

interface DirectionCardProps {
    icon: string;
    title: string;
    count?: string;
}

const DirectionCard: React.FC<DirectionCardProps> = ({ icon, title, count }) => {
    return (
        <div className={styles.card}>
            <div className={styles.content}>
                <img src={icon} alt={title} className={styles.icon} />
                <div className={styles.textWrapper}>
                    <h3 className={styles.title}>{title}</h3>
                    {count && <span className={styles.count}>{count}</span>}
                </div>
            </div>
        </div>
    );
};

export default DirectionCard;