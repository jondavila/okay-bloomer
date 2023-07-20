"use client";

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Task from './Task';
import CustomCalendar from './CustomCalendar';
import CircularChart from './CircularChart';
import styles from "../atglance.module.css";
import TaskGrid from './TaskGrid';

export default function AtAGlance({ plants }) {
    const [sanctuaryData, setSanctuaryData] = useState({
        tasks: [],
        calendarData: [],
    });

    // useEffect(() => {
    //     axios.get('http://localhost:8000/sanctuary/tasks')
    //         .then(response => {
    //             // filter the tasks to get only the pending tasks
    //             const pendingTasks = response.data.filter(task => task.status === 'pending');
    //             // sorting the tasks based on dueDate and only taking the first five
    //             const sortedTasks = pendingTasks.sort((a, b) => new Date(a.date) - new Date(b.date)).slice(0, 5);

    //             setSanctuaryData(prevState => ({ ...prevState, tasks: sortedTasks }));
    //         })
    //         .catch(error => {
    //             console.log('Error fetching sanctuary data: ', error);
    //         });
    // }, []);

    // if (!sanctuaryData) {
    //     return <div>Loading sanctuary data...</div>;
    // }

    return (
        <div>
            <p className="card-header-title">At a Glance:</p>
            <br />
            <div className="card">
                <div className="card-content">
                    <h3>Calendar View</h3>
                    <CustomCalendar calendarData={sanctuaryData.calendarData} />
                </div>
            </div>
            <br />
            <div className="card">
                <div className="card-content">
                    <h3>Health Stats</h3>
                    <div className={styles.flexWrapper}>
                        <CircularChart color="green" healthStatus="good" />
                        <CircularChart color="orange" healthStatus="okay" />
                        <CircularChart color="red" healthStatus="poor" />
                    </div>
                </div>
            </div>
        </div>
    );
}
