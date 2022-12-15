import React, { useState } from 'react';
import styles from '../../styles/SideBar.module.css';
import HoverableIcon from '../atoms/HoverableIcon';
import { BsArrowBarLeft } from 'react-icons/bs';
import { BsArrowBarRight } from 'react-icons/bs';
import { BsArrowDownUp } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';
import { SlCamrecorder } from 'react-icons/sl';
import ChannelListItem from '../molecules/ChannelListItem';
import followedStreamsData from '../../assets/data/followed-streams.json';
import HoverableText from '../atoms/HoverableText';

const SideBar = () => {
    const [isOpen, setIsOpen] = useState(true);
    const [isShowMoreFollowed, setIsShowMoreFollowed] = useState(false);
    const [isShowMoreRecommended, setIsShowMoreRecommended] = useState(false);

    const iconColor = '#efeff1';
    const iconSize = 20;

    return (
        <div
            className={[styles.container, !isOpen && styles.collapsed].join(
                ' '
            )}
        >
            <div className={styles.for_you_wrapper}>
                {isOpen && <div className={styles.for_you}>For You</div>}
                <div onClick={() => setIsOpen(!isOpen)}>
                    <HoverableIcon
                        icon={
                            isOpen ? (
                                <BsArrowBarLeft
                                    color={iconColor}
                                    size={iconSize}
                                />
                            ) : (
                                <BsArrowBarRight
                                    color={iconColor}
                                    size={iconSize}
                                />
                            )
                        }
                        toolTipText={isOpen ? 'Collapse' : 'Expand'}
                        toolTipPosition={'right'}
                    />
                </div>
            </div>

            {isOpen ? (
                <div className={styles.followed_channels_wrapper}>
                    <div className={styles.sidebar_heading}>
                        Followed channels
                    </div>
                    <BsArrowDownUp color={iconColor} size={16} />
                </div>
            ) : (
                <div className={styles.collapsed_icon_wrapper}>
                    <HoverableIcon
                        icon={
                            <AiOutlineHeart color={iconColor} size={iconSize} />
                        }
                        toolTipText={'Followed Channels'}
                        toolTipPosition={'right'}
                    />
                </div>
            )}

            <div>
                {followedStreamsData.data.map((streamData, idx) => {
                    let indexToShow = isShowMoreFollowed
                        ? followedStreamsData.data.length - 1
                        : 4;
                    if (idx <= indexToShow) {
                        return (
                            <React.Fragment key={streamData.id}>
                                <ChannelListItem
                                    isOpen={isOpen}
                                    streamData={streamData}
                                />
                            </React.Fragment>
                        );
                    }
                })}
            </div>

            {isOpen && (
                <div className={styles.show_more}>
                    <HoverableText
                        text={isShowMoreFollowed ? 'Show less' : 'Show more'}
                        fontSize={'13px'}
                        hoverEffects={{
                            changeColor: true,
                            addUnderline: true,
                        }}
                        initialColor={'#bf94ff'}
                        hoverColor={'#a970ff'}
                        handleOnClick={() =>
                            setIsShowMoreFollowed(!isShowMoreFollowed)
                        }
                    />
                </div>
            )}

            {isOpen ? (
                <div className={styles.recommended_channels_wrapper}>
                    <div className={styles.sidebar_heading}>
                        recommended channels
                    </div>
                </div>
            ) : (
                <div className={styles.collapsed_icon_wrapper}>
                    <HoverableIcon
                        icon={
                            <SlCamrecorder color={iconColor} size={iconSize} />
                        }
                        toolTipText={'Recommended Channels'}
                        toolTipPosition={'right'}
                    />
                </div>
            )}

            <div>
                {followedStreamsData.data.map((streamData, idx) => {
                    let indexToShow = setIsShowMoreRecommended
                        ? followedStreamsData.data.length - 1
                        : 6;
                    if (idx <= indexToShow) {
                        return (
                            <React.Fragment key={streamData.id}>
                                <ChannelListItem
                                    isOpen={isOpen}
                                    streamData={streamData}
                                />
                            </React.Fragment>
                        );
                    }
                })}
            </div>

            {isOpen && (
                <div className={styles.show_more}>
                    <HoverableText
                        text={isShowMoreRecommended ? 'Show less' : 'Show more'}
                        fontSize={'13px'}
                        hoverEffects={{
                            changeColor: true,
                            addUnderline: true,
                        }}
                        initialColor={'#bf94ff'}
                        hoverColor={'#a970ff'}
                        handleOnClick={() =>
                            setIsShowMoreRecommended(!isShowMoreRecommended)
                        }
                    />
                </div>
            )}
        </div>
    );
};

export default SideBar;
