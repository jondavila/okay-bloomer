"use client";
"use strict";

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import Header from '../components/Header';
import HealthRating from '../components/HealthRating';
import CareRecord from '../components/CareRecord';
import PlantUpcomingTasks from '../components/PlantUpcomingTasks';
import DeletePlant from '../components/DeletePlant';
import styles from '../userplantpage.module.css';

export default function PlantPage() {
    const [plant, setPlant] = useState(null);
    const [pastTasks, setPastTasks] = useState([]);
    const [upcomingTasks, setUpcomingTasks] = useState([]);


    // Initialize useForm
    // const { register, handleSubmit, reset } = useForm();

    // Form submission handler
    // const onSubmit = data => {
    //     // You might want to include authentication token in the headers if needed
    //     axios.post(`http://localhost:4000/plants/${plantId}/journal`, data)
    //         .then(response => {
    //             console.log(response);
    //             reset(); // Clear form fields after successful submission
    //         })
    //         .catch(error => {
    //             console.log('Error posting journal entry: ', error);
    //         });
    // };

    // Fetch past tasks for HealthRating and CareRecord
    // useEffect(() => {
    //     axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/plants/${plantId}/tasks`)
    //         .then(response => {
    //             console.log('JONATHAN HATES SYDNEY', response.data);
    //             // const oneMonthAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
    //             // const relevantTasks = response.data.filter(task =>
    //             //     new Date(task.dueDate) > oneMonthAgo && (task.status === 'missed' || task.status === 'completed')
    //             // );
    //             // const sortedTasks = relevantTasks.sort((a, b) => new Date(b.dueDate) - new Date(a.dueDate));
    //             // setPastTasks(sortedTasks);
    //         })
    //         .catch(error => {
    //             console.log('Error fetching plant tasks: ', error);
    //         });
    // }, []);

    // // Fetch all pending tasks for PlantUpcomingTasks
    // useEffect(() => {
    //     axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/plants/${plantId}/tasks`)
    //         .then(response => {
    //             const futureTasks = response.data.filter(task =>
    //                 new Date(task.dueDate) > new Date() && task.status === 'pending'
    //             );
    //             const sortedTasks = futureTasks.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
    //             setUpcomingTasks(sortedTasks);
    //         })
    //         .catch(error => {
    //             console.log('Error fetching plant tasks: ', error);
    //         });
    // }, []);

    useEffect(() => {
        const plantId = localStorage.getItem('plant-id');
        axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/plantDetails/${plantId}`)
            .then(response => {
                console.log('response', response);
                setPlant(response.data.plantDetail);

            })
            .catch(error => {
                console.log('Error fetching plant: ', error);
            });
    }, []);

    // const handleTaskCompletion = (taskId) => {
    //     setUpcomingTasks(upcomingTasks.map(task =>
    //         task.id === taskId ? { ...task, status: 'completed' } : task
    //     ));
    // };

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
                                {/* <CareRecord tasks={plantId} /> */}
                            </div>
                        </div>
                        <div className={`has-text-centered`}>
                            <button className="button is-danger">Remove Plant</button>
                        </div>
                    </div>
                    <div className="column is-6">
                        <div className={`card ${styles.card}`}>
                            <div className="card-content has-text-centered">
                                <p className="title is-4">{ }</p>
                                <p className="subtitle is-6">{plant.commonName}</p>
                                <div className="card-image">
                                    <figure className="image is-4by3">
                                        <img src={plant.image} alt="Placeholder image" />
                                    </figure>
                                </div>
                            </div>
                        </div>
                        <div className={`card ${styles.card}`}>
                            <div className="card-content has-text-centered">
                                <p className="subtitle is-6">Add a note about today:</p>
                                {/* <div className="control">
                                    <input className="input" type="text" placeholder="Add Title"></input>
                                    <textarea className="textarea mt-3" placeholder="Journal Entry..."></textarea>
                                </div> */}
                                <button className="button is-info is-success">Add to Journal</button>
                            </div>
                        </div>
                    </div>
                    <div className="column is-3">
                        <div className={`card ${styles.upcomingTasksCard}`}>
                            <div className="card-content has-text-centered">
                                {/* <PlantUpcomingTasks tasks={upcomingTasks} onTaskComplete={handleTaskCompletion} /> */}
                            </div>
                        </div>
                        <br />
                        <div className={`has-text-centered ${styles.centerButton}`}>
                            {/* <Link href={`/individual-plant/${plantId}`}>
                            <button className="button is-link is-rounded">Learn More About My Plant</button>
                        </Link> */}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}
