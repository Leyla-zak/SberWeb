import React from "react";
import styles from "./Header.module.css";
import logo from "../../../pages/First/logo.png";
import search from "../../../pages/First/search.png";
import dropdown from "../../../pages/First/dropdown.png";
import {Link} from "react-router-dom";

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.navContainer}>
                <div className={styles.logoSection}>
                    <h1 className={styles.logoText}>ЛИЦА</h1>
                    <img
                        src={logo}
                        className={styles.logoIcon}
                        alt="Логотип"
                    />
                    <h1 className={styles.logoText}>Кандидаты</h1>
                </div>

                <div className={styles.mainNav}>
                    <ul className={styles.menuList}>
                        <li className={styles.menuItem}>Найти кандиадата</li>
                        <li className={styles.menuItem}>Попасть в базу</li>
                        <li className={styles.menuItem}>О сервисе</li>
                        <li className={styles.menuItem}>Портал</li>
                    </ul>

                    <div className={styles.searchUserContainer}>
                        <div className={styles.searchBox}>
                            <img
                                src={search}
                                className={styles.searchIcon}
                                alt="Поиск"
                            />
                            <span>Поиск</span>
                        </div>

                        <div className={styles.userSection}>
                            <span className={styles.userName}>Гость</span>
                            <div className={styles.userAvatar}>Г</div>
                        </div>
                    </div>
                </div>
            </nav>

            <div className={styles.divider} />

            <section>
                <div className={styles.categoryNav}>
                    <a href="/Market" className={styles.categoryItem}>Маркетологи</a>
                    <a href="/Backend" className={styles.categoryItem}>Backend-разработчики</a>
                    <a href="/Design" className={styles.categoryItem}>Дизайнеры</a>
                    <a href="/Manager" className={styles.categoryItem}>Менеджеры по продажам</a>
                    <div>
                        <a href ="/Btn" className={styles.dropdownButton}>
                            <span>Ещё</span>
                            <img
                                src={dropdown}
                                className={styles.dropdownIcon}
                                alt="Раскрыть меню"
                            />
                        </a>
                    </div>
                </div>
            </section>
        </header>
    );
};

export default Header;