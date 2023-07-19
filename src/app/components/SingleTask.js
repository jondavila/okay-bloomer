"use client";

import React from 'react';
import axios from 'axios';

export default function SingleTask({ task }) {
    const handleTaskCompletion = () => {
        axios.put(`http://localhost:4000/tasks/complete/${task.id}`) // again, need to replace
            .then(response => {
                console.log('Task marked as complete: ', response);
            })
            .catch(error => {
                console.log('Error marking task as complete: ', error);
            });
    }

    return (
        <div>
            <input
                type="checkbox"
                onChange={handleTaskCompletion}
                disabled={task.status !== 'pending'}
            />
            <span>{task.dueDate}</span>
            <span>{task.taskName}</span>
            <span>{task.nickname}</span>
        </div>
    );
}
