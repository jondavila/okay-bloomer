import React from 'react';
import 'bulma/css/bulma.min.css'

export default function CareRecord({ tasks }) {
    const pastTasks = tasks
        .filter(task => task.status === 'completed' || task.status === 'missed')
        .sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate))
        .slice(0, 5);

    if (!tasks) {
        return <div>Loading plant tasks...</div>
    }

    return (
        <div>
            <h3>Care Record</h3>
            {pastTasks.map((task) => (
                <div key={task}>
                    <span>{task.date}</span>
                    <span>{task.status}</span>
                </div>
            ))}
        </div>
    );
}
