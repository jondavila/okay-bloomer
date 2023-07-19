import JournalEntry from "./JournalEntry";
import styles from '../sanctuary.module.css';

export default function PlantJournal() {
    return (
        <div className={`card-content ${styles.noPadding}`}>
            <div className="content">
                <p className="card-header-title">My Journal Entries:</p>
                <div className="scrollable-content" style={{ maxHeight: '250px', overflow: 'auto' }}>
                    <JournalEntry />
                    <JournalEntry />
                    <JournalEntry />
                    <JournalEntry />
                    <JournalEntry />
                    <JournalEntry />
                    <JournalEntry />
                    <JournalEntry />
                </div>
                <a href="#" className="card-footer-item">View All</a>
            </div>
        </div>
    )
}
