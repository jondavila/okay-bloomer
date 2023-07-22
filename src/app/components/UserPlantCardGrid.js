import UserPlantCard from './UserPlantCard';
import 'bulma/css/bulma.min.css';


export default function UserPlantCardGrid({ plantCardsArray, ...props }) {
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
        <div className={props.className}>
            <section className="container">
                <div className="columns features is-multiline">
                    {rows}
                </div>
            </section>
        </div>
    );
}