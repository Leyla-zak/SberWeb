import React from "react";
import styles from "./Footer.module.css";

interface FooterColumnProps {
    title: string;
    links: Array<{
        text: string;
        url: string;
    }>;
}

const FooterColumn: React.FC<FooterColumnProps> = ({ title, links }) => (
    <div className={styles.footerColumn}>
        <h3 className={styles.columnTitle}>{title}</h3>
        <nav className={styles.columnNav} aria-label={`${title} navigation`}>
            {links.map((link, index) => (
                <a 
                    key={index} 
                    href={link.url} 
                    className={styles.columnLink}
                    aria-label={link.text}
                >
                    {link.text}
                </a>
            ))}
        </nav>
    </div>
);

const Footer: React.FC = () => {
    const columns = [
        {
            title: "ЛИЦА.Кандидаты",
            links: [
                { text: "Найти кандидата", url: "/candidates/search" },
                { text: "Попасть в базу", url: "/candidates/join" },
                { text: "О сервисе", url: "/about" },
            ],
        },
        {
            title: "ЛИЦА.Работа",
            links: [
                { text: "Рекрутинг", url: "/recruiting" },
                { text: "Конструктор подбора", url: "/recruiting/constructor" },
                { text: "Аналитика подбора", url: "/recruiting/analytics" },
            ],
        },
        {
            title: "О портале",
            links: [
                { text: "Поддержка", url: "/support" },
                { text: "Обновления", url: "/updates" },
                { text: "Контакты", url: "/contacts" },
            ],
        },
    ];

    return (
        <footer className={styles.footer} role="contentinfo">
            <div className={styles.columnsContainer}>
                {columns.map((column, index) => (
                    <FooterColumn key={index} title={column.title} links={column.links} />
                ))}
            </div>

            <div className={styles.footerBottom}>
                <div className={styles.divider} role="separator" />
                <div className={styles.bottomContent}>
                    <p>ООО «ЛИЦА»</p>
                    <div className={styles.legalLinks}>
                        <a href="/legal/requisites" aria-label="Реквизиты">Реквизиты</a>
                        <span aria-hidden="true">|</span>
                        <a href="/legal/info" aria-label="Правовая информация">Правовая информация</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;