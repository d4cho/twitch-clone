import React, { useState } from 'react';
import styles from '../../styles/SideBar.module.css';

const SideBar = () => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div
            className={[styles.container, !isOpen && styles.collapsed].join(
                ' '
            )}
        >
            <button onClick={() => setIsOpen(!isOpen)}>resize</button>
            <div>SideBar</div>
        </div>
    );
};

export default SideBar;
