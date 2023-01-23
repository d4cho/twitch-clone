import React, { useEffect, useState } from 'react';
import styles from '../../styles/StreamCard.module.css';
import { SlOptionsVertical } from 'react-icons/sl';
import HoverableIcon from '../atoms/HoverableIcon';
import HoverableText from '../atoms/HoverableText';
import Chip from '../atoms/Chip';
import { nFormatter } from '../../utils/functions';
import ProfileIcon from '../atoms/ProfileIcon';
import { useRouter } from 'next/router';
// import { useAppContext } from '../../context/AppContext';

const StreamCard = ({ cardData, bgColor, type }) => {
    const router = useRouter();
    // const { setUserChannelPageData } = useAppContext();
    const {
        user_id,
        broadcaster_id,
        broadcaster_name,
        title,
        thumbnail_url,
        user_name,
        user_login,
        game_name,
        viewer_count,
        view_count,
        tags,
        duration,
        id,
    } = cardData;

    const sizeAdjustedThumbnailUrl = thumbnail_url
        .replace('{width}', '440')
        .replace('{height}', '248');

    const [avatarUrl, setAvatarUrl] = useState('');

    useEffect(() => {
        fetch(`http://localhost:3000/api/user/${user_id || broadcaster_id}`)
            .then((res) => res.json())
            .then((data) => {
                setAvatarUrl(data.data[0]['profile_image_url']);
            });
    }, []);

    const handleCardClick = () => {
        // setUserChannelPageData(cardData);

        console.log(cardData);

        if (user_login) {
            router.push(`/${user_login}`);
        } else {
            router.push(`/${broadcaster_name}`);
        }
    };

    return (
        <div className={styles.container} onClick={handleCardClick}>
            <div className={styles.wrapper}>
                <div
                    className={styles.animation_wrapper}
                    style={{
                        '--bgColor': bgColor,
                    }}
                >
                    {/* bg borders - start */}
                    <div className={styles.bg_top_left}></div>
                    <div className={styles.bg_bottom_right}></div>
                    <div className={styles.bg_left}></div>
                    <div className={styles.bg_bottom}></div>
                    {/* bg borders - end */}

                    <div className={styles.image_wrapper}>
                        {type === 'videos' || type === 'clips' ? (
                            <div className={styles.duration}>{duration}</div>
                        ) : (
                            <div className={styles.live}>LIVE</div>
                        )}

                        <div className={styles.viewer_count}>
                            {type === 'videos' || type === 'clips'
                                ? `${nFormatter(view_count)} views`
                                : `${nFormatter(viewer_count)} viewers`}
                        </div>
                        <img
                            className={styles.image}
                            src={sizeAdjustedThumbnailUrl}
                            alt={title}
                        />
                    </div>
                </div>

                <div className={styles.info_wrapper}>
                    <div className={styles.avatar}>
                        <ProfileIcon imageUrl={avatarUrl} />
                    </div>
                    <div className={styles.info}>
                        <div className={styles.title}>
                            <HoverableText
                                text={title}
                                fontSize={'14px'}
                                fontWeight={'bold'}
                                hoverEffects={{
                                    changeColor: true,
                                    addUnderline: false,
                                }}
                                initialColor={'#efeff1'}
                                hoverColor={'#a970ff'}
                                handleOnClick={() => {}}
                            />
                        </div>
                        <div className={styles.user_name}>{user_name}</div>
                        <HoverableText
                            text={game_name}
                            fontSize={'13px'}
                            hoverEffects={{
                                changeColor: true,
                                addUnderline: false,
                            }}
                            initialColor={'#adadb8'}
                            hoverColor={'#a970ff'}
                            handleOnClick={() => {}}
                        />
                        <div className={styles.tags_wrapper}>
                            {tags &&
                                tags.map((tag, idx) => {
                                    return (
                                        <React.Fragment key={idx}>
                                            <Chip chipText={tag} />
                                        </React.Fragment>
                                    );
                                })}
                        </div>
                    </div>
                    <div>
                        <HoverableIcon
                            icon={<SlOptionsVertical size={20} />}
                            toolTipText={'Options'}
                            toolTipPosition={'bottom'}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StreamCard;
