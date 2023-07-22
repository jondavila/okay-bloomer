import React from 'react';
import Image from 'next/image';
import 'bulma/css/bulma.min.css';
import { useRouter } from 'next/navigation';
import styles from "../planttype.module.css";
import 'animate.css';

export default function PlantType({ type, index }) {
    const router = useRouter();

    function handleSelect() {
        localStorage.setItem('plantType', type);
        router.push('/search/result');
    }

    return (
        <div className={`column is-3 animate__animated animate__fadeInDown`} style={{ animationDelay: `${index * 0.1}s` }}>
            <a onClick={() => handleSelect()}>
                <div className={styles.card + " card is-shady"}>
                    <div className="card-content">
                        <div className="content">
                            <h1>{type}</h1>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    );
};
