import JournalEntry from "./JournalEntry"

export default function PlantJournal() {
    return (
        <div className="bg-gray-100">
            <div className="container mx-auto px-4 py-8">
                <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">

                    <JournalEntry />

                </div>
            </div>
        </div>
    )
}