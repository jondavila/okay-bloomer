import PlantFavorites from './PlantFavorites';
import 'bulma/css/bulma.min.css';

export default function PlantFavoritesGrid({ }) {
    return (
        <div>
            <section className="container">
                <div className="columns features is-multiline">
                    <PlantFavorites />
                    <PlantFavorites />
                    <PlantFavorites />
                    <PlantFavorites />
                    <PlantFavorites />
                    <PlantFavorites />
                    <PlantFavorites />
                    <PlantFavorites />


                </div>
            </section>
        </div>
    )
}