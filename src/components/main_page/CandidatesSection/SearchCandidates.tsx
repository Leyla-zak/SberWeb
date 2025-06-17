import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styles from './SearchCandidates.module.css';
import filterLogo from "../../../pages/filter_icon.png";

export interface Candidate {
    id: number;
    name: string;
    position: string;
    experience: string;
    skills: string[];
    location: string;
    salary: number;
    photo: string;
    type: string[];
    gender: 'Мужчина' | 'Женщина';
}

export const candidatesData: Candidate[] = [
    // Маркетологи
    {
        id: 27,
        name: "Анна Соколова",
        position: "Маркетолог",
        experience: "4 года",
        skills: ["SMM", "SEO", "Google Ads", "Analytics"],
        location: "Москва",
        salary: 180000,
        photo: "https://randomuser.me/api/portraits/women/57.jpg",
        type: ["full-time"],
        gender: "Женщина"
    },
    {
        id: 28,
        name: "Иван Петров",
        position: "Маркетолог",
        experience: "3 года",
        skills: ["Content Marketing", "Email Marketing", "Analytics"],
        location: "Санкт-Петербург",
        salary: 170000,
        photo: "https://randomuser.me/api/portraits/men/45.jpg",
        type: ["part-time"],
        gender: "Мужчина"
    },
    // Backend-разработчики
    {
        id: 29,
        name: "Алексей Козлов",
        position: "Backend Developer",
        experience: "5 лет",
        skills: ["Java", "Spring", "PostgreSQL", "Docker"],
        location: "Москва",
        salary: 250000,
        photo: "https://randomuser.me/api/portraits/men/46.jpg",
        type: ["full-time"],
        gender: "Мужчина"
    },
    {
        id: 30,
        name: "Елена Морозова",
        position: "Backend Developer",
        experience: "4 года",
        skills: ["Python", "Django", "MongoDB", "Redis"],
        location: "Казань",
        salary: 230000,
        photo: "https://randomuser.me/api/portraits/women/58.jpg",
        type: ["part-time", "full-time"],
        gender: "Женщина"
    },
    // Дизайнеры
    {
        id: 31,
        name: "Мария Иванова",
        position: "Дизайнер",
        experience: "3 года",
        skills: ["Figma", "Adobe XD", "UI/UX", "Prototyping"],
        location: "Москва",
        salary: 190000,
        photo: "https://randomuser.me/api/portraits/women/59.jpg",
        type: ["full-time"],
        gender: "Женщина"
    },
    {
        id: 32,
        name: "Дмитрий Смирнов",
        position: "Дизайнер",
        experience: "4 года",
        skills: ["Photoshop", "Illustrator", "UI/UX", "Branding"],
        location: "Санкт-Петербург",
        salary: 200000,
        photo: "https://randomuser.me/api/portraits/men/47.jpg",
        type: ["part-time"],
        gender: "Мужчина"
    },
    // Менеджеры по продажам
    {
        id: 33,
        name: "Ольга Новикова",
        position: "Менеджер по продажам",
        experience: "5 лет",
        skills: ["B2B", "CRM", "Negotiation", "Sales"],
        location: "Москва",
        salary: 220000,
        photo: "https://randomuser.me/api/portraits/women/60.jpg",
        type: ["full-time"],
        gender: "Женщина"
    },
    {
        id: 34,
        name: "Сергей Волков",
        position: "Менеджер по продажам",
        experience: "3 года",
        skills: ["B2C", "CRM", "Sales", "Client Relations"],
        location: "Екатеринбург",
        salary: 190000,
        photo: "https://randomuser.me/api/portraits/men/48.jpg",
        type: ["part-time", "full-time"],
        gender: "Мужчина"
    },
    // QA-тестировщики
    {
        id: 1,
        name: "Сергей Васильев",
        position: "QA-тестировщик",
        experience: "более 5 лет",
        skills: ["QA", "Automation", "Manual"],
        location: "Москва",
        salary: 120000,
        photo: "https://randomuser.me/api/portraits/men/32.jpg",
        type: ["part-time", "full-time"],
        gender: "Мужчина"
    },
    {
        id: 2,
        name: "Татьяна Петрова",
        position: "QA-тестировщик",
        experience: "более 5 лет",
        skills: ["QA", "Manual", "SQL"],
        location: "Санкт-Петербург",
        salary: 150000,
        photo: "https://randomuser.me/api/portraits/women/44.jpg",
        type: ["part-time", "full-time"],
        gender: "Женщина"
    },
    // Frontend Developer
    {
        id: 3,
        name: "Александр Егоров",
        position: "Frontend Developer",
        experience: "4 года",
        skills: ["React", "TypeScript", "HTML", "CSS"],
        location: "Москва",
        salary: 180000,
        photo: "https://randomuser.me/api/portraits/men/33.jpg",
        type: ["full-time"],
        gender: "Мужчина"
    },
    {
        id: 4,
        name: "Мария Лебедева",
        position: "Frontend Developer",
        experience: "3 года",
        skills: ["Vue", "JavaScript", "HTML", "CSS"],
        location: "Казань",
        salary: 170000,
        photo: "https://randomuser.me/api/portraits/women/45.jpg",
        type: ["part-time"],
        gender: "Женщина"
    },
    // Backend Developer
    {
        id: 5,
        name: "Дмитрий Смирнов",
        position: "Backend Developer",
        experience: "5 лет",
        skills: ["Node.js", "Express", "MongoDB", "Docker"],
        location: "Екатеринбург",
        salary: 200000,
        photo: "https://randomuser.me/api/portraits/men/34.jpg",
        type: ["full-time"],
        gender: "Мужчина"
    },
    {
        id: 6,
        name: "Екатерина Иванова",
        position: "Backend Developer",
        experience: "6 лет",
        skills: ["Python", "Django", "PostgreSQL", "Docker"],
        location: "Новосибирск",
        salary: 210000,
        photo: "https://randomuser.me/api/portraits/women/46.jpg",
        type: ["part-time", "full-time"],
        gender: "Женщина"
    },
    // Data Analyst
    {
        id: 7,
        name: "Мария Кузнецова",
        position: "Data Analyst",
        experience: "3 года",
        skills: ["SQL", "Python", "Tableau"],
        location: "Сочи",
        salary: 160000,
        photo: "https://randomuser.me/api/portraits/women/47.jpg",
        type: ["full-time"],
        gender: "Женщина"
    },
    {
        id: 8,
        name: "Павел Орлов",
        position: "Data Analyst",
        experience: "2 года",
        skills: ["Excel", "Power BI", "SQL"],
        location: "Калининград",
        salary: 150000,
        photo: "https://randomuser.me/api/portraits/men/35.jpg",
        type: ["part-time"],
        gender: "Мужчина"
    },
    // DevOps Engineer
    {
        id: 9,
        name: "Виктор Сидоров",
        position: "DevOps Engineer",
        experience: "5 лет",
        skills: ["Docker", "Kubernetes", "AWS"],
        location: "Томск",
        salary: 220000,
        photo: "https://randomuser.me/api/portraits/men/36.jpg",
        type: ["full-time"],
        gender: "Мужчина"
    },
    {
        id: 10,
        name: "Анна Белова",
        position: "DevOps Engineer",
        experience: "4 года",
        skills: ["CI/CD", "Terraform", "Azure"],
        location: "Пермь",
        salary: 210000,
        photo: "https://randomuser.me/api/portraits/women/48.jpg",
        type: ["part-time"],
        gender: "Женщина"
    },
    // Project Manager
    {
        id: 11,
        name: "Григорий Лебедев",
        position: "Project Manager",
        experience: "6 лет",
        skills: ["Agile", "Scrum", "Kanban"],
        location: "Самара",
        salary: 230000,
        photo: "https://randomuser.me/api/portraits/men/37.jpg",
        type: ["full-time"],
        gender: "Мужчина"
    },
    {
        id: 12,
        name: "Светлана Орлова",
        position: "Project Manager",
        experience: "7 лет",
        skills: ["Waterfall", "Jira", "Confluence"],
        location: "Тула",
        salary: 240000,
        photo: "https://randomuser.me/api/portraits/women/49.jpg",
        type: ["part-time", "full-time"],
        gender: "Женщина"
    },
    // Product Owner
    {
        id: 13,
        name: "Алексей Павлов",
        position: "Product Owner",
        experience: "5 лет",
        skills: ["Product Management", "Backlog", "Stakeholders"],
        location: "Краснодар",
        salary: 250000,
        photo: "https://randomuser.me/api/portraits/men/38.jpg",
        type: ["full-time"],
        gender: "Мужчина"
    },
    {
        id: 14,
        name: "Юлия Громова",
        position: "Product Owner",
        experience: "6 лет",
        skills: ["MVP", "Go-to-market", "A/B Testing"],
        location: "Иркутск",
        salary: 260000,
        photo: "https://randomuser.me/api/portraits/women/50.jpg",
        type: ["part-time"],
        gender: "Женщина"
    },
    // HR
    {
        id: 15,
        name: "Владимир Крылов",
        position: "HR Specialist",
        experience: "8 лет",
        skills: ["Recruitment", "Onboarding", "HR Analytics"],
        location: "Челябинск",
        salary: 170000,
        photo: "https://randomuser.me/api/portraits/men/39.jpg",
        type: ["full-time"],
        gender: "Мужчина"
    },
    {
        id: 16,
        name: "Евгения Литвинова",
        position: "HR Specialist",
        experience: "3 года",
        skills: ["HR", "Adaptation", "Training"],
        location: "Калуга",
        salary: 160000,
        photo: "https://randomuser.me/api/portraits/women/51.jpg",
        type: ["part-time", "full-time"],
        gender: "Женщина"
    },
    // UI/UX Designer
    {
        id: 17,
        name: "Максим Фролов",
        position: "UI/UX Designer",
        experience: "6 лет",
        skills: ["Figma", "Sketch", "Adobe XD"],
        location: "Тверь",
        salary: 190000,
        photo: "https://randomuser.me/api/portraits/men/40.jpg",
        type: ["part-time"],
        gender: "Мужчина"
    },
    {
        id: 18,
        name: "Дарья Киселева",
        position: "UI/UX Designer",
        experience: "4 года",
        skills: ["Photoshop", "Illustrator", "Prototyping", "Figma"],
        location: "Саратов",
        salary: 180000,
        photo: "https://randomuser.me/api/portraits/women/52.jpg",
        type: ["full-time"],
        gender: "Женщина"
    },
    // Data Scientist
    {
        id: 19,
        name: "Роман Захаров",
        position: "Data Scientist",
        experience: "5 лет",
        skills: ["Python", "Machine Learning", "Pandas", "SQL"],
        location: "Уфа",
        salary: 250000,
        photo: "https://randomuser.me/api/portraits/men/41.jpg",
        type: ["part-time", "full-time"],
        gender: "Мужчина"
    },
    {
        id: 20,
        name: "Инна Соловьева",
        position: "Data Scientist",
        experience: "2 года",
        skills: ["R", "Deep Learning", "TensorFlow", "Python"],
        location: "Псков",
        salary: 220000,
        photo: "https://randomuser.me/api/portraits/women/53.jpg",
        type: ["part-time"],
        gender: "Женщина"
    },
    // Business Analyst
    {
        id: 21,
        name: "Георгий Кузьмин",
        position: "Business Analyst",
        experience: "7 лет",
        skills: ["BPMN", "UML", "SQL"],
        location: "Ярославль",
        salary: 210000,
        photo: "https://randomuser.me/api/portraits/men/42.jpg",
        type: ["full-time"],
        gender: "Мужчина"
    },
    {
        id: 22,
        name: "Валентина Ковалева",
        position: "Business Analyst",
        experience: "6 лет",
        skills: ["Requirements", "User Stories", "Wireframes", "SQL"],
        location: "Тамбов",
        salary: 200000,
        photo: "https://randomuser.me/api/portraits/women/54.jpg",
        type: ["part-time", "full-time"],
        gender: "Женщина"
    },
    // System Administrator
    {
        id: 23,
        name: "Артём Соколов",
        position: "System Administrator",
        experience: "5 лет",
        skills: ["Linux", "Windows Server", "Networking"],
        location: "Курск",
        salary: 170000,
        photo: "https://randomuser.me/api/portraits/men/43.jpg",
        type: ["full-time"],
        gender: "Мужчина"
    },
    {
        id: 24,
        name: "Елизавета Морозова",
        position: "System Administrator",
        experience: "4 года",
        skills: ["VMware", "Active Directory", "Bash"],
        location: "Смоленск",
        salary: 165000,
        photo: "https://randomuser.me/api/portraits/women/55.jpg",
        type: ["part-time"],
        gender: "Женщина"
    },
    // Marketing Specialist
    {
        id: 25,
        name: "Василий Гаврилов",
        position: "Marketing Specialist",
        experience: "8 лет",
        skills: ["SEO", "SMM", "Google Ads", "Analytics"],
        location: "Таганрог",
        salary: 180000,
        photo: "https://randomuser.me/api/portraits/men/44.jpg",
        type: ["full-time"],
        gender: "Мужчина"
    },
    {
        id: 26,
        name: "Кристина Лазарева",
        position: "Marketing Specialist",
        experience: "3 года",
        skills: ["Content", "Email Marketing", "Analytics", "SEO"],
        location: "Петрозаводск",
        salary: 170000,
        photo: "https://randomuser.me/api/portraits/women/56.jpg",
        type: ["part-time", "full-time"],
        gender: "Женщина"
    },
];

