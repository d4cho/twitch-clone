import React from 'react';
import styles from '../../styles/HoverableText.module.css';

const HoverableText = ({
    text,
    fontSize,
    hoverEffects,
    initialColor,
    hoverColor,
    handleOnClick,
}) => {
    const { changeColor, addUnderline } = hoverEffects;

    return (
        <div
            className={styles.container}
            style={{
                '--fontSize': fontSize,
                '--initialColor': initialColor,
                '--hoverColor': changeColor ? hoverColor : initialColor,
                '--textDecoration': addUnderline ? 'underline' : 'none',
            }}
            onClick={handleOnClick}
        >
            {text}
        </div>
    );
};

export default HoverableText;
