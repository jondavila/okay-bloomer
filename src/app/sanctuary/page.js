'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bulma/css/bulma.min.css';
import styles from '../sanctuary.module.css';
import Header from '../components/Header';
import AtAGlance from '../components/AtGlance';
import PlantJournal from '../components/PlantJournal';
import PlantFaq from '../components/PlantFaq';
import UserPlantCardGrid from '../components/UserPlantCardGrid';



export default function Sanctuary() {
    const [plants, setPlants] = useState([]);
    const [tasks, setTasks] = useState([]);
    const [journalEntry, setJournalEntry] = useState([]);
    const [user, setUser] = useState(null);
    const [isLoading, setLoading] = useState(true);


    useEffect(() => {
        const userEmail = localStorage.getItem('email');
        axios.get('http://localhost:8000/sanctuary/user/' + userEmail)
            .then(response => {
                setUser(response.data.user);
                setPlants(response.data.user.plants[0].userPlants);
                setJournalEntry(response.data.user.plants[0].journalEntries);
                console.log('JON IS WEARING LADIES UNDERWEAR', response.data);
                setLoading(false);
                console.log('CALEB WEARS BRAS', plants);
            })
            .catch(error => {
                console.log('Error fetching plant data: ', error);
                setLoading(false);
            });
    }, []);


    if (isLoading) {
        return <div>Loading Your Plant Sanctuary...</div>;
        // will add some animation or sophisitication here later
    }


    return (
        <>
            <Header pageTitle="Plant Sanctuary" profileImg="/path_to_profile_image.jpg" />
            <div className="container">
                <div className="columns is-multiline">
                    <div className="column is-3">
                        <br />
                        <div className="card">
                            <div className="card-content">
                                <AtAGlance />
                            </div>
                        </div>
                    </div>
                    <div className="column is-6">
                        <p>My Plants:</p>
                        <UserPlantCardGrid plantCardsArray={plants} />
                    </div>
                    <div className="column is-3">
                        <br />
                        <div className="card">
                            <div className="card-content">
                                <PlantFaq />
                            </div>
                        </div>
                        <br />
                        <div className="card">
                            <div className="card-content">
                                <PlantJournal />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
