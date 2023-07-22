'use client';
import React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import 'bulma/css/bulma.min.css';
import styles from "../userplantcard.module.css";
import { useRouter } from 'next/navigation';
import 'animate.css';


export default function UserPlantCard({ plant }) {
    const router = useRouter();

    function handleSelect() {
        localStorage.setItem('plant-id', plant.plantId);
        router.push('/individual-user-plant');
    }

    return (
        <div className={`column is-4 animate__animated animate__fadeInUp ${styles.userPlantCardColumn}`}>
            <a onClick={handleSelect}>
                <div className={`${styles.card} card is-shady`}>
                    {plant.plantImage &&
                        <div className="card-image">
                            <figure className="image is-4by3">
                                <img src={plant.plantImage} alt={`${plant.plantOfficialName} Image`} />
                            </figure>
                        </div>
                    }
                    <div className="card-content">
                        <div className="content">
                            {plant.plantNickname &&
                                <h4 className='is-size-4 has-text-weight-bold'>{plant.plantNickname}</h4>
                            }
                            {plant.plantOfficialName &&
                                <h4 className='is-size-6 is-italic'>{plant.plantOfficialName}</h4>
                            }
                        </div>
                    </div>
                </div>
            </a>
        </div>
    );
};

