"use client";

import React from 'react';
import Header from '../components/Header';
import HealthRating from '../components/HealthRating';
import CareRecord from '../components/CareRecord';
import PlantUpcomingTasks from '../components/PlantUpcomingTasks';
import styles from '../userplantpage.module.css';

export default function PlantPage({ singlePlantTasks }) {
    return (
        <div>
            <Header pageTitle="My Plant" profileImg="/path_to_profile_image.jpg" />
            <div className={styles.container}>
                <div className="columns">
                    <div className="column is-3">
                        <div className={`card ${styles.card}`}>
                            <div className="card-content has-text-centered">
                                <HealthRating tasks={singlePlantTasks} />
                            </div>
                        </div>
                        <div className={`card ${styles.card}`}>
                            <div className="card-content has-text-centered">
                                <CareRecord tasks={singlePlantTasks} />
                            </div>
                        </div>
                        <div className={`has-text-centered ${styles.card}`}>
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
                                <PlantUpcomingTasks tasks={singlePlantTasks} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

