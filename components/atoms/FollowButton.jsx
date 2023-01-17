import React, { useState } from 'react';
import styles from '../../styles/FollowButton.module.css';
import { BsSuitHeart, BsSuitHeartFill } from 'react-icons/bs';
import { FaHeartBroken } from 'react-icons/fa';

const FollowButton = () => {
    const [isFollowing, setIsFollowing] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    return (
        <button
            className={[
                styles.follow_button,
                isFollowing ? styles.following : styles.follow,
            ].join(' ')}
            onClick={() => setIsFollowing(!isFollowing)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className={styles.follow_button_item}>
                {isHovered ? (
                    isFollowing ? (
                        <FaHeartBroken size={20} />
                    ) : (
                        <BsSuitHeartFill size={20} />
                    )
                ) : isFollowing ? (
                    <BsSuitHeartFill size={16} />
                ) : (
                    <BsSuitHeart size={16} />
                )}
            </div>
            <div className={styles.follow_button_item}>
                {isHovered
                    ? isFollowing
                        ? 'Unfollow'
                        : 'Follow'
                    : isFollowing
                    ? 'Following'
                    : 'Follow'}
            </div>
        </button>
    );
};

export default FollowButton;
