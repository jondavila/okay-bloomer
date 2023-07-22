import axios from 'axios';
import React from 'react';

export default function SingleTask({ task, onComplete }) {
    const handleTaskCompletion = () => {
        const userEmail = localStorage.getItem('email');
        axios.put(`${process.env.NEXT_PUBLIC_SERVER_URL}/tasks/${userEmail}/${task._id}`, { status: 'completed' })
            .then(response => {
                if (response.status === 200) {
                    onComplete(task._id);
                    console.log("task marked complete??,", response);
                }
            })
            .catch(error => {
                console.error('Error marking task as complete: ', error);
            });
    };

    return (
        <div className="card" style={{ borderRadius: '15px', backgroundColor: '#F3F8F2', display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '10px 0', padding: '10px' }}>
            <h4 style={{ fontSize: '1.2em', margin: '0 10px' }}>{task.taskName}</h4>
            <p style={{ color: '#4CAF50', margin: '0 10px' }}>Due Date: {new Date(task.date).toLocaleDateString()}</p>
            <input type="checkbox" onClick={handleTaskCompletion} />
        </div>
    );
}
