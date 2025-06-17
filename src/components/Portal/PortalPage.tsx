import React, { useState } from 'react';
import styles from './PortalPage.module.css';
import CreateJobModal from './CreateJobModal';

interface Job {
    id: number;
    title: string;
    department: string;
    status: 'draft' | 'published' | 'closed';
    candidates: number;
    createdAt: string;
    description: string;
    requirements: string;
    salary: string;
    location: string;
    type: 'full-time' | 'part-time' | 'contract';
    experience: string;
    skills: string;
    benefits: string;
    contactEmail: string;
    contactPhone: string;
}

interface Candidate {
    id: number;
    name: string;
    position: string;
    status: 'new' | 'reviewed' | 'interviewed' | 'offered' | 'hired' | 'rejected';
    date: string;
}

interface Company {
    id: number;
    name: string;
    logo: string;
    industry: string;
    size: string;
    location: string;
}

interface LoginForm {
    email: string;
    password: string;
}

const PortalPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'dashboard' | 'jobs' | 'candidates'>('dashboard');
    const [showEditModal, setShowEditModal] = useState(false);
    const [showCreateModal, setShowCreateModal] = useState(false);
    const [editingJob, setEditingJob] = useState<Job | null>(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [company, setCompany] = useState<Company | null>(null);
    const [loginForm, setLoginForm] = useState<LoginForm>({
        email: '',
        password: ''
    });
    const [loginError, setLoginError] = useState<string>('');
    const [isLoading, setIsLoading] = useState(false);

    // Пример данных для демонстрации
    const jobs: Job[] = [
        { 
            id: 1, 
            title: 'Senior Frontend Developer', 
            department: 'Разработка', 
            status: 'published', 
            candidates: 12, 
            createdAt: '2024-03-15',
            description: 'Мы ищем опытного Frontend-разработчика для работы над нашими продуктами.',
            requirements: '• 5+ лет опыта разработки\n• Отличное знание React\n• Опыт работы с TypeScript',
            salary: 'от 250 000 ₽',
            location: 'Москва',
            type: 'full-time',
            experience: 'от 5 лет',
            skills: 'React, TypeScript, Redux',
            benefits: 'ДМС, гибкий график, удаленная работа',
            contactEmail: 'hr@company.com',
            contactPhone: '+7 (999) 123-45-67'
        },
        { 
            id: 2, 
            title: 'Product Manager', 
            department: 'Продукт', 
            status: 'published', 
            candidates: 8, 
            createdAt: '2024-03-10',
            description: 'Ищем Product Manager для управления нашими продуктами.',
            requirements: '• 3+ года опыта в продуктовой разработке\n• Опыт работы с Agile методологиями',
            salary: 'от 200 000 ₽',
            location: 'Москва',
            type: 'full-time',
            experience: 'от 3 лет',
            skills: 'Product Management, Agile, Jira',
            benefits: 'ДМС, гибкий график',
            contactEmail: 'hr@company.com',
            contactPhone: '+7 (999) 123-45-67'
        },
        { 
            id: 3, 
            title: 'UX/UI Designer', 
            department: 'Дизайн', 
            status: 'closed', 
            candidates: 15, 
            createdAt: '2024-02-28',
            description: 'Требуется UX/UI дизайнер для создания интерфейсов.',
            requirements: '• 3+ года опыта в дизайне\n• Знание Figma\n• Портфолио с проектами',
            salary: 'от 180 000 ₽',
            location: 'Москва',
            type: 'full-time',
            experience: 'от 3 лет',
            skills: 'Figma, UI/UX, Adobe Creative Suite',
            benefits: 'ДМС, гибкий график',
            contactEmail: 'hr@company.com',
            contactPhone: '+7 (999) 123-45-67'
        },
    ];

    const candidates: Candidate[] = [
        { id: 1, name: 'Анна Петрова', position: 'Senior Frontend Developer', status: 'interviewed', date: '2024-03-18' },
        { id: 2, name: 'Иван Смирнов', position: 'Product Manager', status: 'new', date: '2024-03-17' },
        { id: 3, name: 'Мария Иванова', position: 'UX/UI Designer', status: 'reviewed', date: '2024-03-16' },
    ];

    const getStatusColor = (status: string) => {
        const colors = {
            published: '#4CAF50',
            closed: '#9E9E9E',
            draft: '#FFC107',
            new: '#2196F3',
            reviewed: '#9C27B0',
            interviewed: '#FF9800',
            offered: '#795548',
            hired: '#4CAF50',
            rejected: '#F44336'
        };
        return colors[status as keyof typeof colors] || '#9E9E9E';
    };

    const handleEditJob = (job: Job) => {
        setEditingJob(job);
        setShowEditModal(true);
    };

    const handleSaveJob = (e: React.FormEvent) => {
        e.preventDefault();
        // Здесь будет логика сохранения изменений
        console.log('Saving job:', editingJob);
        setShowEditModal(false);
        setEditingJob(null);
    };

    const handleCreateJob = (newJob: Job) => {
        // Здесь будет логика создания новой вакансии
        console.log('Creating new job:', newJob);
        setShowCreateModal(false);
    };

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoginError('');
        setIsLoading(true);

        try {
            // Валидация формы
            if (!loginForm.email || !loginForm.password) {
                throw new Error('Пожалуйста, заполните все поля');
            }

            if (!loginForm.email.includes('@')) {
                throw new Error('Пожалуйста, введите корректный email');
            }

            if (loginForm.password.length < 6) {
                throw new Error('Пароль должен содержать минимум 6 символов');
            }

            // Здесь будет реальный запрос к API
            // const response = await api.login(loginForm.email, loginForm.password);
            
            // Временная имитация запроса
            await new Promise(resolve => setTimeout(resolve, 1000));

            // Проверка учетных данных (временное решение)
            if (loginForm.email === 'admin@company.com' && loginForm.password === 'password') {
                setIsAuthenticated(true);
                setCompany({
                    id: 1,
                    name: 'Tech Solutions',
                    logo: 'https://via.placeholder.com/150',
                    industry: 'IT',
                    size: '100-500',
                    location: 'Москва'
                });
            } else {
                throw new Error('Неверный email или пароль');
            }
        } catch (error) {
            setLoginError(error instanceof Error ? error.message : 'Произошла ошибка при входе');
        } finally {
            setIsLoading(false);
        }
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
        setCompany(null);
        setLoginForm({ email: '', password: '' });
        setLoginError('');
    };

    if (!isAuthenticated) {
        return (
            <div className={styles.loginPage}>
                <div className={styles.loginCard}>
                    <h1>Вход в портал работодателя</h1>
                    <p>Для доступа к порталу необходимо авторизоваться</p>
                    <form onSubmit={handleLogin} className={styles.loginForm}>
                        <div className={styles.formGroup}>
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                value={loginForm.email}
                                onChange={(e) => setLoginForm({...loginForm, email: e.target.value})}
                                placeholder="Введите email"
                                required
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="password">Пароль</label>
                            <input
                                type="password"
                                id="password"
                                value={loginForm.password}
                                onChange={(e) => setLoginForm({...loginForm, password: e.target.value})}
                                placeholder="Введите пароль"
                                required
                            />
                        </div>
                        {loginError && (
                            <div className={styles.errorMessage}>
                                {loginError}
                            </div>
                        )}
                        <button 
                            type="submit" 
                            className={styles.loginButton}
                            disabled={isLoading}
                        >
                            {isLoading ? 'Вход...' : 'Войти'}
                        </button>
                    </form>
                    <div className={styles.loginInfo}>
                        <p>Для демонстрации используйте:</p>
                        <p>Email: admin@company.com</p>
                        <p>Пароль: password</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.portalPage}>
            <div className={styles.sidebar}>
                <div className={styles.companyInfo}>
                    <img src={company?.logo} alt={company?.name} className={styles.companyLogo} />
                    <h3>{company?.name}</h3>
                    <p>{company?.industry}</p>
                    <p>{company?.size} сотрудников</p>
                    <p>{company?.location}</p>
                    <button 
                        className={styles.logoutButton}
                        onClick={handleLogout}
                    >
                        Выйти
                    </button>
                </div>
                <nav className={styles.navigation}>
                    <button 
                        className={`${styles.navButton} ${activeTab === 'dashboard' ? styles.active : ''}`}
                        onClick={() => setActiveTab('dashboard')}
                    >
                        📊 Дашборд
                    </button>
                    <button 
                        className={`${styles.navButton} ${activeTab === 'jobs' ? styles.active : ''}`}
                        onClick={() => setActiveTab('jobs')}
                    >
                        💼 Вакансии
                    </button>
                    <button 
                        className={`${styles.navButton} ${activeTab === 'candidates' ? styles.active : ''}`}
                        onClick={() => setActiveTab('candidates')}
                    >
                        👥 Кандидаты
                    </button>
                </nav>
            </div>

            <div className={styles.content}>
                {activeTab === 'dashboard' && (
                    <div className={styles.dashboard}>
                        <h1>Дашборд</h1>
                        <div className={styles.statsGrid}>
                            <div className={styles.statCard}>
                                <h3>Активные вакансии</h3>
                                <p className={styles.statNumber}>{jobs.filter(job => job.status === 'published').length}</p>
                            </div>
                            <div className={styles.statCard}>
                                <h3>Новые кандидаты</h3>
                                <p className={styles.statNumber}>{candidates.filter(c => c.status === 'new').length}</p>
                            </div>
                            <div className={styles.statCard}>
                                <h3>На интервью</h3>
                                <p className={styles.statNumber}>{candidates.filter(c => c.status === 'interviewed').length}</p>
                            </div>
                            <div className={styles.statCard}>
                                <h3>Приняты на работу</h3>
                                <p className={styles.statNumber}>{candidates.filter(c => c.status === 'hired').length}</p>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'jobs' && (
                    <div className={styles.jobs}>
                        <div className={styles.header}>
                            <h1>Вакансии</h1>
                            <button 
                                className={styles.addButton}
                                onClick={() => setShowCreateModal(true)}
                            >
                                + Создать вакансию
                            </button>
                        </div>
                        <div className={styles.tableContainer}>
                            <table className={styles.table}>
                                <thead>
                                    <tr>
                                        <th>Название</th>
                                        <th>Отдел</th>
                                        <th>Статус</th>
                                        <th>Кандидаты</th>
                                        <th>Дата создания</th>
                                        <th>Действия</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {jobs.map(job => (
                                        <tr key={job.id}>
                                            <td>{job.title}</td>
                                            <td>{job.department}</td>
                                            <td>
                                                <span 
                                                    className={styles.status}
                                                    style={{ backgroundColor: getStatusColor(job.status) }}
                                                >
                                                    {job.status === 'published' ? 'Активна' : 
                                                     job.status === 'closed' ? 'Закрыта' : 'Черновик'}
                                                </span>
                                            </td>
                                            <td>{job.candidates}</td>
                                            <td>{new Date(job.createdAt).toLocaleDateString()}</td>
                                            <td>
                                                <button 
                                                    className={styles.actionButton}
                                                    onClick={() => handleEditJob(job)}
                                                >
                                                    Редактировать
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}

                {activeTab === 'candidates' && (
                    <div className={styles.candidates}>
                        <div className={styles.header}>
                            <h1>Кандидаты</h1>
                            <div className={styles.filters}>
                                <select className={styles.filterSelect}>
                                    <option value="all">Все статусы</option>
                                    <option value="new">Новые</option>
                                    <option value="reviewed">На рассмотрении</option>
                                    <option value="interviewed">На интервью</option>
                                    <option value="offered">Предложение</option>
                                    <option value="hired">Приняты</option>
                                    <option value="rejected">Отклонены</option>
                                </select>
                            </div>
                        </div>
                        <div className={styles.tableContainer}>
                            <table className={styles.table}>
                                <thead>
                                    <tr>
                                        <th>Имя</th>
                                        <th>Позиция</th>
                                        <th>Статус</th>
                                        <th>Дата</th>
                                        <th>Действия</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {candidates.map(candidate => (
                                        <tr key={candidate.id}>
                                            <td>{candidate.name}</td>
                                            <td>{candidate.position}</td>
                                            <td>
                                                <span 
                                                    className={styles.status}
                                                    style={{ backgroundColor: getStatusColor(candidate.status) }}
                                                >
                                                    {candidate.status === 'new' ? 'Новый' :
                                                     candidate.status === 'reviewed' ? 'На рассмотрении' :
                                                     candidate.status === 'interviewed' ? 'На интервью' :
                                                     candidate.status === 'offered' ? 'Предложение' :
                                                     candidate.status === 'hired' ? 'Принят' : 'Отклонен'}
                                                </span>
                                            </td>
                                            <td>{new Date(candidate.date).toLocaleDateString()}</td>
                                            <td>
                                                <button className={styles.actionButton}>Просмотр</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
            </div>

            {showEditModal && editingJob && (
                <div className={styles.modalOverlay}>
                    <div className={styles.modalContent}>
                        <button 
                            className={styles.closeButton}
                            onClick={() => setShowEditModal(false)}
                        >
                            ×
                        </button>
                        <h2>Редактирование вакансии</h2>
                        <form onSubmit={handleSaveJob} className={styles.editForm}>
                            <div className={styles.formGroup}>
                                <label htmlFor="title">Название вакансии</label>
                                <input
                                    type="text"
                                    id="title"
                                    value={editingJob.title}
                                    onChange={(e) => setEditingJob({...editingJob, title: e.target.value})}
                                    required
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="department">Отдел</label>
                                <input
                                    type="text"
                                    id="department"
                                    value={editingJob.department}
                                    onChange={(e) => setEditingJob({...editingJob, department: e.target.value})}
                                    required
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="status">Статус</label>
                                <select
                                    id="status"
                                    value={editingJob.status}
                                    onChange={(e) => setEditingJob({...editingJob, status: e.target.value as Job['status']})}
                                    required
                                >
                                    <option value="published">Активна</option>
                                    <option value="closed">Закрыта</option>
                                    <option value="draft">Черновик</option>
                                </select>
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="description">Описание</label>
                                <textarea
                                    id="description"
                                    value={editingJob.description}
                                    onChange={(e) => setEditingJob({...editingJob, description: e.target.value})}
                                    required
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="requirements">Требования</label>
                                <textarea
                                    id="requirements"
                                    value={editingJob.requirements}
                                    onChange={(e) => setEditingJob({...editingJob, requirements: e.target.value})}
                                    required
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="salary">Зарплата</label>
                                <input
                                    type="text"
                                    id="salary"
                                    value={editingJob.salary}
                                    onChange={(e) => setEditingJob({...editingJob, salary: e.target.value})}
                                    required
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="location">Локация</label>
                                <input
                                    type="text"
                                    id="location"
                                    value={editingJob.location}
                                    onChange={(e) => setEditingJob({...editingJob, location: e.target.value})}
                                    required
                                />
                            </div>
                            <div className={styles.formActions}>
                                <button type="button" className={styles.cancelButton} onClick={() => setShowEditModal(false)}>
                                    Отмена
                                </button>
                                <button type="submit" className={styles.saveButton}>
                                    Сохранить
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {showCreateModal && (
                <CreateJobModal
                    onClose={() => setShowCreateModal(false)}
                    onSave={handleCreateJob}
                />
            )}
        </div>
    );
};

export default PortalPage; 