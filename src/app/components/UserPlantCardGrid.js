import UserPlantCard from './UserPlantCard';
import 'bulma/css/bulma.min.css';


export default function UserPlantCardGrid({ plantCardsArray }) {
    let rows = [];
    if (plantCardsArray) {
        plantCardsArray.forEach((plant) => {
            rows.push(
                <UserPlantCard
                    key={plant._id}
                    plant={plant}
                />
            );
        });
    }
    return (
        <div>
            <section className="container">
                <div className="columns features is-multiline">
                    {rows}
                </div>
            </section>
        </div>
    );
}