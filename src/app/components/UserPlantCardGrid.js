"use client";

import UserPlantCard from './UserPlantCard';
import 'bulma/css/bulma.min.css';
import 'animate.css';


export default function UserPlantCardGrid({ plantCardsArray, ...props }) {
    return (
        <div className={props.className}>
            <section className="container">
                <div className="plant-grid">
                    {plantCardsArray && plantCardsArray.map((plant, index) => (
                        <div key={plant._id} className={`columns is-variable is-3 animate__animated animate__fadeInUp`} style={{ animationDelay: `${index * 0.2}s` }}>
                            <UserPlantCard plant={plant} />
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
