import React from 'react';
import styles from '../../styles/UpcomingSection.module.css';

const UpcomingSection = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>Heading</h1>
            <div className={styles.card_layout}>
                <div>card 1</div>
                <div>card 2</div>
                <div>card 3</div>
            </div>
        </div>
    );
};

export default UpcomingSection;
