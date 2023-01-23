import React, { useState } from 'react';
import styles from '../../styles/Carousel.module.css';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import HoverableIcon from '../atoms/HoverableIcon';
import CarouselCard from '../molecules/CarouselCard';

const Carousel = ({ liveStreamData }) => {
    const [activeSlide, setActiveSlide] = useState(0);

    const handlePrevClick = () => {
        setActiveSlide((prevState) => {
            return (8 + prevState - 1) % 8;
        });
    };
    const handleNextClick = () => {
        setActiveSlide((prevState) => {
            return (prevState + 1) % 8;
        });
    };
    const handleSlideClick = (idx) => {
        setActiveSlide(idx);
    };

    return (
        <div className={styles.container}>
            <button
                className={[styles.button, styles.button_prev].join(' ')}
                onClick={handlePrevClick}
            >
                <HoverableIcon icon={<FiChevronLeft size={25} />} />
            </button>
            {liveStreamData.map((streamInfo, idx) => {
                let active;
                let next;
                let next2;
                let next3;
                let prev;
                let prev2;
                let prev3;

                if (idx === activeSlide) active = true;
                if (idx === (activeSlide + 1) % 8) next = true;
                if (idx === (activeSlide + 2) % 8) next2 = true;
                if (idx === (activeSlide + 3) % 8) next3 = true;
                if (idx === (8 + activeSlide - 1) % 8) prev = true;
                if (idx === (8 + activeSlide - 2) % 8) prev2 = true;
                if (idx === (8 + activeSlide - 3) % 8) prev3 = true;

                return (
                    <div
                        key={idx}
                        className={[
                            styles.slide,
                            active && styles.active_slide,
                            next && styles.next_slide,
                            next2 && styles.next2_slide,
                            next3 && styles.next3_slide,
                            prev && styles.prev_slide,
                            prev2 && styles.prev2_slide,
                            prev3 && styles.prev3_slide,
                            !(
                                active ||
                                next ||
                                next2 ||
                                next3 ||
                                prev ||
                                prev2 ||
                                prev3
                            ) && styles.hide_slide,
                        ].join(' ')}
                        // style={{ backgroundColor: item.color }}
                        onClick={() => handleSlideClick(idx)}
                    >
                        <div
                            className={[
                                styles.slide_cover,
                                !active && styles.opaque_cover,
                            ].join(' ')}
                        >
                            <CarouselCard
                                streamInfo={streamInfo}
                                isActiveSlide={active}
                            />
                        </div>
                    </div>
                );
            })}
            <button
                className={[styles.button, styles.button_next].join(' ')}
                onClick={handleNextClick}
            >
                <HoverableIcon icon={<FiChevronRight size={25} />} />
            </button>
        </div>
    );
};

export default Carousel;
