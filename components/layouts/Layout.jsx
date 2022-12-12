import React from 'react';
import styles from '../../styles/Layout.module.css';

const Layout = ({ children }) => {
    return (
        <div className={styles.container}>
            <div>top bar</div>
            <div>side bar</div>
            <div>{children}</div>
        </div>
    );
};

export default Layout;
