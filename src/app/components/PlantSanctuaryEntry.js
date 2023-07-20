import React, { use } from 'react';
import Image from 'next/image';
import 'bulma/css/bulma.min.css';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { useState, useEffect } from 'react';


export default function PlantSanctuaryEntry({ plant, guide }) {
    const [nickname, setNickname] = useState('');
    const [wateringFrequency, setWateringFrequency] = useState('');
    const [pruningFrequency, setPruningFrequency] = useState('');
    const [sunlightFrequency, setSunlightFrequency] = useState('');
    const router = useRouter();

    if (!plant || !guide) {
        return <div>Loading...</div>;
    }

    const handleNickname = (e) => {
        setNickname(e.target.value);
    };

    const handleWateringFrequency = (e) => {
        setWateringFrequency(e.target.value);
    };

    const handlePruningFrequency = (e) => {
        setPruningFrequency(e.target.value);
    };

    const handleSunlightFrequency = (e) => {
        setSunlightFrequency(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // at the beginning of a submit function
        const userEmail = localStorage.getItem('email');
        const newUserPlant = { nickName: nickname, waterDays: wateringFrequency, commonName: plant.commonName, plantId: plant.id, image: plant.image };
        axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/sanctuary/plants/new/${userEmail}`, newUserPlant)
            .then(response => {
                console.log('response.data', response.data);
            })
            .catch(error => {
                console.log('===> Error in adding plant to sanctuary', error);
            });
        router.push('/sanctuary');
    };


    return (
        <>
            <div className="columns is-multiline is-centered">
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
            <div className="has-text-centered">
                <div className="field">
                    <div className="control">
                        <button className="button is-primary" onClick={handleSubmit}>Add to Collection</button>
                    </div>
                </div>
            </div>
        </>
    );
}