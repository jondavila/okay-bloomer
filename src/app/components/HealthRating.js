import React from 'react';
import './HealthRating.css';

export default function HealthRating({ tasks }) {
    const completedTasksCount = tasks.filter(task => task.status === 'completed').length;
    const healthScore = tasks.length !== 0 ? Math.floor((completedTasksCount / tasks.length) * 100) : 0;

    return (
        <div>
            <h3>Health Rating</h3>
            <svg viewBox="0 0 36 36" className="circular-chart">
                <path className="circle-bg"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                <path className="circle"
                    stroke-dasharray={`${healthScore}, 100`}
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                <text x="18" y="20.35" className="percentage">{healthScore}%</text>
            </svg>
        </div>
    );
}
