"use client";

import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Task() {
    const [task, setTask] = useState({
        taskName: '',
        status: '',
        dueDate: '',
    });
    const [isLoading, setLoading] = useState(true);
    const [isError, setError] = useState(false);

    // Fetch task data
    useEffect(() => {
        const fetchData = async () => {
            setError(false);
            setLoading(true);

            try {
                const result = await axios.get('https://idktheroute/task/id');
                setTask(result.data);
            } catch (error) {
                setError(true);
            }

            setLoading(false);
        };

        fetchData();
    }, []);

    // Update status
    const handleCheckboxChange = async () => {
        try {
            const updatedTask = { ...task, status: 'completed' };
            await axios.put('https://yourapi.com/task/id', updatedTask);
            setTask(updatedTask);
        } catch (error) {
            console.error('Failed to update task status:', error);
        }
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error loading task.</div>;
    }

    return (
        <div>
            <h1>{task.taskName}</h1>
            <p>Status: {task.status}</p>
            <p>Due Date: {task.dueDate}</p>
            {task.status === 'pending' && (
                <input
                    type="checkbox"
                    onChange={handleCheckboxChange}
                    checked={task.status === 'completed'}
                />
            )}
        </div>
    );
}
