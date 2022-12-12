import React from 'react';
import styles from '../../styles/Layout.module.css';
import SideBar from '../organisms/SideBar';
import TopBar from '../organisms/TopBar';

const Layout = ({ children }) => {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <TopBar />
            </header>
            <div className={styles.flex_wrapper}>
                <aside>
                    <SideBar />
                </aside>
                <main className={styles.main}>{children}</main>
            </div>
        </div>
    );
};

export default Layout;
