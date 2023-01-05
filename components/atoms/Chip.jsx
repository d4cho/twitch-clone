import React from 'react';
import styles from '../../styles/Chip.module.css';

const Chip = ({ chipText, styleOverride }) => {
    return (
        <div className={styles.container} style={styleOverride}>
            {chipText}
        </div>
    );
};

export default Chip;
