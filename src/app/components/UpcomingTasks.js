"use client";

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UpcomingTasks = ({ plantId }) => {
    const [plantData, setPlantData] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:4000/userPlants/${plantId}`) //again, gotta plug in correct api endpoint here
            .then(response => {
                setPlantData(response.data);
            })
            .catch(error => {
                console.log('Error fetching plant data: ', error);
            });
    }, [plantId]);

    const handleTaskCompletion = (taskId) => {
        axios.put(`http://localhost:4000/userPlants/${plantId}/tasks/${taskId}`, { status: 'completed' })
            .then(response => {
                setPlantData(response.data);
            })
            .catch(error => {
                console.log('Error updating task: ', error);
            });
    }

    if (!plantData) {
        return <div>Loading upcoming tasks...</div>
    }

    return (
        <div>
            <h3>Upcoming Tasks</h3>
            {plantData.tasks.filter(task => task.status === 'pending').map((task, index) => (
                <div key={index}>
                    <input type="checkbox" onClick={() => handleTaskCompletion(task.id)} />
                    <span>{task.date}</span>
                </div>
            ))}
        </div>
    );
}

export default UpcomingTasks;
