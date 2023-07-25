'use client';
import { useState, useEffect } from 'react';
import 'bulma/css/bulma.min.css';
import Header from '@/app/components/Header';
import PlantSanctuaryEntry from '@/app/components/PlantSanctuaryEntry';
import axios from 'axios';

const PlantCarePage = () => {
    // State for user inputs
    const [plant, setPlant] = useState(null); // 
    const [loading, setLoading] = useState(true);
    const [guide, setGuide] = useState(null);
    const [wateringFrequency, setWateringFrequency] = useState('');
    const [pruningFrequency, setPruningFrequency] = useState('');
    const [sunlightFrequency, setSunlightFrequency] = useState('');
    const [nickname, setNickname] = useState('');

    useEffect(() => {
        const plantId = localStorage.getItem('plant-id');

        axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/plantDetails/${plantId}`) // insert api url
            .then((response) => {
                const foundPlant = response.data.plantDetail;
                console.log('NAME IT SOMETHING ELSE IDK', foundPlant);
                setPlant(foundPlant);
            })
            .catch((error) => {
                console.log('error: ', error);
            });

        axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/plantGuides/${plantId}`) // insert api url
            .then((response) => {
                const foundGuide = response.data.plantGuide;
                console.log('fFOUND GUIDE YES', foundGuide);
                setGuide(foundGuide);
                setLoading(false);
            })
            .catch((error) => {
                console.log('error: ', error);
            });
    }, []);

    if (!plant && !guide) return (<div>Loading...</div>);

    return (
        <div>
            <Header pageTitle="Care Guide" profileImg="/path_to_profile_image.jpg" />
            <br />
            <div className="container">
                <PlantSanctuaryEntry plant={plant} guide={guide} />
            </div>
        </div >

    );
};

export default PlantCarePage;
