import React, { useState } from 'react';
import styles from '../../styles/GameCard.module.css';
import { SlOptionsVertical } from 'react-icons/sl';
import HoverableIcon from '../atoms/HoverableIcon';
import HoverableText from '../atoms/HoverableText';
import Chip from '../atoms/Chip';
import { nFormatter } from '../../utils/functions';
import { useRouter } from 'next/router';

const GameCard = ({ cardData, bgColor }) => {
    const router = useRouter();

    const { name, box_art_url, id: gameId, tags } = cardData;
    const sizeAdjustedBoxArtUrl =
        box_art_url &&
        box_art_url.replace('{width}', '176').replace('{height}', '234');

    const [viewerCount, setViewerCount] = useState(0);

    const handleGameCardClick = (gameName) => {
        router.push(`/directory/game/${gameName}`);
    };

    return (
        <div
            className={styles.container}
            onClick={() => handleGameCardClick(name)}
        >
            <div className={styles.wrapper}>
                <div
                    className={styles.image_wrapper}
                    style={{
                        '--bgColor': bgColor,
                    }}
                >
                    <div className={styles.border_wrapper}>
                        <div className={styles.bg_top_left}></div>
                        <div className={styles.bg_bottom_right}></div>
                        <div className={styles.bg_left}></div>
                        <div className={styles.bg_bottom}></div>
                    </div>
                    <img
                        className={styles.image}
                        src={sizeAdjustedBoxArtUrl}
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
                    text={`${nFormatter(viewerCount, 1)} viewers`}
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
