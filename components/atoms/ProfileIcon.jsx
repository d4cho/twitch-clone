import React from 'react';
import styles from '../../styles/ProfileIcon.module.css';
import { RxPerson } from 'react-icons/rx';

const ProfileIcon = ({ image }) => {
    const defaultImage = '/default-profile-icon.png';

    return (
        <div className={styles.container}>
            <img src={image ? image : defaultImage} alt='profile icon' />
        </div>
    );
};

export default ProfileIcon;
