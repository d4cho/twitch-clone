import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import styles from '../../styles/CarouselCard.module.css';
import { nFormatter } from '../../utils/functions';
import Chip from '../atoms/Chip';
import HoverableText from '../atoms/HoverableText';
import ProfileIcon from '../atoms/ProfileIcon';

const CarouselCard = ({ streamInfo, isActiveSlide }) => {
    const router = useRouter();
    const { user_id, user_name, game_name, viewer_count, tags } = streamInfo;

    const [avatarUrl, setAvatarUrl] = useState('');

    useEffect(() => {
        fetch(`http://localhost:3000/user/${user_id}`)
            .then((res) => res.json())
            .then((data) => {
                setAvatarUrl(data.data[0]['profile_image_url']);
            });
    }, []);

    return (
        <div
            className={[styles.container, isActiveSlide && styles.grid].join(
                ' '
            )}
        >
            <div className={styles.video}>
                <video width='100%' height='100%' controls>
                    <source src={''} />
                </video>
            </div>
            {isActiveSlide && (
                <div className={styles.right}>
                    <div className={styles.info_wrapper}>
                        <ProfileIcon imageUrl={avatarUrl} size={50} />
                        <div className={styles.info}>
                            <div>
                                <HoverableText
                                    text={user_name}
                                    fontSize={'13px'}
                                    fontWeight={'bold'}
                                    initialColor={'#bf94ff'}
                                    hoverColor={'#a970ff'}
                                    hoverEffects={{ changeColor: true }}
                                    handleOnClick={() => {
                                        router.push(`/${user_name}`);
                                    }}
                                />
                            </div>
                            <div>
                                <HoverableText
                                    text={game_name}
                                    fontSize={'13px'}
                                    fontWeight={'bold'}
                                    initialColor={'#bf94ff'}
                                    hoverColor={'#a970ff'}
                                    hoverEffects={{ changeColor: true }}
                                    handleOnClick={() => {
                                        router.push(
                                            `/directory/game/${game_name}`
                                        );
                                    }}
                                />
                            </div>
                            <div>{nFormatter(viewer_count, 1)} viewers</div>
                        </div>
                    </div>
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
                    <div className={styles.text}>
                        Check out this featured channel!
                    </div>
                </div>
            )}
        </div>
    );
};

export default CarouselCard;
