"use client";

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // import calendar css for styling
import styles from "../atglance.module.css";

export default function AtAGlance() {
    const [sanctuaryData, setSanctuaryData] = useState({
        tasks: [],
        calendarData: [],
        healthStats: {
            happy: 0,
            okay: 0,
            sad: 0
        }
    });

    useEffect(() => {
        // need to replace with actual API endpoint
        axios.get('http://localhost:4000/sanctuaryData')
            .then(response => {
                setSanctuaryData(response.data);
            })
            .catch(error => {
                console.log('Error fetching sanctuary data: ', error);
            });
    }, []);

    // ff the data hasn't loaded yet, show a loading message
    if (!sanctuaryData) {
        return <div>Loading sanctuary data...</div>
    }

    const handleTaskCompletion = (taskId) => {
        axios.put(`http://localhost:4000/tasks/complete/${taskId}`)
            .then(response => {
                console.log('Task marked as complete: ', response);
                // after task is marked as complete, refresh the data
                axios.get('http://localhost:4000/sanctuaryData')
                    .then(response => {
                        setSanctuaryData(response.data);
                    })
                    .catch(error => {
                        console.log('Error fetching sanctuary data: ', error);
                    });
            })
            .catch(error => {
                console.log('Error marking task as complete: ', error);
            });
    }

    return (
        <div>
            <div className="card">
                <div className="card-content">
                    <h3>Upcoming Tasks</h3>
                    {sanctuaryData.tasks.map((task, index) => (
                        <div className="card" key={index}>
                            <div className="card-content">
                                <input type="checkbox" onClick={() => handleTaskCompletion(task.id)} />
                                <span>{task.date}</span>
                                <span>{task.name}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.atAGlance}>
                <h3>Calendar View</h3>
                <Calendar className={styles.myCalendar}
                    tileContent={({ date, view }) => {
                        // check if there is a task on the current date
                        if (sanctuaryData.calendarData.some(task => task.date === date.toLocaleDateString())) {
                            // if there is, return a black dot
                            return <span>&#8226;</span>
                        }
                    }}
                />
            </div>
            <div className="card">
                <div className="card-content">
                    <h3>Health Stats</h3>
                    <div>
                        <div>Happy: {sanctuaryData.healthStats.happy}%</div>
                        <div>Okay: {sanctuaryData.healthStats.okay}%</div>
                        <div>Sad: {sanctuaryData.healthStats.sad}%</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
