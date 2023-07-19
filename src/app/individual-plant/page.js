import React from 'react';
import Header from '../components/Header';

export default function IndividualPlant() {
    return (
        <div>
            <Header pageTitle="Plant Name" profileImg="/path_to_profile_image.jpg" />
            <br />
            <div className="container">
                <div className="columns is-multiline">
                    <div className="column is-4">
                        <div className="card">
                            <div className="card">
                                <div className="card-image">
                                    <figure className="image is-4by3">
                                        <img src="/placeholderplant.jpg" alt="Placeholder image" />
                                    </figure>
                                </div>
                            </div>
                        </div>
                        <br />
                        <div className="card">
                            <div className="card-content has-text-centered">
                                <p>Information</p>
                            </div>
                        </div>
                        <br />
                        <br />
                        <div className="card">
                            <div className="card-content has-text-centered">
                                <p>More Information!</p>
                            </div>
                        </div>
                    </div>
                    <div className="column is-8">
                        <div className="card">
                            <div className="card-content has-text-centered">
                                <p className="title is-4">Plant Name</p>
                            </div>
                            <br />
                            <p className="subtitle is-6" style={{ padding: '20px' }}>Background/Description/Important Info</p>
                        </div>
                    </div>
                </div>

            </div>
            <br />
            <div className="has-text-centered">
                <p className="subtitle is-6">Add this plant to your Plant Sanctuary? </p>
                <button className="button is-info">Select!</button>
            </div>
        </div>
    );
}
