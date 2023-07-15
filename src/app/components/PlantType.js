import React from 'react';
import Image from 'next/image';
import 'bulma/css/bulma.min.css';

export default function PlantType() {
    return (
        <div class="column is-3">
            <div class="card is-shady">
                <div class="card-content">
                    <div class="content">
                        <h1>Plant Type</h1>
                        <span class="button is-link modal-button" data-target="modal-image2">Image modal</span>
                    </div>
                </div>
            </div>
        </div>
    );
};