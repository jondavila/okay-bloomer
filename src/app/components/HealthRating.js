import React from 'react';
import styles from '../healthrating.module.css';

export default function HealthRating({ tasks }) {
    const completedTasksCount = tasks.filter(task => task.status === 'completed').length;
    const healthScore = tasks.length !== 0 ? Math.floor((completedTasksCount / tasks.length) * 100) : 0;

    return (
        <div>
            <h3>Health Rating</h3>
            <svg viewBox="0 0 36 36" className={styles.circularChart}>
                <path className={styles.circleBg}
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                <path className={styles.circle}
                    stroke-dasharray={`${healthScore}, 100`}
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                <text x="18" y="20.35" className={styles.percentage}>{healthScore}%</text>
            </svg>
        </div>
    );
}
