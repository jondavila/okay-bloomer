"use client";

import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function CareRecord({ plantId }) {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:4000/plants/${plantId}/tasks`) //need to change
            .then(response => {
                const filteredAndSortedTasks = response.data
                    .filter(task => task.status !== 'pending' && new Date() - new Date(task.dueDate) <= 30 * 24 * 60 * 60 * 1000)
                    .sort((a, b) => new Date(b.dueDate) - new Date(a.dueDate));
                setTasks(filteredAndSortedTasks);
            })
            .catch(error => {
                console.log('Error fetching plant tasks: ', error);
            });
    }, [plantId]);

    if (!tasks) {
        return <div>Loading Care Record...</div>
    }

    return (
        <div>
            <h3>Care Record for Plant {plantId}</h3>
            {tasks.map(task => (
                <div key={task.id}>
                    <span>{task.dueDate}</span>
                    <span>{task.taskName}</span>
                    <span>Status: {task.status}</span>
                </div>
            ))}
        </div>
    );
}
