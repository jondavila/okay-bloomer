"use client";

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import HealthRating from '../components/HealthRating';
import CareRecord from '../components/CareRecord';
import PlantUpcomingTasks from '../components/PlantUpcomingTasks';
import styles from '../userplantpage.module.css';

export default function PlantPage({ plantId }) {
    const [pastTasks, setPastTasks] = useState([]);
    const [upcomingTasks, setUpcomingTasks] = useState([]);

    // Fetch past tasks for HealthRating and CareRecord
    useEffect(() => {
        axios.get(`http://localhost:4000/plants/${plantId}/tasks`)
            .then(response => {
                const oneMonthAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
                const relevantTasks = response.data.filter(task =>
                    new Date(task.dueDate) > oneMonthAgo && (task.status === 'missed' || task.status === 'completed')
                );
                const sortedTasks = relevantTasks.sort((a, b) => new Date(b.dueDate) - new Date(a.dueDate));
                setPastTasks(sortedTasks);
            })
            .catch(error => {
                console.log('Error fetching plant tasks: ', error);
            });
    }, [plantId]);

    // Fetch all pending tasks for PlantUpcomingTasks
    useEffect(() => {
        axios.get(`http://localhost:4000/plants/${plantId}/tasks`)
            .then(response => {
                const futureTasks = response.data.filter(task =>
                    new Date(task.dueDate) > new Date() && task.status === 'pending'
                );
                const sortedTasks = futureTasks.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
                setUpcomingTasks(sortedTasks);
            })
            .catch(error => {
                console.log('Error fetching plant tasks: ', error);
            });
    }, [plantId]);

    const handleTaskCompletion = (taskId) => {
        setUpcomingTasks(upcomingTasks.map(task =>
            task.id === taskId ? { ...task, status: 'completed' } : task
        ));
    };

    return (
        <div>
            <Header pageTitle="My Plant" profileImg="/path_to_profile_image.jpg" />
            <div className={styles.container}>
                <div className="columns">
                    <div className="column is-3">
                        <div className={`card ${styles.card}`}>
                            <div className="card-content has-text-centered">
                                <HealthRating tasks={pastTasks} />
                            </div>
                        </div>
                        <div className={`card ${styles.card}`}>
                            <div className="card-content has-text-centered">
                                <CareRecord tasks={pastTasks} />
                            </div>
                        </div>
                        <div className={`has-text-centered`}>
                            <button className="button is-danger">Remove Plant</button>
                        </div>
                    </div>
                    <div className="column is-6">
                        <div className={`card ${styles.card}`}>
                            <div className="card-content has-text-centered">
                                <p className="title is-4">Name your plant here</p>
                                <p className="subtitle is-6">Common Name</p>
                                <div className="card-image">
                                    <figure className="image is-4by3">
                                        <img src="/jerry.jpg" alt="Placeholder image" />
                                    </figure>
                                </div>
                            </div>
                        </div>
                        <div className={`card ${styles.card}`}>
                            <div className="card-content has-text-centered">
                                <p className="subtitle is-6">Add a note about today:</p>
                                <div className="control">
                                    <input className="input" type="text" placeholder="Add Title"></input>
                                    <textarea className="textarea mt-3" placeholder="Journal Entry..."></textarea>
                                </div>
                                <button className="button is-info is-success">Add to Journal</button>
                            </div>
                        </div>
                    </div>
                    <div className="column is-3">
                        <div className={`card ${styles.upcomingTasksCard}`}>
                            <div className="card-content has-text-centered">
                                <PlantUpcomingTasks tasks={upcomingTasks} onTaskComplete={handleTaskCompletion} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
