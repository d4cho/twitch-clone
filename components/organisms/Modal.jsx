import React from 'react';
import styles from '../../styles/Modal.module.css';
import HoverableIcon from '../atoms/HoverableIcon';
import { IoClose } from 'react-icons/io5';

const Modal = ({ isOpen, onBackdropClick, modalContent }) => {
    const handleBackdropClick = () => {
        onBackdropClick();
    };

    return (
        <div className={[styles.container, isOpen && styles.isOpen].join(' ')}>
            <div
                className={styles.backdrop}
                onClick={handleBackdropClick}
            ></div>
            <div className={styles.modal_content}>
                <div className={styles.close_btn_wrapper}>
                    <HoverableIcon
                        icon={
                            <button
                                className={styles.close_btn}
                                onClick={handleBackdropClick}
                            >
                                <IoClose size={20} />
                            </button>
                        }
                    />
                </div>
                {modalContent}
            </div>
        </div>
    );
};

export default Modal;
