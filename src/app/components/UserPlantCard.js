'use client';
import React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import 'bulma/css/bulma.min.css';
import { useRouter } from 'next/navigation';


export default function UserPlantCard(plant) {
    const router = useRouter();
    console.log('plant', plant.plant.plantImage);



    function handleSelect() {
        localStorage.setItem('plant-id', plant.plant.plantId);
        router.push('/individual-user-plant');
    }

    return (
        <div class="column is-4">
            <a onClick={() => handleSelect()}>
                <div class="card is-shady">
                    {plant.plant.plantImage &&
                        <div class="card-image">
                            <figure class="image is-4by3">
                                <img src={plant.plant.plantImage} alt={`${plant.plant.plantOfficialName} Image`} />
                            </figure>
                        </div>
                    }
                    <div class="card-content">
                        <div class="content">
                            {plant.plant.plantNickname &&
                                <h4 className='is-size-4 has-text-weight-bold'>{plant.plant.plantNickname}</h4>
                            }
                            {plant.plant.plantOfficialName &&
                                <h4 className='is-size-6 is-italic'>{plant.plant.plantOfficialName}</h4>
                            }
                        </div>
                    </div>
                </div>
            </a>
        </div>
    );
};



