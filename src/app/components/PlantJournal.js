import JournalEntry from "./JournalEntry"


export default function PlantJournal() {
    return (
        <div className="bg-gray-100">
            <div className="container mx-auto px-4 py-8">
                <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="columns">
                        <div className="column is-6">
                            <div className="card events-card">
                                <header className="card-header">
                                    <p className="card-header-title">Events</p>
                                    <a href="#" className="card-header-icon" aria-label="more options">
                                        <span className="icon">
                                            <i className="fa fa-angle-down" aria-hidden="true"></i>
                                        </span>
                                    </a>
                                </header>
                                <div className="card-table">
                                    <div className="content scrollable-content" style={{ maxHeight: '200px', overflow: 'auto' }}>
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
                                </div>
                                <footer className="card-footer">
                                    <a href="#" className="card-footer-item">View All</a>
                                </footer>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}