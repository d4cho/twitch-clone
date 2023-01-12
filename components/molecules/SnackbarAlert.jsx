import React, { useState, useEffect } from 'react';
import { BsCheckCircleFill } from 'react-icons/bs';
import { useAppContext } from '../../context/AppContext';
import styles from '../../styles/SnackbarAlert.module.css';

const SnackbarAlert = ({ text, idx }) => {
    const { alertList, setAlertList } = useAppContext();
    const [showAlert, setShowAlert] = useState(false);

    useEffect(() => {
        setShowAlert(true);

        setTimeout(() => {
            setShowAlert(false);
        }, 5000);
    }, []);

    const translateYEnter = idx * -125 - 50; // 125 adds 25% between alerts, 50 adds 50% to bottom alert

    return (
        <div
            className={[styles.container, showAlert && styles.enter].join(' ')}
            style={{
                '--translateYEnter': `${translateYEnter}%`,
            }}
        >
            <BsCheckCircleFill size={20} />
            {text}
        </div>
    );
};

export default SnackbarAlert;
