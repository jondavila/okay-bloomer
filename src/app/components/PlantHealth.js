"use client";

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PlantHealth = ({ plantId }) => {
    const [plantData, setPlantData] = useState(null);
    const [plantHealth, setPlantHealth] = useState(0);

    useEffect(() => {
        axios.get(`http://localhost:4000/userPlants/${plantId}`)
            .then(response => {
                setPlantData(response.data);
            })
            .catch(error => {
                console.log('Error fetching plant data: ', error);
            });
    }, [plantId]);

    useEffect(() => {
        if (plantData) {
            const careRecord = plantData.careRecord;

            let completedCount = careRecord.reduce((count, entry) => {
                return entry.status === 'completed' ? count + 1 : count;
            }, 0);

            let missedCount = careRecord.reduce((count, entry) => {
                return entry.status === 'missed' ? count + 1 : count;
            }, 0);

            let totalTasks = completedCount + missedCount;
            let healthPercentage = totalTasks ? (completedCount / totalTasks) * 100 : 100;

            setPlantHealth(healthPercentage.toFixed(2));
        }
    }, [plantData]);

    if (!plantData) {
        return <div>Loading plant data...</div>
    }

    return (
        <div>
            <h3>Plant Health</h3>
            <div>
                Health Status: {plantHealth}%
            </div>
        </div>
    );
}

export default PlantHealth;
