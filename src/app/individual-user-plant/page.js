import React from 'react';
import Header from '../components/Header';

export default function PlantPage() {
    return (
        <div>
            <Header pageTitle="Jerry" profileImg="/path_to_profile_image.jpg" />
            <br />
            <div className="container">
                <div className="columns is-multiline">
                    <div className="column is-3">
                        <div className="card">
                            <div className="card-content has-text-centered">
                                <p>Your Plant is at</p>
                                <p>Stat Bar Image</p>
                            </div>
                        </div>
                        <br />
                        <div className="card">
                            <div className="card-content has-text-centered">
                                <p>Care Schedule</p>
                                <p>Past Care Record</p>
                            </div>
                        </div>
                        <br />
                        <div className="has-text-centered">
                            <button class="button is-danger">Remove Plant</button>
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
                                <input className="input" type="text" placeholder="Journal Entry...">
                                </input>
                                <br />
                                <div className="has-text-centered">
                                    <br />
                                    <button className="button is-info is-success">Add to Journal</button>                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column is-3">
                        <div className="card">
                            <div className="card-content has-text-centered">
                                <p>Tasks for Today:</p>
                                {/* plug in today's tasks component */}
                            </div>
                        </div>
                        <br />
                        <div className="card">
                            <div className="card-content has-text-centered">
                                <p>Upcoming Tasks:</p>
                                {/* plug in upcoming tasks component */}
                            </div>
                        </div>
                        <br />
                        <div className="has-text-centered">
                            <button class="button is-info">Learn More About My Plant!</button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}
