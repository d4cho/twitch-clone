import React from 'react';
import styles from '../../styles/ChannelListItem.module.css';
import ProfileIcon from '../atoms/ProfileIcon';

const ChannelListItem = ({ isOpen, streamData }) => {
    const { user_name, game_name, type, title, viewer_count } = streamData;

    if (!isOpen) {
        return (
            <div className={styles.container}>
                <ProfileIcon image={null} />
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <div className={styles.flex}>
                <div className={styles.info}>
                    <div className={styles.profile}>
                        <ProfileIcon image={null} />
                    </div>
                    <div className={styles.name_wrapper}>
                        <div className={styles.user_name}>{user_name}</div>
                        <div className={styles.game_name}>{game_name}</div>
                    </div>
                </div>
                {type === 'live' ? (
                    <div className={styles.status}>
                        <div className={styles.live_dot} />
                        {viewer_count}
                    </div>
                ) : (
                    <div className={styles.status}>Offline</div>
                )}
            </div>
        </div>
    );
};

export default ChannelListItem;
