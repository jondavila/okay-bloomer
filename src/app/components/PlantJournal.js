import JournalEntry from "./JournalEntry"
import styles from '../sanctuary.module.css';

export default function PlantJournal() {
    return (
        <div className={`card-content ${styles.noPadding}`}>
            <div className="content">
                <p className="card-header-title">Events</p>
                <div className="scrollable-content" style={{ maxHeight: '200px', overflow: 'auto' }}>
                    <table className="table is-fullwidth is-striped">
                        <tbody>
                            <JournalEntry />
                            <JournalEntry />
                            <JournalEntry />
                            <JournalEntry />
                            <JournalEntry />
                            <JournalEntry />
                            <JournalEntry />
                            <JournalEntry />
                        </tbody>
                    </table>
                </div>
                <a href="#" className="card-footer-item">View All</a>
            </div>
        </div>
    )
}
