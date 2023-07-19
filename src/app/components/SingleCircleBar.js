import React from 'react';
import styles from '../singlecirclebar.module.css'

export default function CircleBar({ percentage = 0, color }) {
    const strokeDashArray = `${percentage}, 100`;

    return (
        <div className={styles.singleChart}>
            <svg viewBox="0 0 36 36" className={styles[color]}>
                <path className={styles.circleBg}
                    d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path className={styles.circle}
                    strokeDasharray={strokeDashArray}
                    d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <text x="18" y="20.35" className={styles.percentage}>{percentage}%</text>
            </svg>
        </div>
    )
}
