import React from 'react';
import styles from '../../styles/TopBar.module.css';
import HoverableText from '../atoms/HoverableText';
import HoverableIcon from '../atoms/HoverableIcon';
import { FiMoreVertical } from 'react-icons/fi';
import { TbCrown } from 'react-icons/tb';
import { AiOutlineInbox } from 'react-icons/ai';
import { BiMessageAlt } from 'react-icons/bi';

const TopBar = () => {
    return (
        <nav className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.left}>
                    <div>
                        <a href='/'>
                            <img
                                src={'/twitch-favicon.png'}
                                alt={'twitch logo'}
                            />
                        </a>
                    </div>
                    <div>
                        <a href='/directory/following'>
                            <HoverableText
                                text={'Following'}
                                fontSize={'1.3rem'}
                                hoverEffects={{
                                    changeColor: true,
                                    addUnderline: false,
                                }}
                                initialColor={'#efeff1'}
                                hoverColor={'#a970ff'}
                            />
                        </a>
                    </div>
                    <div>
                        <a href='/directory'>
                            <HoverableText
                                text={'Browse'}
                                fontSize={'1.3rem'}
                                hoverEffects={{
                                    changeColor: true,
                                    addUnderline: false,
                                }}
                                initialColor={'#efeff1'}
                                hoverColor={'#a970ff'}
                            />
                        </a>
                    </div>
                    <div>
                        <HoverableIcon
                            icon={<FiMoreVertical color='#efeff1' size={22} />}
                            toolTipText={'More'}
                            toolTipPosition={'bottom'}
                        />
                    </div>
                </div>
                <div className={styles.center}>
                    <input type='text' placeholder='need to make this' />
                </div>
                <div className={styles.right}>
                    <div>
                        <HoverableIcon
                            icon={<TbCrown color='#efeff1' size={22} />}
                            toolTipText={'Prime Loot'}
                            toolTipPosition={'bottom'}
                        />
                    </div>
                    <div>
                        <HoverableIcon
                            icon={<AiOutlineInbox color='#efeff1' size={22} />}
                            toolTipText={'Notifications'}
                            toolTipPosition={'bottom'}
                        />
                    </div>
                    <div>
                        <HoverableIcon
                            icon={<BiMessageAlt color='#efeff1' size={22} />}
                            toolTipText={'Whispers'}
                            toolTipPosition={'bottom'}
                        />
                    </div>
                    <div>
                        <button>Get Bits</button>
                    </div>
                    <div>profile</div>
                </div>
            </div>
        </nav>
    );
};

export default TopBar;
