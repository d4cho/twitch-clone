import React, { useState, useEffect } from 'react';
import { BsCheckCircleFill } from 'react-icons/bs';
import styles from '../../styles/SnackbarAlert.module.css';

const SnackbarAlert = ({ text, idx }) => {
    const [showAlert, setShowAlert] = useState(false);

    useEffect(() => {
        setShowAlert(true);

        setTimeout(() => {
            setShowAlert(false);
        }, 5000);
    }, []);

    const translateYEnter = idx * -100;

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
