import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '../plantfaq.module.css';

export default function PlantFaq() {
    const [faqs, setFaqs] = useState([]);
    const [currentFaq, setCurrentFaq] = useState(null);

    // fetch plant faqs when the component mounts
    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/sanctuary/plantfaqs`)
            .then(response => {
                setFaqs(response.data.plantFaqs);
                setCurrentFaq(response.data.plantFaqs[Math.floor(Math.random() * response.data.plantFaqs.length)]);
            })
            .catch(error => {
                console.log('Error fetching plant FAQs: ', error);
            });
    }, []);

    // change faq every 5 minutes
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentFaq(faqs[Math.floor(Math.random() * faqs.length)]);
        }, 300000); // 300000 ms = 5 minutes

        // clean up the interval on component unmount
        return () => clearInterval(interval);
    }, [faqs]);

    return (
        <div>
            <p className="card-header-title">Frequently Asked Questions:</p>
            <div className={`box has-text-centered has-text-weight-bold is-family-monospace has-background-info is-size-5 has-shadow ${styles.plantFaqBox}`} id="plantFaq" style={{ height: '300px', overflowY: 'auto' }}>
                {/* Place your scrollable content here */}
                {currentFaq ? (
                    <>
                        <p>Question: {currentFaq.question}</p>
                        <p>Answer: {currentFaq.answer}</p>
                    </>
                ) : (
                    <p>Loading FAQ...</p>
                )}
            </div>
        </div>
    );
}