import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../circularchart.module.css';

export default function CircularChart({ color, healthStatus }) {
    const [percentage, setPercentage] = useState(0);

    useEffect(() => {
        axios.get('http://localhost:8000/sanctuary/plants')
            .then(response => {
                const totalPlants = response.data.length;
                if (totalPlants === 0) {
                    setPercentage(0);
                    return;
                }
                const specificHealthPlants = response.data.filter(plant => plant.health === healthStatus).length;
                setPercentage((specificHealthPlants / totalPlants) * 100);
            })
            .catch(error => {
                console.log('Error fetching plant health data: ', error);
            });
    }, [healthStatus]);

    const strokeDashArray = `${percentage}, 100`;

    return (
        <div className={styles.singleChart}>
            <svg viewBox="0 0 36 36" className={`${styles.circularChart} ${styles[color]}`}>
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
                <text x="18" y="20.35" className={styles.percentage}>{percentage.toFixed(2)}%</text>
            </svg>
        </div>
    )
}
