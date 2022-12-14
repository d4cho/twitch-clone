import React from 'react';
import styles from '../../styles/ChannelListItem.module.css';
import ProfileIcon from '../atoms/ProfileIcon';

const ChannelListItem = ({ isOpen }) => {
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
                        <div className={styles.user_name}>Metaphor</div>
                        <div className={styles.game_name}>
                            Call of Duty: Warzone eeeee
                        </div>
                    </div>
                </div>
                <div className={styles.status}>
                    <div></div>
                    326
                </div>
            </div>
        </div>
    );
};

export default ChannelListItem;
