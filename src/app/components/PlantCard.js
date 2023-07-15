import React from 'react';
import Image from 'next/image';
import 'bulma/css/bulma.min.css';

export default function PlantCard() {
    return (
        <div class="column is-3">
            <div class="card is-shady">
                <div class="card-image">
                    <figure class="image is-4by3">
                        <img src="https://images.unsplash.com/photo-1515555230216-82228b88ea98?auto=format&amp;fit=crop&amp;w=900&amp;q=60" alt="Placeholder image" class="modal-button" data-target="modal-image2" />
                    </figure>
                </div>
                <div class="card-content">
                    <div class="content">
                        <h4>Click on image above</h4>
                        <p>less words</p>
                        <span class="button is-link modal-button" data-target="modal-image2">Image modal</span>
                    </div>
                </div>
            </div>
        </div>
    );
};


