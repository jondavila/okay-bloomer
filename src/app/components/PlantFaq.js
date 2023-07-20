import React from 'react';
import styles from '../plantfaq.module.css';

export default function PlantFaq() {
    return (
        <div className="container">
            <div className="has-text-centered">
                <p className="card-header-title">Frequently Asked Questions:</p>
            </div>
            <div className={`box has-text-centered has-text-weight-bold is-family-Preahvihear-sans-serif has-background-info is-size-5 has-shadow ${styles.plantFaqBox}`} id="plantFaq" style={{ height: '300px', overflowY: 'auto' }}>
                <p>Question: Why are we here just to suffer? Is this reality or am I dreaming??</p>
                <p>Answer: I dont fucking know, Im too goddamn old for this shit</p>
            </div>
        </div>
    );
}