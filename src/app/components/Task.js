"use client";

import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Task({ plant, taskArray }) {
    const [status, setStatus] = useState(taskArray[0].status);
    const [plantNickname, setPlantNickname] = useState('');

    // const handleCheckboxChange = () => {
    //     axios.put(`${process.env.NEXT_PUBLIC_SERVER_URL}/tasks/complete/${taskArray[0].id}`)
    //         .then(response => {
    //             console.log('Task marked as complete: ', response);
    //             setStatus('completed');
    //         })
    //         .catch(error => {
    //             console.log('Error marking task as complete: ', error);
    //         });
    // };

    return (
        <div className="card" style={{ borderRadius: '15px', backgroundColor: '#F3F8F2', display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '10px 0' }}>
            <div className="card-content">
                {status === 'pending' && (
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', padding: '0 20px' }}>
                        <img src={plant.plantImage} alt={plant.plantNickname} style={{ width: '60px', height: '60px', borderRadius: '30px', margin: '0 10px' }} />
                        <p style={{ color: '#4CAF50', margin: '0 10px' }}>{new Date(taskArray[0].date).toLocaleDateString()}</p>
                        <p style={{ fontSize: '1.4em', margin: '0 10px' }}>Time to {taskArray[0].taskName} {plant.plantNickname}!</p>
                    </div>
                )}
            </div>
        </div>
    );
}
