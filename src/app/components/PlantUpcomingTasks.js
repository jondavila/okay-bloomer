import React from 'react';
import SingleTask from './SingleTask';
import 'bulma/css/bulma.min.css';

export default function PlantUpcomingTasks({ tasks, onTaskComplete }) {
    const upcomingTasks = tasks
        .filter(task => task.status === 'pending')
        .sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate))
        .slice(0, 5);

    if (!tasks) {
        return <div>Loading plant tasks...</div>
    }

    return (
        <div>
            <h3 style={{ textAlign: 'center', marginBottom: '20px' }}>Upcoming Tasks:</h3>
            {upcomingTasks.map(task => (
                <SingleTask key={task._id} task={task} onComplete={onTaskComplete} />
            ))}
        </div>
    );
}
