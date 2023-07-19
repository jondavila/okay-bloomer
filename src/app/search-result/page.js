'use client';
import React from "react";
import 'bulma/css/bulma.min.css';
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import PlantTypeGrid from "../components/PlantTypeGrid";
import axios from 'axios';
import { useEffect, useState } from "react";



export default function SearchPage() {
    const [rows, setRows] = useState([]);

    useEffect(() => {
        axios.get('') // insert api url
            .then((response) => {
                const plants = response.data.plantTypes;
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
                        <PlantTypeGrid plantTypesArray={rows} />
                    </div>
                </div>
            </div>
        </>
    );
};