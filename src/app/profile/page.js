'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bulma/css/bulma.min.css';
// import styles from '../sanctuary.module.css';
import Header from '../components/Header';
import AtAGlance from '../components/AtGlance';


export default function Profile() {


    return (
        <>
            <Header pageTitle="Profile" profileImg="/path_to_profile_image.jpg" />
            <div className="columns">
                {/* Left Column */}
                <div className="column">
                    <div className="has-text-centered">
                        <figure className="image is-128x128 is-rounded">
                            <img src="user-image.jpeg" alt="Profile Picture" />
                        </figure>
                    </div>
                    <div className="buttons is-centered mt-3">
                        <button className="button is-primary is-small">Edit</button>
                        <a href='/sanctuary'><button className="button is-link is-small">My Sanctuary</button></a>
                    </div>
                </div>

                {/* Center Column */}
                <div className="column is-two-thirds has-text-centered">
                    <section className="section">
                        <div className="content">
                            <h2>About Me</h2>
                            <p>Hey it's a me, random user</p>
                        </div>
                        <div className="buttons is-centered">
                            <button className="button is-primary is-small">Edit</button>
                        </div>
                    </section>

                    <section className="section">
                        <div className="content">
                            <h2>My Plant Babies (Favorites)</h2>
                            <button>Plant</button>
                            <br />
                            <button>Plant</button>
                            <br />
                            <button>Plant</button>
                            <br />
                            <button>Plant</button>
                            <br />
                            <button>Plant</button>
                            <br />
                            <button>Plant</button>
                            <br />
                            <button>Plant</button>
                        </div>
                        <div className="buttons is-centered">
                            <button className="button is-primary is-small">Edit</button>
                        </div>
                    </section>
                </div>

                {/* Right Column */}
                <div className="column"></div>
            </div>
        </>
    );
}



