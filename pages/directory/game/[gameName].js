import React, { useState } from 'react';
import styles from '../../../styles/GameDetails.module.css';
import { useRouter } from 'next/router';
import GameInfoLayout from '../../../components/molecules/GameInfoLayout';

const PAGES = ['Live Channels', 'Upcoming', 'Videos', 'Clips'];

const GameDetails = () => {
    const router = useRouter();
    const { gameName } = router.query;

    const [selectedPage, setSelectedPage] = useState('Live Channels');

    //  add api call to game info
    // start ui layout

    return (
        <div className={styles.container}>
            <GameInfoLayout />

            <div className={styles.page_selector_wrapper}>
                {PAGES.map((page, idx) => {
                    return (
                        <div
                            key={idx}
                            className={[
                                selectedPage === page && styles.selected,
                            ].join(' ')}
                            onClick={() => setSelectedPage(page)}
                        >
                            <h2>{page}</h2>
                        </div>
                    );
                })}
            </div>

            <div className={styles.filter_sort_container}>
                <div className={styles.filter_sort_wrapper}>
                    <div>
                        <input type='text' placeholder='Search Tags' />
                    </div>
                </div>
                <div className={styles.filter_sort_wrapper}>
                    <div className={styles.filter_sort_heading}>Sort by</div>
                    <div>
                        <select>
                            <option value='' selected disabled hidden>
                                Viewers (High to Low)
                            </option>
                            <option value='1'>Recommended For You</option>
                            <option value='2'>Viewers (High to Low)</option>
                            <option value='3'>Viewers (Low to High)</option>
                            <option value='4'>Recently Started</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GameDetails;
