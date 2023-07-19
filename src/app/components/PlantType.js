import React from 'react';
import Image from 'next/image';
import 'bulma/css/bulma.min.css';
import { useRouter } from 'next/navigation';

export default function PlantType({ type }) {
    const router = useRouter();

    function handleSelect() {
        localStorage.setItem('plantType', type);
        router.push('/search/result');
    }

    return (
        <div className="column is-3">
            <a onClick={() => handleSelect()}>
                <div className="card is-shady">
                    <div className="card-content">
                        <div className="content">
                            <h1>{type}</h1>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    );
};