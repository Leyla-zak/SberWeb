import React from 'react';
import { Link } from 'react-router-dom';
import styles from './DropdownMenu.module.css';

interface DropdownMenuProps {
    isOpen: boolean;
    onClose: () => void;
    linkTo?: string;
}

const categories = [
    { name: 'Разработчики', position: 'Разработчик' },
    { name: 'Аналитики', position: 'Аналитик' },
    { name: 'Тестировщики', position: 'Тестировщик' },
    { name: 'DevOps', position: 'DevOps Engineer' },
    { name: 'Product Manager', position: 'Product Manager' },
    { name: 'Project Manager', position: 'Project Manager' },
    { name: 'HR', position: 'HR Specialist' },
    { name: 'Финансы', position: 'Финансист' },
];

const DropdownMenu: React.FC<DropdownMenuProps> = ({ isOpen, onClose, linkTo }) => {
    if (!isOpen) return null;
    return (
        <>
            <div className={styles.overlay} onClick={onClose} />
            <div className={styles.dropdownMenu}>
                {categories.map((cat) => (
                    <Link
                        key={cat.name}
                        to={`${linkTo || '/candidates/search'}?position=${cat.position}`}
                        className={styles.menuItem}
                        onClick={onClose}
                    >
                        {cat.name}
                    </Link>
                ))}
            </div>
        </>
    );
};

export default DropdownMenu; 