import React from 'react';
import styles from '../../styles/HoverableText.module.css';

const HoverableText = ({
    text,
    fontSize,
    hoverEffects,
    initialColor,
    hoverColor,
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
        >
            {text}
        </div>
    );
};

export default HoverableText;
