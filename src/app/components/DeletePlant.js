import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function DeletePlant({ plantId, onDelete }) {
    const [showConfirm, setShowConfirm] = useState(false);

    const handleDelete = () => {
        axios.delete(`http://localhost:4000/plants/${plantId}`)
            .then(response => {
                if (response.status === 200) {
                    onDelete();
                }
            })
            .catch(error => {
                console.error('Error deleting plant: ', error);
            });
    };

    if (showConfirm) {
        return (
            <div>
                <h4>Are you sure you want to delete this plant? Once you do, it's gone forever.</h4>
                <button onClick={handleDelete}>Delete</button>
                <button onClick={() => setShowConfirm(false)}>Cancel</button>
            </div>
        );
    }

    return (
        <div>
            <button onClick={() => setShowConfirm(true)}>Remove Plant</button>
        </div>
    );
}
