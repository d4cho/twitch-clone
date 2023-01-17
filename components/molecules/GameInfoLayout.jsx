import React, { useState } from 'react';
import styles from '../../styles/GameInfoLayout.module.css';
import Chip from '../atoms/Chip';
import HoverableText from '../atoms/HoverableText';
import { FiChevronDown } from 'react-icons/fi';
import FollowButton from '../atoms/FollowButton';

const CHIPS = ['RPG', 'MOBA', 'Action', 'Strategy'];

const GameInfoLayout = ({
    gameName,
    gameInfo,
    setIsModalOpen,
    isFromModal,
}) => {
    const { box_art_url } = gameInfo;
    const sizeAdjustedBoxArtUrl =
        box_art_url &&
        box_art_url.replace('{width}', '144').replace('{height}', '192');

    const [isFollowing, setIsFollowing] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className={styles.container}>
            <div className={styles.image}>
                {/* put loading state here */}
                <img src={sizeAdjustedBoxArtUrl} alt={gameName + 'box art'} />
            </div>
            <div className={styles.content}>
                <h1>{gameName}</h1>
                <div className={styles.viewers_followers_chips_wrapper}>
                    <div>
                        <p>
                            <b>129K</b> Viewers
                        </p>
                    </div>
                    <div className={styles.dot_divider}>
                        <p>•</p>
                    </div>
                    <div>
                        <p>
                            <b>35.1M</b> Followers
                        </p>
                    </div>
                    <div className={styles.dot_divider}>
                        <p>•</p>
                    </div>
                    <div className={styles.chips_wrapper}>
                        {CHIPS.map((chip, idx) => {
                            return (
                                <React.Fragment key={idx}>
                                    <Chip
                                        chipText={chip}
                                        styleOverride={{ marginBottom: 0 }}
                                    />
                                </React.Fragment>
                            );
                        })}
                    </div>
                </div>
                <div className={styles.desc_wrapper}>
                    <p className={!isFromModal && styles.ellipsis_p}>
                        League of Legends is a fast-paced, competitive online
                        game that blends the speed and intensity of an RTS with
                        RPG elements. Two teams of powerful champions, each with
                        a unique design and playstyle, battle head-to-head
                        across multiple battlefields and game modes. With an
                        ever-expanding roster of champions, frequent updates and
                        a thriving tournament scene, League of Legends offers
                        endless replayability for players of every skill level.
                    </p>
                    {!isFromModal && (
                        <button onClick={() => setIsModalOpen(true)}>
                            <HoverableText
                                text={
                                    <div className={styles.button_text}>
                                        <div>More</div>
                                        <div>
                                            <FiChevronDown size={20} />
                                        </div>
                                    </div>
                                }
                                fontSize={'14px'}
                                fontWeight={'bold'}
                                initialColor={'#bf94ff'}
                                hoverColor={'#a970ff'}
                                hoverEffects={{ changeColor: true }}
                            />
                        </button>
                    )}
                </div>
                <div className={styles.button_container}>
                    <FollowButton />
                </div>
            </div>
        </div>
    );
};

export default GameInfoLayout;
