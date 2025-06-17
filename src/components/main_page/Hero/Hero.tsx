import React from "react";
import styles from "./Hero.module.css";
import mainHero from "../../../pages/First/main_hero.png";
import { Link } from "react-router-dom";

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
                        <Link to="/candidates/search" className={styles.primaryButton}>
                            Выбрать кандидата
                        </Link>
                        <Link to="/resume-submission" className={styles.secondaryButton}>
                            Попасть в базу
                        </Link>
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