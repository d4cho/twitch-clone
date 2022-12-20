import React from 'react';
import styles from '../../styles/StreamCard.module.css';
import { SlOptionsVertical } from 'react-icons/sl';
import HoverableIcon from '../atoms/HoverableIcon';
import HoverableText from '../atoms/HoverableText';
import Chip from '../atoms/Chip';
import { nFormatter } from '../../utils/functions';
import ProfileIcon from '../atoms/ProfileIcon';

const StreamCard = ({ cardData, bgColor }) => {
    const { title, thumbnail_url, user_name, game_name, viewer_count, tags } =
        cardData;

    let sizeAdjustedThumbnailUrl = thumbnail_url
        .replace('{width}', '440')
        .replace('{height}', '248');

    return (
        <div className={styles.container}>
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
                        <div className={styles.live}>LIVE</div>
                        <div className={styles.viewer_count}>
                            {`${nFormatter(viewer_count)} viewers`}
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
                        <ProfileIcon />
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
