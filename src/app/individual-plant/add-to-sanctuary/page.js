'use client'

import { useState } from 'react';
import 'bulma/css/bulma.min.css'

const PlantCarePage = () => {
    // State for user inputs
    const [wateringFrequency, setWateringFrequency] = useState('');
    const [pruningFrequency, setPruningFrequency] = useState('');
    const [sunlightFrequency, setSunlightFrequency] = useState('');
    const [nickname, setNickname] = useState('');

    return (
        <div className="container">
            <h1 className="title">Add Plant to Collection - Care Guide</h1>
            <div className="columns">
                <div className="column">
                    <div className="field">
                        <label className="label">Plant Nickname</label>
                        <p className="help">Give your plant a nickname</p>
                    </div>
                    <div className="field">
                        <label className="label">Watering Guide</label>
                        <p className="help">How often should you water the plant?</p>
                    </div>
                    <div className="field">
                        <label className="label">Pruning Guide</label>
                        <p className="help">How often should you prune the plant?</p>
                    </div>
                    <div className="field">
                        <label className="label">Sunlight Guide</label>
                        <p className="help">How much sunlight does the plant need?</p>
                    </div>
                </div>
                <div className="column">
                    <div className="field">
                        <div className="control">
                            <input
                                className="input"
                                type="text"
                                value={nickname}
                                onChange={(e) => setNickname(e.target.value)}
                                placeholder="Enter plant nickname"
                            />
                        </div>
                    </div>
                    <div className="field">
                        <div className="control">
                            <input
                                className="input"
                                type="number"
                                value={wateringFrequency}
                                onChange={(e) => setWateringFrequency(e.target.value)}
                                placeholder="Enter watering frequency"
                            />
                        </div>
                    </div>
                    <div className="field">
                        <div className="control">
                            <input
                                className="input"
                                type="number"
                                value={pruningFrequency}
                                onChange={(e) => setPruningFrequency(e.target.value)}
                                placeholder="Enter pruning frequency"
                            />
                        </div>
                    </div>
                    <div className="field">
                        <div className="control">
                            <input
                                className="input"
                                type="number"
                                value={sunlightFrequency}
                                onChange={(e) => setSunlightFrequency(e.target.value)}
                                placeholder="Enter sunlight frequency"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="field">
                <div className="control">
                    <button className="button is-primary">Add to Collection</button>
                </div>
            </div>
        </div>
    );
};

export default PlantCarePage;
