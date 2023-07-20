import styles from '../sanctuary.module.css';

export default function JournalEntry({ entry }) {
    return (
        <div className={styles.journalEntry}>
            <span className={styles.journalText}>{entry.text}</span>
            <a className={`button is-small is-primary ${styles.journalButton}`} href="#">See</a>
        </div>
    )
}
