import PlantCard from './PlantCard';
import 'bulma/css/bulma.min.css';


export default function PlantCardGrid({ plantCardsArray }) {
    let rows = [];
    if (plantCardsArray) {
        for (let i = 0; i < plantCardsArray.length; i++) {
            let plant = plantCardsArray[i];
            rows.push(<PlantCard key={i.toString()} plant={plant} />);
        }
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