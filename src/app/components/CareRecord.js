"use client";
"use strict";

import React from 'react';
import axios from 'axios';
import styles from "./CareRecord.module.css";

export default function CareRecord() {
    const [tasks, setTasks] = React.useState([]);

    React.useEffect(() => {
        axios.get('http://localhost:4000/tasks') // replace with actual endpoint
            .then(response => {
                setTasks(response.data);
            })
            .catch(error => {
                console.log('Error fetching tasks data: ', error);
            });
    }, []);

    const completedAndMissedTasks = tasks.filter(task => task.status !== 'pending');

    if (!tasks.length) {
        return <div>Loading tasks data...</div>
    }

    return (
        <div className={styles.careRecord}>
            <h2>Care Record</h2>
            {completedAndMissedTasks.map((task, index) => (
                <div className="card" key={index}>
                    <div className="card-content">
                        <span>{task.date}</span>
                        <span>{task.name}</span>
                        <span>Status: {task.status}</span>
                    </div>
                </div>
            ))}
        </div>
    );
}
