import React from 'react';
import styles from '../../styles/HomeDisplaySection.module.css';
import { FiChevronDown } from 'react-icons/fi';
import DisplayCard from '../molecules/DisplayCard';
import categoryData from '../../assets/data/channel-categories.json';

const HomeDisplaySection = ({ headerText, showMore }) => {
    return (
        <div className={styles.container}>
            <div className={styles.header_wrapper}>
                <h2>{headerText}</h2>
            </div>
            <div className={styles.content_wrapper}>
                {categoryData.data.map((gameData) => {
                    return (
                        <React.Fragment key={gameData.id}>
                            <DisplayCard gameData={gameData} />
                        </React.Fragment>
                    );
                })}
            </div>
            {showMore && (
                <div className={styles.show_more_wrapper}>
                    <div className={styles.hor_line} />
                    <div className={styles.button_wrapper}>
                        <button className={styles.button}>
                            <span>Show more</span>
                            <FiChevronDown size={20} />
                        </button>
                    </div>
                    <div className={styles.hor_line} />
                </div>
            )}
        </div>
    );
};

export default HomeDisplaySection;
