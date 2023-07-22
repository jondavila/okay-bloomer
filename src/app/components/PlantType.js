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
            <a onClick={() => handleSelect()} style={{
                background: 'linear-gradient(145deg, rgba(152, 226, 152, 0.7), rgba(0, 100, 0, 0.5))',
                color: '#006400'
            }}>

                <div className={styles.card + " card is-shady"}>
                    <div className="card-content">
                        <div className="content">
                            <h1 style={{ color: '#006400' }}>{type}</h1>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    );
};
