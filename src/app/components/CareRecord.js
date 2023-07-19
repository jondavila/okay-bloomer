import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function CareRecord({ plantId }) {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:4000/plants/${plantId}/tasks`)
            .then(response => {
                const pastMonthTasks = response.data.filter(task =>
                    (task.status === 'missed' || task.status === 'completed') &&
                    new Date() - new Date(task.dueDate) <= 30 * 24 * 60 * 60 * 1000
                );
                pastMonthTasks.sort((a, b) => new Date(b.dueDate) - new Date(a.dueDate));
                setTasks(pastMonthTasks);
            })
            .catch(error => {
                console.log('Error fetching plant tasks: ', error);
            });
    }, [plantId]);

    return (
        <div>
            <h3>Care Record for Plant {plantId}</h3>
            {tasks.map((task, index) => (
                <div key={index}>
                    <h4>{task.taskName}</h4>
                    <p>Status: {task.status}</p>
                    <p>Due Date: {task.dueDate}</p>
                </div>
            ))}
        </div>
    );
}
