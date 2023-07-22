"use client";

import PlantCard from './PlantCard';
import 'bulma/css/bulma.min.css';
import 'animate.css';


export default function PlantCardGrid({ plantCardsArray }) {
    let rows = [];
    if (plantCardsArray) {
        for (let i = 0; i < plantCardsArray.length; i++) {
            let plant = plantCardsArray[i];
            rows.push(<div className={`animate__animated animate__fadeInDown`} style={{ animationDelay: `${i * 0.2}s` }}>
                <PlantCard key={i.toString()} plant={plant} />
            </div>);
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