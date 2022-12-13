import React from 'react';
import styles from '../../styles/HoverableIcon.module.css';

const HoverableIcon = ({ icon, toolTipText, toolTipPosition }) => {
    const getToolTipPosition = (position) => {
        switch (position) {
            case 'top':
                return {
                    bottom: '130%',
                    left: '50%',
                    transform: 'translate(-50%, 0)',
                    '--arrowTop': '100%',
                    '--arrowLeft': '50%',
                    '--borderColor':
                        '#efeff1 transparent transparent transparent',
                };

            case 'right':
                return {
                    top: '0px',
                    left: '130%',
                    '--arrowTop': '50%',
                    '--arrowRight': '100%',
                    '--borderColor':
                        'transparent #efeff1 transparent transparent',
                    '--transformArrow': 'translate(0%, -50%)',
                };

            case 'bottom':
                return {
                    top: '130%',
                    left: '50%',
                    transform: 'translate(-50%, 0)',
                    '--arrowBottom': '100%',
                    '--arrowLeft': '50%',
                    '--borderColor':
                        'transparent transparent #efeff1 transparent',
                };

            case 'left':
                return {
                    top: '0px',
                    right: '130%',
                    '--arrowTop': '50%',
                    '--arrowLeft': '100%',
                    '--borderColor':
                        'transparent transparent transparent #efeff1',
                    '--transformArrow': 'translate(50%, -50%)',
                };

            default:
                return {
                    top: '130%',
                    left: '50%',
                    transform: 'translate(-50%, 0)',
                    '--arrowBottom': '100%',
                    '--arrowLeft': '50%',
                    '--borderColor':
                        'transparent transparent #efeff1 transparent',
                };
        }
    };

    return (
        <div className={[styles.container, styles.tooltip].join(' ')}>
            {toolTipText ? (
                <div
                    className={styles.tooltip_text}
                    style={getToolTipPosition(toolTipPosition)}
                >
                    {toolTipText}
                </div>
            ) : (
                toolTipText
            )}
            {icon}
        </div>
    );
};

export default HoverableIcon;
