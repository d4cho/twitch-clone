import React from 'react';
import styles from '../../styles/Chip.module.css';

const Chip = ({ chipText }) => {
    return <div className={styles.container}>{chipText}</div>;
};

export default Chip;
