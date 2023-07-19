import PlantType from './PlantType';
import 'bulma/css/bulma.min.css';

export default function PlantTypeGrid({ plantTypesArray = [] }) {
    let rows = [];
    for (let i = 0; i < plantTypesArray.length; i++) {
        let type = plantTypesArray[i];
        rows.push(<PlantType key={i.toString()} type={type} />);
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