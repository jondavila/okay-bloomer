'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bulma/css/bulma.min.css';
import styles from '../sanctuary.module.css';
import Header from '../components/Header';
import AtAGlance from '../components/AtGlance';


export default function Sanctuary() {
    const [plants, setPlants] = useState([]);
    const [isLoading, setLoading] = useState(true);


    useEffect(() => {
        axios.get('http://localhost:4000/plants') //temporary placeholder for now, will replace.
            .then(response => {
                setPlants(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.log('Error fetching plant data: ', error);
                setLoading(false);
            });
    }, []);


    if (isLoading) {
        return <div>Loading Your Plant Sanctuary...</div>
        // will add some animation or sophisitication here later
    }


    return (
        <>
            <Header pageTitle="Plant Sanctuary" profileImg="/path_to_profile_image.jpg" />
            <div className="container">
                <div className="columns is-multiline">
                    <div className="column is-2">
                        <p>At a Glance:</p>
                        <div className="card">
                            <div className="card-content">
                                <AtAGlance />
                            </div>
                        </div>
                    </div>
                    <div className="column is-6">
                        <p>My Plants:</p>
                        {plants.map((plant, index) => (
                            <div className="card" key={index}>
                                <div className="card-content">
                                    {/* Populate with plant data */}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="column is-4">
                        <p>Nursery/Care:</p>
                        <div className="card">
                            <div className="card-content">
                                {/* placing nursery/care contents here */}
                            </div>
                        </div>
                        <p>Journal:</p>
                        <div className="card">
                            <div className="card-content">
                                {/* placing journal contents here */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}



