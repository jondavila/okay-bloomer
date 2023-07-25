import React from 'react';

export default function CompletedTask({ task }) {
    return (
        <div className="card" style={{ borderRadius: '15px', backgroundColor: '#F3F8F2', display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '10px 0', padding: '10px' }}>
            <h4 style={{ fontSize: '1.2em', margin: '0 10px' }}>{task.taskName}</h4>
            <p style={{ color: '#4CAF50', margin: '0 10px' }}>Completed Date: {new Date(task.date).toLocaleDateString()}</p>
            <p style={{ margin: '0 10px' }}>{task.status === 'completed' ? "✅" : "❌"}</p>
        </div>
    );
}
