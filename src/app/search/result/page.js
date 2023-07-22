'use client';
import React from "react";
import 'bulma/css/bulma.min.css';
import Header from "@/app/components/Header";
// import SearchBar from "./components/SearchBar";
import axios from 'axios';
import { useEffect, useState } from "react";
import PlantCardGrid from "../../components/PlantCardGrid";
import 'animate.css';
import styles from "../../searchresultpage.module.css";


export default function SearchPage() {
    const [rows, setRows] = useState([]);
    const [plantType, setPlantType] = useState('');


    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/plantDetails/type/${plantType}`) // insert api url
            .then((response) => {
                setPlantType(localStorage.getItem('plantType'));
                const plants = response.data.plantDetails;
                console.log('plants', plants);
                setRows(plants);
            })
            .catch((error) => {
                console.log('error: ', error);
            });
    }, [plantType]);




    return (
        <>
            <Header pageTitle="Plant Sanctuary" profileImg="/path_to_profile_image.jpg" />
            <div className={`${styles.gradientBackground} container mt-5`}>
                <div className="columns is-centered has-text-centered">
                    <div className="column is-five-sixths">
                        {/* <SearchBar /> */}
                        <p className="has-text-weight-bold is-size-4 mt-4 mb-6 animate__animated animate__fadeIn" style={{ animationDelay: '0.4s', color: 'white' }}>Select your plant:</p>
                        <PlantCardGrid plantCardsArray={rows} />
                    </div>
                </div>
            </div>
        </>
    );
};
