import React from 'react';
import styles from '../../styles/UpcomingSection.module.css';
import UpcomingCard from '../molecules/UpcomingCard';

const UpcomingSection = ({ data }) => {
    const { heading, cards } = data;

    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>{heading}</h1>
            <div className={styles.card_layout}>
                {cards.map((cardData, idx) => (
                    <div key={idx}>
                        <UpcomingCard cardData={cardData} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UpcomingSection;
