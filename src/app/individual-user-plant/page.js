"use client";

import React from 'react';
import Header from '../components/Header';
import HealthRating from '../components/HealthRating';
import CareRecord from '../components/CareRecord';
import PlantUpcomingTasks from '../components/PlantUpcomingTasks';

export default function PlantPage({ singlePlantTasks }) {
    return (
        <div>
            <Header pageTitle="My Plant" profileImg="/path_to_profile_image.jpg" />
            <br />
            <div className="container">
                <div className="columns is-multiline">
                    <div className="column is-3">
                        <div className="card">
                            <div className="card-content has-text-centered">
                                <p>Your Plant is at</p>
                                <HealthRating tasks={singlePlantTasks} />
                            </div>
                        </div>
                        <br />
                        <div className="card">
                            <div className="card-content has-text-centered">
                                <p>Care Schedule</p>
                                <PlantUpcomingTasks tasks={singlePlantTasks} />
                            </div>
                        </div>
                        <br />
                        <div className="has-text-centered">
                            <button className="button is-danger">Remove Plant</button>
                        </div>
                        <div className="card">
                            <div className="card-content has-text-centered">
                                <p>Past Care Record</p>
                                <CareRecord tasks={singlePlantTasks} />
                            </div>
                        </div>
                    </div>
                    <div className="column is-6">
                        <div className="card">
                            <div className="card-content has-text-centered">
                                <p className="title is-4">Name your plant here</p>
                                <p className="subtitle is-6">Common Name</p>
                                <div className="card">
                                    <div className="card-image">
                                        <figure className="image is-4by3">
                                            <img src="/jerry.jpg" alt="Placeholder image" />
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br />
                        <div className="card">
                            <div className="card-content has-text-centered">
                                <p className="subtitle is-6">Add a note about today:</p>
                                <div className="card">
                                    <input className="input" type="text" placeholder="Add Title"></input>
                                    <textarea className="textarea mt-3" placeholder="Journal Entry..."></textarea>
                                </div>
                                <div className="has-text-centered">
                                    <br />
                                    <button className="button is-info is-success">Add to Journal</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}
