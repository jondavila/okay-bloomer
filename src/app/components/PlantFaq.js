import React from 'react';
import styles from '../plantfaq.module.css';

export default function PlantFaq() {
    return (
        <div>
            <p className="card-header-title">Frequently Asked Questions:</p>

            <div className={`box has-text-centered has-text-weight-bold is-family-monospace has-background-info is-size-5 has-shadow ${styles.plantFaqBox}`} id="plantFaq" style={{ height: '300px', overflowY: 'auto' }}>
                {/* Place your scrollable content here */}
                <p>Question: Why are we here just to suffer? Is this reality or am I dreaming??</p>
                <p>Answer: I dont fucking know, Im too goddamn old for this shit</p>
            </div>

        </div>
    );
}
