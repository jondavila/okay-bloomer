import React, { useEffect, useState } from 'react';
import axios from 'axios';
import JournalEntry from "./JournalEntry";
import styles from '../sanctuary.module.css';

export default function PlantJournal() {
    const [journalEntries, setJournalEntries] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/sanctuary/journal')
            .then(response => {
                setJournalEntries(response.data.journalEntries);
            })
            .catch(error => {
                console.log('Error fetching journal entries: ', error);
            });
    }, []);

    return (
        <div className={`card-content ${styles.noPadding}`}>
            <div className="content">
                <p className="card-header-title">My Journal Entries:</p>
                <div className="scrollable-content" style={{ maxHeight: '250px', overflow: 'auto' }}>
                    {journalEntries.map((entry, index) => (
                        <JournalEntry key={index} entry={entry} />
                    ))}
                </div>
                <a href="#" className="card-footer-item">View All</a>
            </div>
        </div>
    )
}
