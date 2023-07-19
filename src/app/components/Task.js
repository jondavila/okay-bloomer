"use client";

import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Task({ task }) {
    const [status, setStatus] = useState(task.status);
    const [plantNickname, setPlantNickname] = useState('');

    useEffect(() => {
        axios.get(`http://localhost:4000/plants/${task.plantId}`)
            .then(response => {
                setPlantNickname(response.data.nickname);
            })
            .catch(error => {
                console.log('Error fetching plant data: ', error);
            });
    }, [task.plantId]);

    const handleCheckboxChange = () => {
        axios.put(`http://localhost:4000/tasks/complete/${task.id}`)
            .then(response => {
                console.log('Task marked as complete: ', response);
                setStatus('completed');
            })
            .catch(error => {
                console.log('Error marking task as complete: ', error);
            });
    }

    return (
        <div className="card">
            <div className="card-content">
                {status === 'pending' && (
                    <input type="checkbox" onClick={handleCheckboxChange} />
                )}
                <span>{task.date}</span>
                <span>{task.name}</span>
                <span>{plantNickname}</span>
            </div>
        </div>
    );
}
