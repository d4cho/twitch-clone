import React, { useState } from 'react';
import styles from '../../styles/HomeDisplaySection.module.css';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import DisplayCard from '../molecules/GameCard';
import StreamCard from '../molecules/StreamCard';
import { generateHexCode } from '../../utils/functions';

const HomeDisplaySection = ({
    contentData,
    perLine,
    type,
    headerText,
    showMore,
}) => {
    const [isShowMore, setIsShowMore] = useState(false);

    return (
        <div className={styles.container}>
            <div className={styles.header_wrapper}>
                <h2>{headerText}</h2>
            </div>
            <div className={styles.content_wrapper}>
                {contentData &&
                    contentData.map((data, idx) => {
                        let bgColor = generateHexCode();

                        if (idx + 1 <= perLine) {
                            return (
                                <React.Fragment key={data.id}>
                                    {type === 'game' && (
                                        <DisplayCard
                                            cardData={data}
                                            bgColor={bgColor}
                                        />
                                    )}
                                    {type === 'stream' && (
                                        <StreamCard
                                            cardData={data}
                                            bgColor={bgColor}
                                        />
                                    )}
                                </React.Fragment>
                            );
                        }
                    })}
            </div>
            {showMore && isShowMore && (
                <div className={styles.content_wrapper}>
                    {contentData &&
                        contentData.map((data, idx) => {
                            let bgColor = generateHexCode();

                            if (idx + 1 > perLine && idx + 1 <= perLine * 2) {
                                return (
                                    <React.Fragment key={data.id}>
                                        {type === 'game' && (
                                            <DisplayCard
                                                cardData={data}
                                                bgColor={bgColor}
                                            />
                                        )}
                                        {type === 'stream' && (
                                            <StreamCard
                                                cardData={data}
                                                bgColor={bgColor}
                                            />
                                        )}
                                    </React.Fragment>
                                );
                            }
                        })}
                </div>
            )}
            {showMore && (
                <div className={styles.show_more_wrapper}>
                    <div className={styles.hor_line} />
                    <div className={styles.button_wrapper}>
                        <button
                            className={styles.button}
                            onClick={() => setIsShowMore(!isShowMore)}
                        >
                            <span>
                                {isShowMore ? 'Show less' : 'Show more'}
                            </span>
                            {isShowMore ? (
                                <FiChevronUp size={20} />
                            ) : (
                                <FiChevronDown size={20} />
                            )}
                        </button>
                    </div>
                    <div className={styles.hor_line} />
                </div>
            )}
        </div>
    );
};

export default HomeDisplaySection;
