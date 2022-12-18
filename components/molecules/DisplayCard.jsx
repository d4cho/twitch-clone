import React from 'react';
import styles from '../../styles/DisplayCard.module.css';
import { SlOptionsVertical } from 'react-icons/sl';
import HoverableIcon from '../atoms/HoverableIcon';
import HoverableText from '../atoms/HoverableText';
import Chip from '../atoms/Chip';

const DisplayCard = ({ gameData }) => {
    const { name, box_art_url, viewers, tags } = gameData;

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <img className={styles.image} src={box_art_url} alt={name} />
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
                    text={`${viewers} viewers`}
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
                    {tags.map((tag, idx) => {
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

export default DisplayCard;
