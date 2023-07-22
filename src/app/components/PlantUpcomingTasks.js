import React from 'react';
import SingleTask from './SingleTask';

export default function PlantUpcomingTasks({ tasks, onTaskComplete }) {
    const upcomingTasks = tasks.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate)).slice(0, 5);

    if (!tasks) {
        return <div>Loading plant tasks...</div>
    }

    return (
        <div>
            <h3>Upcoming Tasks</h3>
            {upcomingTasks.map(task => (
                <SingleTask key={task._id} task={task} onComplete={onTaskComplete} />
            ))}
        </div>
    );
}
