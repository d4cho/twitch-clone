import React, { useState, useEffect } from 'react';
import styles from '../styles/UserChannelPage.module.css';
import ProfileIcon from '../components/atoms/ProfileIcon';
import { useAppContext } from '../context/AppContext';
import Chip from '../components/atoms/Chip';

const UserChannelPage = () => {
    const { userChannelPageData } = useAppContext();
    const {
        game_name,
        started_at,
        tags,
        title,
        user_id,
        user_name,
        viewer_count,
    } = userChannelPageData;

    const [avatarUrl, setAvatarUrl] = useState('');

    console.log(userChannelPageData);

    useEffect(() => {
        fetch(`http://localhost:3000/user/${user_id || broadcaster_id}`)
            .then((res) => res.json())
            .then((data) => {
                setAvatarUrl(data.data[0]['profile_image_url']);
            });
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.content_wrapper}>
                <div className={styles.video_wrapper}>
                    <video className={styles.video} controls>
                        <source src="your_video's_name.mp4" type='video/mp4' />
                    </video>
                </div>
                <div className={styles.bottom_wrapper}>
                    <div className={styles.info_wrapper}>
                        <div className={styles.profile}>
                            <ProfileIcon imageUrl={avatarUrl} size={64} />
                        </div>
                        <div>
                            <div className={styles.username}>{user_name}</div>
                            <div className={styles.title}>{title}</div>
                            <div className={styles.tags_wrapper}>
                                <div className={styles.game_name}>
                                    {game_name}
                                </div>
                                {tags.map((tag, idx) => {
                                    return (
                                        <div key={idx}>
                                            <Chip
                                                chipText={tag}
                                                styleOverride={{ margin: 0 }}
                                            />
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                    <div>buttons go here</div>
                </div>
            </div>
            <div className={styles.chat_wrapper}>chat</div>
        </div>
    );
};

export default UserChannelPage;