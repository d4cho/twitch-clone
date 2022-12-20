import React from 'react';
import styles from '../../styles/NavItem.module.css';

const NavItem = ({ data }) => {
    const { title, imageUrl } = data;

    return (
        <div className={styles.container}>
            <div className={styles.title}>{title}</div>
            <img className={styles.image} src={imageUrl} alt={title} />
        </div>
    );
};

export default NavItem;
