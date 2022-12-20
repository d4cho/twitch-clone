import React from 'react';
import styles from '../../styles/ProfileIcon.module.css';

const ProfileIcon = ({ imageUrl }) => {
    const defaultImage = '/default-profile-icon.png';

    return (
        <div className={styles.container}>
            <img src={imageUrl ? imageUrl : defaultImage} alt='profile icon' />
        </div>
    );
};

export default ProfileIcon;
