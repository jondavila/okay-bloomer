'use client';
import React from "react";
import 'bulma/css/bulma.min.css';
import Header from "../../components/Header";
import SearchBar from "../../components/SearchBar";
import axios from 'axios';
import { useEffect, useState } from "react";
import PlantCardGrid from "../../components/PlantCardGrid";



export default function SearchPage() {
    const [rows, setRows] = useState([]);
    const [plantType, setPlantType] = useState(localStorage.getItem('plantType'));

    useEffect(() => {
        axios.get('http://localhost:8000/plantDetails/type/' + plantType) // insert api url
            .then((response) => {
                const plants = response.data.plantDetails;
                console.log('plants', plants);
                setRows(plants);
            })
            .catch((error) => {
                console.log('error: ', error);
            });
    }, []);




    return (
        <>
            <Header pageTitle="Plant Sanctuary" profileImg="/path_to_profile_image.jpg" />
            <div className="container mt-5">
                <div className="columns is-centered has-text-centered">
                    <div className="column is-five-sixths">
                        <SearchBar />
                        <p className="has-text-weight-bold is-size-4 mt-4 mb-6">Or start by selecting your plant family:</p>
                        <PlantCardGrid plantCardsArray={rows} />
                    </div>
                </div>
            </div>
        </>
    );
};
