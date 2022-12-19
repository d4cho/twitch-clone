import React from 'react';
import styles from '../../styles/GameCard.module.css';
import { SlOptionsVertical } from 'react-icons/sl';
import HoverableIcon from '../atoms/HoverableIcon';
import HoverableText from '../atoms/HoverableText';
import Chip from '../atoms/Chip';
import { nFormatter } from '../../utils/functions';

const GameCard = ({ cardData, bgColor }) => {
    const { name, box_art_url, viewer_count, tags } = cardData;

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div
                    className={styles.image_wrapper}
                    style={{
                        '--bgColor': bgColor,
                    }}
                >
                    <div className={styles.bg_top_left}></div>
                    <div className={styles.bg_bottom_right}></div>
                    <div className={styles.bg_left}></div>
                    <div className={styles.bg_bottom}></div>
                    <img
                        className={styles.image}
                        src={box_art_url}
                        alt={name}
                    />
                </div>

                <div className={styles.name_wrapper}>
                    <div className={styles.name}>
                        <HoverableText
                            text={name}
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
                    <HoverableIcon
                        icon={<SlOptionsVertical />}
                        toolTipText={'Options'}
                        toolTipPosition={'bottom'}
                    />
                </div>
                <HoverableText
                    text={`${nFormatter(viewer_count, 1)} viewers`}
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
        </div>
    );
};

export default GameCard;
