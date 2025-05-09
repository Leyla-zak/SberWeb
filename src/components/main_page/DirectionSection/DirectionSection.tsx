import React from "react";
import DirectionCard from "../DirectionCard/DirectionCard";
import styles from "./DirectionSection.module.css";
import marketingIcon from "../../../pages/Direction/Marketing.png";
import developIcon from "../../../pages/Direction/Develop.png";
import analyzeIcon from "../../../pages/Direction/Analyze.png";
import communityIcon from "../../../pages/Direction/Community.png";
import designIcon from "../../../pages/Direction/Design.png";
import prodIcon from "../../../pages/Direction/Prod.png";
import contentIcon from "../../../pages/Direction/Content.png";
import topmanageIcon from "../../../pages/Direction/TopManag.png"

const DirectionsSection: React.FC = () => {
    const firstRowDirections = [
        {
            icon: marketingIcon,
            title: "Маркетинг",
            count: "40+"
        },
        {
            icon: developIcon,
            title: "Разработка",
            count: "80+"
        },
        {
            icon: analyzeIcon,
            title: "Аналитика"
        },
        {
            icon: communityIcon,
            title: "Комьюнити"
        },
    ];

    const secondRowDirections = [
        {
            icon: designIcon,
            title: "Дизайн"
        },
        {
            icon: prodIcon,
            title: "Продажи"
        },
        {
            icon: contentIcon,
            title: "Контент"
        },
        {
            icon: topmanageIcon,
            title: "Топ-менеджмент"
        },
    ];

    return (
        <section className={styles.directionsSection}>
            <h2 className={styles.sectionTitle}>
                Выберите направление работы
            </h2>

            <div className={styles.directionsRow}>
                {firstRowDirections.map((direction, index) => (
                    <div
                        key={`first-${index}`}
                        className={styles.directionCardWrapper}
                    >
                        <DirectionCard
                            icon={direction.icon}
                            title={direction.title}
                            count={direction.count}
                        />
                    </div>
                ))}
            </div>

            <div className={styles.directionsRow}>
                {secondRowDirections.map((direction, index) => (
                    <div
                        key={`second-${index}`}
                        className={styles.directionCardWrapper}
                    >
                        <DirectionCard

                            icon={direction.icon}
                            title={direction.title}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default DirectionsSection;