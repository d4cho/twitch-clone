import React from 'react';
import styles from '../../styles/NavBar.module.css';
import navData from '../../assets/data/nav-data.json';
import NavItem from '../molecules/NavItem';

const NavBar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.nav_items_wrapper}>
                {navData.data.map((nav, idx) => {
                    return (
                        <div key={idx}>
                            <NavItem data={nav} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default NavBar;
