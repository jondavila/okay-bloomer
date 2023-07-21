'use client';
import React, { useState, useEffect } from "react";
import 'bulma/css/bulma.min.css';
import axios from "axios";
import Header from "../components/Header";
import PlantFavoritesGrid from "../components/PlantFavoritesGrid";

export default function Profile() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        let email = localStorage.getItem('email');
        axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/sanctuary/user/${email}`)
            .then(response => {
                console.log('boogie woogie =================', response.data);
                setUser(response.data);
            })
            .catch(error => {
                console.log('Error fetching user: ', error);
            });
    }, []);

    // if (!user) return (<div>Loading...</div>)

    return (
        <div>
            <Header pageTitle="Profile" profileImg="/path_to_profile_image.jpg" />
            <br />
            <div className="container">
                <div className="columns is-multiline">
                    <div className="column is-3">
                        <div className="card profile-card">
                            <div className="card">
                                <figure className="image is-140x140 is-rounded" style={{ padding: '20px' }} >
                                    <img className="is-rounded" src="/profile.jpg" alt="Profile Picture" />
                                </figure>
                                <p className="title is-4 has-text-centered">Username</p>
                                <div className="buttons is-centered mt-3">
                                    <button className="button is-primary is-small">Edit</button>
                                    <a href='/sanctuary'><button className="button is-link is-small">My Sanctuary</button></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column is-9">
                        <div className="card">
                            <div className="card-content has-text-centered">
                                <h2>My Plant Babies (Favorites)</h2>
                                <br />
                                <div className="grid-container">
                                    <PlantFavoritesGrid />
                                </div>
                            </div>
                            <div className="buttons is-centered">
                                <button className="button is-primary is-small">Edit</button>
                            </div>
                        </div>
                        <br />
                    </div>
                </div>
            </div>
        </div >
    );
}



