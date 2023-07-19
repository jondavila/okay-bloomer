'use client';

import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import axios from 'axios';

export default function IndividualPlant() {
    const [plant, setPlant] = useState(null);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        const plantId = localStorage.getItem('plant-id');

        axios.get('http://localhost:8000/plantDetails/' + plantId) // insert api url
            .then((response) => {
                const foundPlant = response.data;
                console.log('found plant, yay', foundPlant);
                setPlant(foundPlant);
                setLoading(false);
            })
            .catch((error) => {
                console.log('error: ', error);
            });

    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Header pageTitle="Plant Name" profileImg="/path_to_profile_image.jpg" />
            <br />
            <div className="container">
                <div className="columns is-multiline">
                    <div className="column is-4">
                        <div className="card">
                            {plant && plant.image &&
                                <div className="card-image">
                                    <figure className="image is-4by3">
                                        <img src={plant.image} alt={`Plant ${plant.commonName}`} />
                                    </figure>
                                </div>
                            }
                        </div>
                    </div>
                    <div className="column is-8">
                        <div className="card">
                            <div className="card-content has-text-centered">
                                {plant.commonName && <p className="title is-4">{plant.commonName}</p>}
                            </div>
                            <br />
                            <div style={{ padding: '20px' }}>
                                {plant.wateringDescription && <p className="subtitle is-6">Watering: {plant.wateringDescription}</p>}
                                {plant.sunlightDescription && <p className="subtitle is-6">Sunlight: {plant.sunlightDescription}</p>}
                                {plant.pruningDescription && <p className="subtitle is-6">Pruning: {plant.pruningDescription}</p>}
                            </div>
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
