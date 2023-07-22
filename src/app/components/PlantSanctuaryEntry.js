import React, { use } from 'react';
import Image from 'next/image';
import 'bulma/css/bulma.min.css';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { ro } from '@faker-js/faker';


export default function PlantSanctuaryEntry({ plant, guide }) {
    const [nickname, setNickname] = useState('');
    const [wateringFrequency, setWateringFrequency] = useState('');
    const [pruningFrequency, setPruningFrequency] = useState('');
    const [sunlightFrequency, setSunlightFrequency] = useState('');
    const router = useRouter();
    let defaultGuide = {};

    if (!plant && !guide) {
        return <div>Loading...</div>;
    }

    const handleNickname = (e) => {
        if (!e.target.value) {
            setNickname('');
        }
        setNickname(e.target.value);
    };

    const handleWateringFrequency = (e) => {
        if (!e.target.value) {
            setWateringFrequency(0);
        }
        setWateringFrequency(e.target.value);
    };

    const handlePruningFrequency = (e) => {
        if (!e.target.value) {
            setPruningFrequency(0);
        }
        setPruningFrequency(e.target.value);
    };

    const handleSunlightFrequency = (e) => {
        if (!e.target.value) {
            setSunlightFrequency(0);
        }
        setSunlightFrequency(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // at the beginning of a submit function
        const userEmail = localStorage.getItem('email');
        if (!userEmail) {
            router.push('/users/login');
        }

        let newUserPlant = {};

        if (guide === defaultGuide) {
            console.log('NOOOO GUIDEEEEE');
            setWateringFrequency('0');
            newUserPlant = {
                nickName: nickname,
                waterDays: wateringFrequency, // will be number
                commonName: plant.commonName,
                plantId: plant.plantId,
                image: plant.image
            }
        } else {
            newUserPlant = {
                nickName: nickname,
                waterDays: wateringFrequency, // will be string
                commonName: plant.commonName,
                plantId: plant.plantId,
                image: plant.image
            };
        }

        console.log('newUserPlant', newUserPlant);
        axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/sanctuary/plants/new/${userEmail}`, newUserPlant)
            .then(response => {
                console.log('response.data', response.data);
            })
            .catch(error => {
                console.log('===> Error in adding plant to sanctuary', error);
            });
        router.push('/sanctuary');
    };

    if (!guide) {
        defaultGuide = {
            wateringDescription: 'No watering guide available',
            pruningDescription: 'No pruning guide available',
            sunlightDescription: 'No sunlight guide available'
        };
        guide = defaultGuide;
    }


    return (
        <>
            <div className="columns is-multiline is-centered animate__animated animate__fadeInDown">
                <div className="column is-4">
                    <div className="card has-text-centered">
                        <div className="field">
                            <label className="label">Plant Nickname</label>
                            <p className="help">Give your plant a nickname</p>
                        </div>
                        <br />
                        <div className="field">
                            <div className="control">
                                <input
                                    className="input"
                                    type="text"
                                    onChange={handleNickname}
                                    placeholder="Enter plant nickname"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                {guide.wateringDescription &&
                    <div className="column is-4">
                        <div className="card has-text-centered">
                            <div className="field">
                                <label className="label">Watering Guide</label>
                                <p className="help">How often should you water the plant?</p>
                                <p className="help is-italic">{guide.wateringDescription}</p>
                            </div>
                            <br />
                            <div className="field">
                                <div className="control">
                                    <input
                                        className="input"
                                        type="number"
                                        // value={wateringFrequency}
                                        onChange={handleWateringFrequency}
                                        placeholder="Enter watering frequency"
                                    />(Note: in Days)
                                </div>
                            </div>
                        </div>
                    </div>
                }
                <div className="container">
                    <div className="columns is-multiline is-centered">
                        {guide.pruningDescription &&
                            <div className="column is-4">
                                <div className="card has-text-centered">
                                    <div className="field">
                                        <label className="label">Pruning Guide</label>
                                        <p className="help">How often should you prune the plant?</p>
                                        <p className="help is-italic">{guide.pruningDescription}</p>
                                    </div>
                                    <br />
                                    <div className="field">
                                        <div className="control">
                                            <input
                                                className="input"
                                                type="number"
                                                // value={pruningFrequency}
                                                onChange={handlePruningFrequency}
                                                placeholder="Enter pruning frequency"
                                            />(Note: in Days)
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                        {guide.sunlightDescription &&
                            <div className="column is-4">
                                <div className="card has-text-centered">
                                    <div className="field">
                                        <label className="label">Sunlight Guide</label>
                                        <p className="help">How much sunlight does the plant need?</p>
                                        <p className="help is-italic">{guide.sunlightDescription}</p>
                                    </div>
                                    <br />
                                    <div className="field">
                                        <div className="control">
                                            <input
                                                className="input"
                                                type="number"
                                                // value={sunlightFrequency}
                                                onChange={handleSunlightFrequency}
                                                placeholder="Enter sunlight frequency"
                                            />(Note: in Days)
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
            <br />
            <div className="has-text-centered animate__animated animate__fadeInDown">
                <div className="field">
                    <div className="control">
                        <button className="button is-primary" onClick={handleSubmit}>Add to Collection</button>
                    </div>
                </div>
            </div>
        </>
    );
}