const PAGE_SIZE = 6;

const allSkills = [
    "QA", "Automation", "Manual", "React", "TypeScript", "HTML", "CSS", "Vue", "JavaScript", "Node.js", "Express", "MongoDB", "Docker", "Python", "Django", "PostgreSQL", "SQL", "Tableau", "Excel", "Power BI", "Kubernetes", "AWS", "CI/CD", "Terraform", "Azure", "Agile", "Scrum", "Kanban", "Waterfall", "Jira", "Confluence", "Product Management", "Backlog", "Stakeholders", "MVP", "Go-to-market", "A/B Testing", "Recruitment", "Onboarding", "HR Analytics", "HR", "Adaptation", "Training", "Figma", "Sketch", "Adobe XD", "Photoshop", "Illustrator", "Prototyping", "Machine Learning", "Pandas", "R", "Deep Learning", "TensorFlow", "BPMN", "UML", "Requirements", "User Stories", "Wireframes", "Linux", "Windows Server", "Networking", "VMware", "Active Directory", "Bash", "SEO", "SMM", "Google Ads", "Analytics", "Content", "Email Marketing"
];

const SearchCandidates: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
    const [page, setPage] = useState(1);
    const [isSkillsOpen, setIsSkillsOpen] = useState(false);
    const [minSalary, setMinSalary] = useState<number>(0);
    const [maxSalary, setMaxSalary] = useState<number>(Infinity);
    const [minAge, setMinAge] = useState<number>(0);
    const [maxAge, setMaxAge] = useState<number>(Infinity);
    const [selectedGender, setSelectedGender] = useState<'Все' | 'Мужчина' | 'Женщина'>('Все');
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const position = searchParams.get('position');
        if (position) {
            setSearchQuery(position);
        }
    }, [location.search]);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
        setPage(1);
    };

    const handleSkillToggle = (skill: string) => {
        setSelectedSkills(prev => 
            prev.includes(skill) 
                ? prev.filter(s => s !== skill)
                : [...prev, skill]
        );
        setPage(1);
    };

    const toggleSkillsMenu = () => {
        setIsSkillsOpen(!isSkillsOpen);
    };

    const handleMinSalaryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.target.value);
        setMinSalary(isNaN(value) ? 0 : value);
        setPage(1);
    };

    const handleMaxSalaryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.target.value);
        setMaxSalary(isNaN(value) ? Infinity : value);
        setPage(1);
    };

    const handleMinAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.target.value);
        setMinAge(isNaN(value) ? 0 : value);
        setPage(1);
    };

    const handleMaxAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.target.value);
        setMaxAge(isNaN(value) ? Infinity : value);
        setPage(1);
    };

    const handleGenderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedGender(e.target.value as 'Все' | 'Мужчина' | 'Женщина');
        setPage(1);
    };

    const handleClearFilters = () => {
        setSearchQuery('');
        setSelectedSkills([]);
        setMinSalary(0);
        setMaxSalary(Infinity);
        setMinAge(0);
        setMaxAge(Infinity);
        setSelectedGender('Все');
        setPage(1);
    };

    const filteredCandidates = candidatesData.filter(candidate => {
        const matchesSearch = candidate.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            candidate.position.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesSkills = selectedSkills.length === 0 || 
                            selectedSkills.every(skill => candidate.skills.includes(skill));
        const matchesSalary = candidate.salary >= minSalary && candidate.salary <= maxSalary;
        const experienceYears = parseInt(candidate.experience.split(' ')[0]);
        const matchesAge = (minAge === 0 || experienceYears >= minAge) && (maxAge === Infinity || experienceYears <= maxAge);
        const matchesGender = selectedGender === 'Все' || candidate.gender === selectedGender;

        return matchesSearch && matchesSkills && matchesSalary && matchesAge && matchesGender;
    });

    const totalPages = Math.ceil(filteredCandidates.length / PAGE_SIZE);
    const paginatedCandidates = filteredCandidates.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

    return (
        <div className={styles.container}>
            <div className={styles.mainContent}>
            <div className={styles.resultsSection}>
                <h2>Найдено кандидатов: {filteredCandidates.length}</h2>
                <div className={styles.candidatesList}>
                    {paginatedCandidates.map(candidate => (
                        <div key={candidate.id} className={styles.candidateCard}>
                            <div className={styles.tags}>
                                {candidate.type.map(t => (
                                    <span key={t} className={t === 'part-time' ? styles.partTime : styles.fullTime}>{t}</span>
                                ))}
                            </div>
                                <img src={candidate.photo} alt={candidate.name} className={styles.avatar} />
                            <h3 className={styles.candidateName}>{candidate.name}</h3>
                            <p className={styles.position}>{candidate.position}</p>
                            <p className={styles.experience}>Опыт: {candidate.experience}</p>
                            <p className={styles.salary}>Зарплата: от {candidate.salary.toLocaleString()} ₽</p>
                            <button className={styles.contactButton} onClick={() => navigate(`/candidates/${candidate.id}`)}>Посмотреть справку</button>
                        </div>
                    ))}
                </div>
                <div className={styles.pagination}>
                    {Array.from({ length: totalPages }, (_, i) => (
                        <button
                            key={i + 1}
                            className={page === i + 1 ? styles.activePage : ''}
                            onClick={() => setPage(i + 1)}
                        >
                            {i + 1}
                        </button>
                    ))}
                    </div>
                </div>
                <div className={styles.filterSidebar}>
                    <h1>Фильтры</h1>
                    <div className={styles.filterOptionsCount}>
                        <img src= {filterLogo} alt="Фильтр" /> 2 Параметра
                        <button className={styles.clearFiltersButton} onClick={handleClearFilters}>Очистить всё</button>
                    </div>
                    <div className={styles.filterGroup}>
                        <h3>Зарплата</h3>
                        <div className={styles.salaryInputs}>
                            <input
                                type="number"
                                placeholder="от"
                                value={minSalary === 0 ? '' : minSalary}
                                onChange={handleMinSalaryChange}
                                className={styles.filterInput}
                            />
                            <input
                                type="number"
                                placeholder="до"
                                value={maxSalary === Infinity ? '' : maxSalary}
                                onChange={handleMaxSalaryChange}
                                className={styles.filterInput}
                            />
                        </div>
                    </div>
                    <div className={styles.filterGroup}>
                        <h3>Возраст</h3>
                        <div className={styles.ageInputs}>
                            <input
                                type="number"
                                placeholder="от"
                                value={minAge === 0 ? '' : minAge}
                                onChange={handleMinAgeChange}
                                className={styles.filterInput}
                            />
                            <input
                                type="number"
                                placeholder="до"
                                value={maxAge === Infinity ? '' : maxAge}
                                onChange={handleMaxAgeChange}
                                className={styles.filterInput}
                            />
                        </div>
                    </div>
                    <div className={styles.filterGroup}>
                        <h3>Пол</h3>
                        <label className={styles.radioLabel}>
                            <input
                                type="radio"
                                name="gender"
                                value="Все"
                                checked={selectedGender === 'Все'}
                                onChange={handleGenderChange}
                            /> Все
                        </label>
                        <label className={styles.radioLabel}>
                            <input
                                type="radio"
                                name="gender"
                                value="Мужчина"
                                checked={selectedGender === 'Мужчина'}
                                onChange={handleGenderChange}
                            /> Мужчины
                        </label>
                        <label className={styles.radioLabel}>
                            <input
                                type="radio"
                                name="gender"
                                value="Женщина"
                                checked={selectedGender === 'Женщина'}
                                onChange={handleGenderChange}
                            /> Женщины
                        </label>
                    </div>
                    <div className={styles.filterGroup}>
                        <h3>Поиск по имени/должности</h3>
                        <input
                            type="text"
                            placeholder="Поиск..."
                            value={searchQuery}
                            onChange={handleSearch}
                            className={styles.filterInput}
                        />
                    </div>
                    <div className={styles.filterGroup}>
                        <h3>Фильтры по навыкам</h3>
                        <button onClick={toggleSkillsMenu} className={styles.skillsToggleButton}>
                            {isSkillsOpen ? 'Скрыть навыки' : 'Показать навыки'}
                        </button>
                        {isSkillsOpen && (
                            <div className={styles.skillsList}>
                                {allSkills.map(skill => (
                                    <button
                                        key={skill}
                                        className={`${styles.skillButton} ${selectedSkills.includes(skill) ? styles.selected : ''}`}
                                        onClick={() => handleSkillToggle(skill)}
                                    >
                                        {skill}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                    <button className={styles.applyFiltersButton}>Применить</button>
                </div>
            </div>
        </div>
    );
};

export default SearchCandidates; 