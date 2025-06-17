import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";
import logo from "../../../pages/First/logo.png";
import search from "../../../pages/First/search.png";
import dropdown from "../../../pages/First/dropdown.png";
import { Link, useNavigate } from "react-router-dom";
import DropdownMenu from "./DropdownMenu";
import AuthModal from "./AuthModal";

interface UserData {
    email: string;
    name: string;
}

const Header: React.FC = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    const [currentAuthForm, setCurrentAuthForm] = useState<'login' | 'register'>('login');
    const [currentUser, setCurrentUser] = useState<UserData | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const user = localStorage.getItem('currentUser');
        if (user) {
            setCurrentUser(JSON.parse(user));
        }
    }, []);

    const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);
    const closeDropdown = () => setIsDropdownOpen(false);
    
    const openAuthModal = (formType: 'login' | 'register') => {
        setCurrentAuthForm(formType);
        setIsAuthModalOpen(true);
    };

    const closeAuthModal = () => {
        setIsAuthModalOpen(false);
    };

    const handleLogout = () => {
        localStorage.removeItem('currentUser');
        setCurrentUser(null);
        closeAuthModal();
        navigate('/');
    };

    const toggleUserMenu = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsUserMenuOpen(prev => !prev);
    };

    useEffect(() => {
        const handleClickOutside = () => {
            setIsUserMenuOpen(false);
        };

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <header className={styles.header}>
            <nav className={styles.navContainer}>
                <Link to="/" className={styles.logoSection}>
                    <h1 className={styles.logoText}>ЛИЦА</h1>
                    <img
                        src={logo}
                        className={styles.logoIcon}
                        alt="Логотип"
                    />
                    <h1 className={styles.logoText}>Кандидаты</h1>
                </Link>

                <div className={styles.mainNav}>
                    <ul className={styles.menuList}>
                        <li className={styles.menuItem}>
                            <Link to="/candidates/search" className={styles.menuLink}>Найти кандидата</Link>
                        </li>
                        <li className={styles.menuItem}>
                            <Link to="/resume-submission" className={styles.menuLink}>Попасть в базу</Link>
                        </li>
                        <li className={styles.menuItem}>
                            <Link to="/about" className={styles.menuLink}>О сервисе</Link>
                        </li>
                        <li className={styles.menuItem}>
                            <Link to="/portal" className={styles.menuLink}>Портал</Link>
                        </li>
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

                        <div className={styles.userSection} onClick={currentUser ? toggleUserMenu : () => openAuthModal('login')}>
                            <span className={styles.userName}>{currentUser ? currentUser.name : 'Гость'}</span>
                            <div className={styles.userAvatar}>{currentUser ? currentUser.name[0].toUpperCase() : 'Г'}</div>
                            {isUserMenuOpen && currentUser && (
                                <div className={styles.userMenu}>
                                    <button onClick={handleLogout} className={styles.logoutButton}>
                                        Выйти
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </nav>

            <div className={styles.divider} />

            <section>
                <div className={styles.categoryNav}>
                    <Link to="/candidates/search?position=Маркетолог" className={styles.categoryItem}>Маркетологи</Link>
                    <Link to="/candidates/search?position=Backend Developer" className={styles.categoryItem}>Backend-разработчики</Link>
                    <Link to="/candidates/search?position=Дизайнер" className={styles.categoryItem}>Дизайнеры</Link>
                    <Link to="/candidates/search?position=Менеджер по продажам" className={styles.categoryItem}>Менеджеры по продажам</Link>
                    <div className={styles.dropdownContainer}>
                        <button
                            className={styles.dropdownButton}
                            onClick={toggleDropdown}
                            type="button"
                        >
                            <span>Ещё</span>
                            <img
                                src={dropdown}
                                className={styles.dropdownIcon}
                                alt="Раскрыть меню"
                            />
                        </button>
                        <DropdownMenu isOpen={isDropdownOpen} onClose={closeDropdown} linkTo="/candidates/search" />
                    </div>
                </div>
            </section>
            {isAuthModalOpen && (
                <AuthModal
                    onClose={closeAuthModal}
                    initialForm={currentAuthForm}
                    onLoginSuccess={(user: UserData) => {
                        setCurrentUser(user);
                        closeAuthModal();
                    }}
                    onRegisterSuccess={(user: UserData) => {
                        setCurrentUser(user);
                        closeAuthModal();
                    }}
                />
            )}
        </header>
    );
};

export default Header;