import React from 'react';
import Image from 'next/image';
import 'bulma/css/bulma.min.css';

export default function PlantFavorites() {
    return (
        <div class="column is-3">
            <div class="card is-shady">
                <div class="card-image">

                    <figure class="image is-3by2">
                        <button>Plant</button>
                    </figure>
                </div>
            </div>
        </div>
    );
};