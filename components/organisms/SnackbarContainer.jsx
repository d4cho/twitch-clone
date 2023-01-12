import React from 'react';
import styles from '../../styles/SnackbarContainer.module.css';
import SnackbarAlert from '../molecules/SnackbarAlert';

const SnackbarContainer = () => {
    const TEXT = [
        "You'll be notified at 7:00 PM on 1/12 when challengersleague goes live.",
        'Reminder removed successfully!',
    ];
    let reversedArr = TEXT.reverse();

    return (
        <div className={styles.container}>
            {reversedArr.map((text, idx) => {
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
