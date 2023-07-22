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

    useEffect(() => {
        let tasks = [];
        if (plants) {
            plants.forEach((plant) => {
                const pendingTasks = plant.plantTasks.filter(task => task.status === 'pending');
                pendingTasks.forEach(task => tasks.push({ plant, task }));
            });
            // Sort tasks by date (ascending)
            tasks.sort((a, b) => new Date(a.task.date) - new Date(b.task.date));
            // Limit to top 15 tasks
            tasks = tasks.slice(0, 15);
            setSanctuaryData(prevState => ({ ...prevState, tasks: tasks }));
        }
    }, [plants]); // Making useEffect dependent on plants so it reruns when plants data changes


    if (!sanctuaryData) {
        return <div>Loading sanctuary data...</div>;
    }

    return (
        <div>
            <p className="card-header-title">At a Glance:</p>
            <br />
            <div className="card">
                <div className="card-content">
                    <h3>Calendar View</h3>
                    <CustomCalendar calendarData={sanctuaryData.calendarData} tasks={sanctuaryData.tasks} />
                </div>
            </div>
            <br />
            <div className="card">
                <div className="card-content">
                    <h3>Sanctuary Health Status:</h3>
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
