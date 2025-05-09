import React from "react";
import styles from "./BenefitsSection.module.css";
import checkmarkIcon from "../../../pages/checkmark-icon.png"

interface BenefitPointProps {
    title: string;
    description: string;
}

const BenefitPoint: React.FC<BenefitPointProps> = ({ title, description }) => (
    <div className={styles.benefitPoint}>
        <div className={styles.benefitHeader}>
            <img
                src={checkmarkIcon}
                className={styles.benefitIcon}
                alt="Checkmark icon"
            />
            <h3 className={styles.benefitTitle}>{title}</h3>
        </div>
        <p className={styles.benefitDescription}>{description}</p>
    </div>
);

const BenefitsSection: React.FC = () => {
    return (
        <section className={styles.benefitsSection}>
            <div className={styles.columnsContainer}>
                <div className={styles.leftColumn}>
                    <article className={styles.benefitsCard}>
                        <div>
                            <h2 className={styles.sectionTitle}>
                                Почему работодатели выбирают ЛИЦА?
                            </h2>
                            <div>
                                <BenefitPoint
                                    title="Проверка компетенций"
                                    description="Всех кандидатов с нашей стороны собеседуют не рекрутера, а эксперты в своих областях. По результатам мы составляем справку о кандидате, чтобы вы могли узнать его лучше."
                                />
                                <BenefitPoint
                                    title="Сотни кандидатов по подписке"
                                    description="Вы сможете самостоятельно связываться с кандидатами – все они дали согласие на это."
                                />
                                <BenefitPoint
                                    title="Еженедельное обновление базы"
                                    description="В рамках сервиса ЛИЦА.Работа мы проводим по несколько десятков собеседований еженедельно, и пополняем базу новыми справками по лучшим кандидатам."
                                />
                            </div>
                        </div>
                    </article>
                </div>


                <div className={styles.rightColumn}>
                    <article className={styles.subscriptionCard}>
                        <h2 className={styles.subscriptionCand}>Кандидаты по подписке</h2>
                        <p className={styles.subscriptionPrice}>
                            4900 ₽ <span>в месяц</span>
                        </p>
                        <p className={styles.priceComparison}>
                            В 10-100 раз ниже стоимости любого подбора
                        </p>
                        <button className={styles.subscriptionButton}>
                            Выбрать кандидата
                        </button>
                        <p className={styles.largePriceText}>4 900</p>
                    </article>
                </div>
            </div>
        </section>
    );
};

export default BenefitsSection;