import React from 'react';

export default function CareRecord({ tasks }) {
    return (
        <div>
            <h3>Care Record</h3>
            {/* {tasks.map((task, index) => (
                <div key={index}>
                    <h4>{task.taskName}</h4>
                    <p>Status: {task.status}</p>
                    <p>Due Date: {task.dueDate}</p>
                </div>
            ))} */}
        </div>
    );
}
