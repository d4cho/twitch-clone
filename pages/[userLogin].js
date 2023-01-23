import React, { useState, useEffect } from 'react';
import styles from '../styles/UserChannelPage.module.css';
import ProfileIcon from '../components/atoms/ProfileIcon';
import { useAppContext } from '../context/AppContext';
import Chip from '../components/atoms/Chip';
import FollowButton from '../components/atoms/FollowButton';
import HoverableIcon from '../components/atoms/HoverableIcon';
import { AiOutlineStar } from 'react-icons/ai';
import { RxPerson } from 'react-icons/rx';
import { FiShare, FiMoreVertical } from 'react-icons/fi';
import { numberWithCommas } from '../utils/functions';
import ChatBox from '../components/organisms/ChatBox';
import { useRouter } from 'next/router';
import { BsArrowBarLeft } from 'react-icons/bs';

const UserChannelPage = () => {
    const router = useRouter();
    const { userChannelPageData, setUserChannelPageData } = useAppContext();
    const {
        broadcaster_id,
        game_name,
        tags,
        title,
        user_id,
        user_login,
        user_name,
        viewer_count,
    } = { ...userChannelPageData };

    const [avatarUrl, setAvatarUrl] = useState('');
    const [isShowChat, setIsShowChat] = useState(true);

    useEffect(() => {
        if (user_login !== router.query.userLogin) {
            fetch(
                `http://localhost:3001/api/top-streams/user/${router.query.userLogin}`
            )
                .then((res) => res.json())
                .then((data) => {
                    if (data.status !== 400) {
                        setUserChannelPageData(data.data[0]);
                    }
                });
            // .catch(alert('api fail'));
        }

        if (user_id || broadcaster_id) {
            fetch(`http://localhost:3001/api/user/${user_id || broadcaster_id}`)
                .then((res) => res.json())
                .then((data) => {
                    setAvatarUrl(data.data[0]['profile_image_url']);
                });
        }
    }, [router.query.userLogin, userChannelPageData]);

    return (
        <div className={styles.container}>
            <div className={styles.content_wrapper}>
                <div className={styles.video_wrapper}>
                    {!isShowChat && (
                        <div
                            className={styles.expand_chat_icon}
                            onClick={() => setIsShowChat(true)}
                        >
                            <HoverableIcon
                                icon={<BsArrowBarLeft size={20} />}
                                toolTipText={'Expand'}
                                toolTipPosition={'left'}
                            />
                        </div>
                    )}
                    <video className={styles.video} controls>
                        <source src='video_url' type='video/mp4' />
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
                                {tags &&
                                    tags.map((tag, idx) => {
                                        return (
                                            <div key={idx}>
                                                <Chip
                                                    chipText={tag}
                                                    styleOverride={{
                                                        margin: 0,
                                                    }}
                                                />
                                            </div>
                                        );
                                    })}
                            </div>
                        </div>
                    </div>
                    <div className={styles.right_wrapper}>
                        <div className={styles.buttons_wrapper}>
                            <FollowButton />
                            <button className={styles.subscribe}>
                                <AiOutlineStar size={20} /> Subscribe
                            </button>
                        </div>
                        <div className={styles.viewers}>
                            <RxPerson size={20} />
                            {viewer_count && numberWithCommas(viewer_count)}
                        </div>
                        <div className={styles.icons_wrapper}>
                            <HoverableIcon
                                icon={<FiShare size={20} />}
                                toolTipText={'Share'}
                                toolTipPosition={'bottom'}
                            />
                            <HoverableIcon
                                icon={<FiMoreVertical size={20} />}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <ChatBox
                channelName={user_name}
                isShowChat={isShowChat}
                setIsShowChat={setIsShowChat}
            />
        </div>
    );
};

export default UserChannelPage;
