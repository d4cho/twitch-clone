import React from 'react';
import styles from '../../../styles/GameDetails.module.css';
import { useRouter } from 'next/router';

const GameDetails = () => {
    const router = useRouter();
    const { gameName } = router.query;

    return <div className={styles.container}>{gameName}</div>;
};

export default GameDetails;
