import React, { useState } from "react";

export default function EditNameModal({ currentName, onSave }) {
    const [newName, setNewName] = useState(currentName);
    const [isActive, setIsActive] = useState(false);

    const handleSave = () => {
        onSave(newName);
        setIsActive(false);
    };

    return (
        <div className={`modal ${isActive ? "is-active" : ""}`}>
            <div className="modal-background"></div>
            <div className="modal-content">
                <div className="box">
                    <h1 className="title">Edit Name</h1>
                    <input
                        className="input"
                        type="text"
                        value={newName}
                        onChange={(e) => setNewName(e.target.value)}
                    />
                    <button className="button is-primary" onClick={handleSave}>
                        Save
                    </button>
                    <button className="button" onClick={() => setIsActive(false)}>
                        Cancel
                    </button>
                </div>
            </div>
            <button
                className="modal-close is-large"
                aria-label="close"
                onClick={() => setIsActive(false)}
            ></button>
        </div>
    );
}
