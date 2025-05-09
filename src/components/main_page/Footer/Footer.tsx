import React from "react";
import styles from "./Footer.module.css";

interface FooterColumnProps {
    title: string;
    links: string[];
}

const FooterColumn: React.FC<FooterColumnProps> = ({ title, links }) => (
    <div className={styles.footerColumn}>
        <h3 className={styles.columnTitle}>{title}</h3>
        <nav className={styles.columnNav}>
            {links.map((link, index) => (
                <a key={index} href="#" className={styles.columnLink}>
                    {link}
                </a>
            ))}
        </nav>
    </div>
);

const Footer: React.FC = () => {
    const columns = [
        {
            title: "ЛИЦА.Кандидаты",
            links: ["Найти кандидата", "Попасть в базу", "О сервисе"],
        },
        {
            title: "ЛИЦА.Работа",
            links: ["Рекрутинг", "Конструктор подбора", "Аналитика подбора"],
        },
        {
            title: "О портале",
            links: ["Поддержка", "Обновления", "Контакты"],
        },
    ];

    return (
        <footer className={styles.footer}>
            <div className={styles.columnsContainer}>
                {columns.map((column, index) => (
                    <FooterColumn key={index} title={column.title} links={column.links} />
                ))}
            </div>

            <div className={styles.footerBottom}>
                <div className={styles.divider} />
                <div className={styles.bottomContent}>
                    <p>ООО «ЛИЦА»</p>
                    <div className={styles.legalLinks}>
                        <a href="#">Реквизиты</a>
                        <span>|</span>
                        <a href="#">Правовая информация</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;