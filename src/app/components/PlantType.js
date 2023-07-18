import React from 'react';
import Image from 'next/image';
import 'bulma/css/bulma.min.css';

export default function PlantType({ type }) {
    return (
        <div className="column is-3">
            <a>
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