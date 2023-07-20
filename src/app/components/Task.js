"use client";

import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Task({ plant, taskArray }) {
    const [status, setStatus] = useState(taskArray[0].status);
    const [plantNickname, setPlantNickname] = useState('');

    const handleCheckboxChange = () => {
        axios.put(`http://localhost:4000/tasks/complete/${taskArray[0].id}`)
            .then(response => {
                console.log('Task marked as complete: ', response);
                setStatus('completed');
            })
            .catch(error => {
                console.log('Error marking task as complete: ', error);
            });
    };

    return (
        <div className="card">
            <div className="card-content">
                {status === 'pending' && (
                    <input type="checkbox" onClick={handleCheckboxChange} />
                )}
                <span>{taskArray[0].date}</span>
                <span>{taskArray[0].taskName}</span>
                <span>{plant.plantNickname}</span>
                {/* the plantnickname is currently not acconted for in backend. */}
            </div>
        </div>
    );
}
