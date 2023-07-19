"use client";

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SingleTask from './SingleTask';

export default function PlantUpcomingTasks({ plantId }) {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:4000/plants/${plantId}/tasks`) //need to change
            .then(response => {
                const sortedTasks = response.data.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate)).slice(0, 5);
                setTasks(sortedTasks);
            })
            .catch(error => {
                console.log('Error fetching plant tasks: ', error);
            });
    }, [plantId]);

    if (!tasks) {
        return <div>Loading plant tasks...</div>
    }

    return (
        <div>
            <h3>Upcoming Tasks for Plant {plantId}</h3>
            {tasks.map(task => (
                <SingleTask key={task.id} task={task} />
            ))}
        </div>
    );
}
