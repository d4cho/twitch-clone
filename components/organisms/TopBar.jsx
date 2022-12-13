import React from 'react';
import styles from '../../styles/TopBar.module.css';
import HoverableText from '../atoms/HoverableText';
import { FiMoreVertical } from 'react-icons/fi';
import HoverableIcon from '../atoms/HoverableIcon';

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
                <div>
                    <input type='text' placeholder='need to make this' />
                </div>
                <div>right</div>
            </div>
        </nav>
    );
};

export default TopBar;
