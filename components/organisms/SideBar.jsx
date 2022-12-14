import React, { useState } from 'react';
import styles from '../../styles/SideBar.module.css';
import HoverableIcon from '../atoms/HoverableIcon';
import { BsArrowBarLeft } from 'react-icons/bs';
import { BsArrowBarRight } from 'react-icons/bs';
import { BsArrowDownUp } from 'react-icons/bs';
import ChannelListItem from '../molecules/ChannelListItem';

const SideBar = () => {
    const [isOpen, setIsOpen] = useState(true);

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

            {isOpen && (
                <div className={styles.followed_channels_wrapper}>
                    <div className={styles.sidebar_heading}>
                        Followed channels
                    </div>
                    <BsArrowDownUp color={iconColor} size={16} />
                </div>
            )}

            <div>
                <ChannelListItem isOpen={isOpen} />
                <ChannelListItem isOpen={isOpen} />
                <ChannelListItem isOpen={isOpen} />
            </div>

            {isOpen && (
                <div className={styles.recommended_channels_wrapper}>
                    <div className={styles.sidebar_heading}>
                        recommended channels
                    </div>
                </div>
            )}

            <div>
                <ChannelListItem isOpen={isOpen} />
                <ChannelListItem isOpen={isOpen} />
                <ChannelListItem isOpen={isOpen} />
            </div>
        </div>
    );
};

export default SideBar;
