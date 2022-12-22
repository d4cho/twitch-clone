import React from 'react';
import styles from '../../styles/ProfileIcon.module.css';

const ProfileIcon = ({ imageUrl, size }) => {
    const defaultImage = '/default-profile-icon.png';

    return (
        <div
            className={styles.container}
            style={{
                width: `${size}px` || '30px',
                height: `${size}px` || '30px',
            }}
        >
            <img src={imageUrl ? imageUrl : defaultImage} alt='profile icon' />
        </div>
    );
};

export default ProfileIcon;
