"use client";

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CustomCalendar from './CustomCalendar';
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
        axios.get('http://localhost:4000/sanctuaryData')
            .then(response => {
                setSanctuaryData(response.data);
            })
            .catch(error => {
                console.log('Error fetching sanctuary data: ', error);
            });
    }, []);

    if (!sanctuaryData) {
        return <div>Loading sanctuary data...</div>
    }

    const handleTaskCompletion = (taskId) => {
        axios.put(`http://localhost:4000/tasks/complete/${taskId}`)
            .then(response => {
                console.log('Task marked as complete: ', response);
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
            <p className="card-header-title">At a Glance:</p>
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
