import React from "react";
import styles from "./Hero.module.css";
import mainHero from "../../../pages/First/main_hero.png";

const Hero: React.FC = () => {
    return (
        <section className={styles.heroSection}>
            <div className={styles.columnsContainer}>
                <div className={styles.leftColumn}>
                    <div className={styles.headingBlock}>
                        <h2 className={styles.headingText}>
                            Нанимайте проверенных{" "}
                        </h2>
                        <div className={styles.highlightedText}>
                            кандидатов
                        </div>
                    </div>

                    <p className={styles.description}>
                        Мы уже со всеми провели собеседования и подтверждаем их
                        профессионализм
                    </p>

                    <div className={styles.buttonsContainer}>
                        <button className={styles.primaryButton}>
                            Выбрать кандидата
                        </button>
                        <button className={styles.secondaryButton}>
                            Попасть в базу
                        </button>
                    </div>
                </div>


                <div className={styles.rightColumn}>
                    <img
                        src={mainHero}
                        className={styles.heroImage}
                        alt="Иллюстрация героя"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;