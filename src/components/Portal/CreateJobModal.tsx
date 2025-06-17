import React, { useState } from 'react';
import styles from './PortalPage.module.css';

interface CreateJobModalProps {
    onClose: () => void;
    onSave: (job: any) => void;
}

type EmploymentType = 'full-time' | 'part-time' | 'contract';

interface NewJob {
    title: string;
    department: string;
    status: 'draft';
    description: string;
    requirements: string;
    salary: string;
    location: string;
    type: EmploymentType;
    experience: string;
    skills: string;
    benefits: string;
    contactEmail: string;
    contactPhone: string;
}

const CreateJobModal: React.FC<CreateJobModalProps> = ({ onClose, onSave }) => {
    const [newJob, setNewJob] = useState<NewJob>({
        title: '',
        department: '',
        status: 'draft',
        description: '',
        requirements: '',
        salary: '',
        location: '',
        type: 'full-time',
        experience: '',
        skills: '',
        benefits: '',
        contactEmail: '',
        contactPhone: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSave({
            ...newJob,
            id: Date.now(), // Временное решение для демо
            candidates: 0,
            createdAt: new Date().toISOString().split('T')[0]
        });
    };

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <button 
                    className={styles.closeButton}
                    onClick={onClose}
                >
                    ×
                </button>
                <h2>Создание новой вакансии</h2>
                <form onSubmit={handleSubmit} className={styles.editForm}>
                    <div className={styles.formGroup}>
                        <label htmlFor="title">Название вакансии *</label>
                        <input
                            type="text"
                            id="title"
                            value={newJob.title}
                            onChange={(e) => setNewJob({...newJob, title: e.target.value})}
                            required
                            placeholder="Например: Senior Frontend Developer"
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="department">Отдел *</label>
                        <input
                            type="text"
                            id="department"
                            value={newJob.department}
                            onChange={(e) => setNewJob({...newJob, department: e.target.value})}
                            required
                            placeholder="Например: Разработка"
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="type">Тип занятости *</label>
                        <select
                            id="type"
                            value={newJob.type}
                            onChange={(e) => setNewJob({...newJob, type: e.target.value as EmploymentType})}
                            required
                        >
                            <option value="full-time">Полная занятость</option>
                            <option value="part-time">Частичная занятость</option>
                            <option value="contract">Проектная работа</option>
                        </select>
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="experience">Требуемый опыт *</label>
                        <input
                            type="text"
                            id="experience"
                            value={newJob.experience}
                            onChange={(e) => setNewJob({...newJob, experience: e.target.value})}
                            required
                            placeholder="Например: от 3 лет"
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="description">Описание вакансии *</label>
                        <textarea
                            id="description"
                            value={newJob.description}
                            onChange={(e) => setNewJob({...newJob, description: e.target.value})}
                            required
                            placeholder="Опишите основные обязанности и задачи"
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="requirements">Требования *</label>
                        <textarea
                            id="requirements"
                            value={newJob.requirements}
                            onChange={(e) => setNewJob({...newJob, requirements: e.target.value})}
                            required
                            placeholder="Перечислите необходимые навыки и требования"
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="skills">Ключевые навыки *</label>
                        <input
                            type="text"
                            id="skills"
                            value={newJob.skills}
                            onChange={(e) => setNewJob({...newJob, skills: e.target.value})}
                            required
                            placeholder="Например: React, TypeScript, Redux"
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="salary">Зарплата *</label>
                        <input
                            type="text"
                            id="salary"
                            value={newJob.salary}
                            onChange={(e) => setNewJob({...newJob, salary: e.target.value})}
                            required
                            placeholder="Например: от 250 000 ₽"
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="location">Локация *</label>
                        <input
                            type="text"
                            id="location"
                            value={newJob.location}
                            onChange={(e) => setNewJob({...newJob, location: e.target.value})}
                            required
                            placeholder="Например: Москва"
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="benefits">Преимущества</label>
                        <textarea
                            id="benefits"
                            value={newJob.benefits}
                            onChange={(e) => setNewJob({...newJob, benefits: e.target.value})}
                            placeholder="Опишите преимущества работы в вашей компании"
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="contactEmail">Email для связи *</label>
                        <input
                            type="email"
                            id="contactEmail"
                            value={newJob.contactEmail}
                            onChange={(e) => setNewJob({...newJob, contactEmail: e.target.value})}
                            required
                            placeholder="hr@company.com"
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="contactPhone">Телефон для связи</label>
                        <input
                            type="tel"
                            id="contactPhone"
                            value={newJob.contactPhone}
                            onChange={(e) => setNewJob({...newJob, contactPhone: e.target.value})}
                            placeholder="+7 (999) 123-45-67"
                        />
                    </div>

                    <div className={styles.formActions}>
                        <button type="button" className={styles.cancelButton} onClick={onClose}>
                            Отмена
                        </button>
                        <button type="submit" className={styles.saveButton}>
                            Создать вакансию
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateJobModal; 