import React from 'react';
import { useAppContext } from '../../context/AppContext';
import styles from '../../styles/SnackbarContainer.module.css';
import SnackbarAlert from '../molecules/SnackbarAlert';

const SnackbarContainer = () => {
    const { alertList } = useAppContext();

    return (
        <div className={styles.container}>
            {alertList.map((text, idx) => {
                return (
                    <div key={idx}>
                        <SnackbarAlert text={text} idx={idx} />
                    </div>
                );
            })}
        </div>
    );
};

export default SnackbarContainer;
