import styles from '../sanctuary.module.css';

export default function JournalEntry() {
    return (
        <div className={styles.journalEntry}>
            <span className={styles.journalText}>Lorum ipsum dolem aire</span>
            <a className={`button is-small is-primary ${styles.journalButton}`} href="#">See</a>
        </div>
    )
}
