import React from 'react';
import styles from '../../styles/HomeDisplaySection.module.css';
import HoverableText from '../atoms/HoverableText';
import { FiChevronDown } from 'react-icons/fi';

const HomeDisplaySection = ({ linkText, headerText, showMore }) => {
    return (
        <div className={styles.container}>
            <div className={styles.header_wrapper}>
                <h2>
                    {linkText && (
                        <span>
                            <HoverableText
                                text={linkText}
                                fontSize={'18px'}
                                fontWeight={'bold'}
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
                        </span>
                    )}
                    {headerText}
                </h2>
            </div>
            <div className={styles.content_wrapper}>content</div>
            {showMore && (
                <div className={styles.show_more_wrapper}>
                    <div className={styles.hor_line}></div>
                    <div className={styles.button_wrapper}>
                        <button className={styles.button}>
                            <span>Show more</span>
                            <FiChevronDown size={20} />
                        </button>
                    </div>
                    <div className={styles.hor_line}></div>
                </div>
            )}
        </div>
    );
};

export default HomeDisplaySection;
