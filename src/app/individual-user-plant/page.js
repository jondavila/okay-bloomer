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
    const [user, setUser] = useState(null);
    const [pastTasks, setPastTasks] = useState([]);
    const [upcomingTasks, setUpcomingTasks] = useState([]);
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [name, setName] = useState([]);


    const handleTaskCompletion = (taskId) => {
        const completedTask = upcomingTasks.find(task => task._id === taskId);
        if (completedTask) {
            completedTask.status = 'completed'; // or 'missed', depending on your logic
            setPastTasks(prevTasks => [...prevTasks, completedTask]);
            setUpcomingTasks(prevTasks => prevTasks.filter(task => task._id !== taskId));
        }
    };


    useEffect(() => {
        const plantId = localStorage.getItem('plant-id');
        const email = localStorage.getItem('email');
        const userPlantId = localStorage.getItem('plantId');


        axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/plantDetails/${plantId}`)
            .then(response => {
                console.log('plant details =================', response.data);
                setPlant(response.data.plantDetail);
            })
            .catch(error => {
                console.log('Error fetching plant: ', error);
            });

        axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/sanctuary/user/${email}`)
            .then(response => {
                console.log('boogie woogie =================', response.data);
                const targetPlant = response.data.user.plants[0].userPlants.find(plant => plant.plantId.toString() === plantId);
                if (targetPlant) {
                    setUpcomingTasks(targetPlant.plantTasks);
                    setName(targetPlant.plantNickname);
                    console.log("found the name===>", targetPlant.plantNickname)
                    console.log('Found the tasks!!', targetPlant.plantTasks);
                    console.log('I want to see upcoming tasks ==>', upcomingTasks);
                } else {
                    console.log('No plant with the given plantId found');
                }
                setLoading(false);
            })
            .catch(error => {
                console.log('Error fetching user or plant data: ', error);
                setLoading(false);
            });
    }, []);


    if (!plant) return (<div>Loading...</div>);

    console.log('plant', plant);

    return (
        <div>
            <Header pageTitle="My Plant" profileImg="/path_to_profile_image.jpg" />
            <div className={styles.container}>
                <div className="columns">
                    <div className="column is-3 animate__animated animate__fadeInLeft">
                        <div className={'card'}>
                            <div className="card-content has-text-centered">
                                <HealthRating tasks={pastTasks} />
                            </div>
                        </div>
                        <div className={'card'}>
                            <div className="card-content has-text-centered">
                                <CareRecord tasks={pastTasks} />
                            </div>
                        </div>
                        <div className={`has-text-centered`}>
                            <button className="button is-danger">Remove Plant</button>
                        </div>
                    </div>
                    <div className="column is-6 animate__animated animate__fadeInDown">
                        <div className={'card'}>
                            <div className="card-content has-text-centered">
                                <p className="title is-4">{ }</p>
                                <p className="subtitle is-6" style={{ fontSize: '2em', fontFamily: 'Arial, sans-serif', fontWeight: 'bold', color: '#333' }}>{name}</p>
                                <div className="card-image">
                                    <figure className="image is-4by3">
                                        <img src={plant.image} alt="Placeholder image" />
                                    </figure>
                                </div>
                            </div>
                        </div>
                        {/* <div className={'card'}> */}
                        {/* <div className="card-content has-text-centered"> */}
                        {/* <p className="subtitle is-6">Add a note about today:</p> */}
                        {/* <div className="control">
                                    <input className="input" type="text" placeholder="Add Title"></input>
                                    <textarea className="textarea mt-3" placeholder="Journal Entry..."></textarea>
                                </div> */}
                        {/* <button className="button is-info is-success">Add to Journal</button> */}
                        {/* </div> */}
                        {/* </div> */}
                    </div>
                    <div className="column is-3 animate__animated animate__fadeInRight">
                        <div className={'card'}>
                            <div className="card-content has-text-centered">
                                <PlantUpcomingTasks tasks={upcomingTasks} onTaskComplete={handleTaskCompletion} />
                            </div>
                        </div>
                        <br />
                        <div className={'has-text-centered'}>
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
