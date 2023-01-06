import React, { useState, useEffect } from 'react';
import styles from '../../../styles/GameDetails.module.css';
import { useRouter } from 'next/router';
import GameInfoLayout from '../../../components/molecules/GameInfoLayout';
import Modal from '../../../components/organisms/Modal';

const PAGES = ['Live Channels', 'Upcoming', 'Videos', 'Clips'];

const GameDetails = () => {
    const router = useRouter();
    const { gameName } = router.query;

    const [selectedPage, setSelectedPage] = useState('Live Channels');
    const [gameInfo, setGameInfo] = useState({});
    const [isModalOpen, setIsModalOpen] = useState(false);

    //  add api call to game info
    useEffect(() => {
        fetch(`http://localhost:3000/game-info/${gameName}`)
            .then((res) => res.json())
            .then((data) => setGameInfo(data.data[0]));
    }, []);

    return (
        <div className={styles.container}>
            <Modal
                isOpen={isModalOpen}
                onBackdropClick={() => setIsModalOpen(false)}
                modalContent={
                    <GameInfoLayout
                        gameName={gameName}
                        gameInfo={gameInfo}
                        setIsModalOpen={setIsModalOpen}
                        isFromModal
                    />
                }
            />

            <GameInfoLayout
                gameName={gameName}
                gameInfo={gameInfo}
                setIsModalOpen={setIsModalOpen}
            />

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
