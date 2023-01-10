import React, { useState, useEffect } from 'react';
import styles from '../../../styles/GameDetails.module.css';
import { useRouter } from 'next/router';
import GameInfoLayout from '../../../components/molecules/GameInfoLayout';
import Modal from '../../../components/organisms/Modal';
import { generateHexCode } from '../../../utils/functions';
import StreamCard from '../../../components/molecules/StreamCard';

const PAGES = ['Live Channels', 'Upcoming', 'Videos', 'Clips'];

const GameDetails = () => {
    const router = useRouter();
    const { gameName } = router.query;

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedTab, setSelectedTab] = useState('Live Channels');
    const [gameInfo, setGameInfo] = useState({});
    const [topStreamsList, setTopStreamsList] = useState({
        streams: [],
        cursor: '',
    });
    const [topClipsList, setTopClipsList] = useState({
        clips: [],
        cursor: '',
    });
    const [topVideosList, setTopVideosList] = useState({
        videos: [],
        cursor: '',
    });

    //  add api call to game info
    useEffect(() => {
        if (gameName) {
            // game info api
            fetch(`http://localhost:3000/game-info/${gameName}`)
                .then((res) => res.json())
                .then((data) => {
                    setGameInfo(data.data[0]);

                    // get stream / clips / videos
                    callGetApi(data.data[0].id);
                });
        }
    }, [gameName, selectedTab]);

    const handleScroll = (e) => {
        if (
            e.target.scrollTop + e.target.clientHeight + 1 >=
            e.target.scrollHeight
        ) {
            callGetMoreApi();
        }
    };

    const callGetApi = (gameId) => {
        switch (selectedTab) {
            case 'Live Channels':
                fetch(`http://localhost:3000/top-streams/${gameId}`)
                    .then((res) => res.json())
                    .then((data) =>
                        setTopStreamsList({
                            streams: data.data,
                            cursor: data.pagination.cursor,
                        })
                    );
                break;

            case 'Videos':
                fetch(`http://localhost:3000/get-videos/${gameId}`)
                    .then((res) => res.json())
                    .then((data) =>
                        setTopVideosList({
                            videos: data.data,
                            cursor: data.pagination.cursor,
                        })
                    );
                break;

            case 'Clips':
                fetch(`http://localhost:3000/get-clips/${gameId}`)
                    .then((res) => res.json())
                    .then((data) =>
                        setTopClipsList({
                            clips: data.data,
                            cursor: data.pagination.cursor,
                        })
                    );
                break;

            default:
                break;
        }
    };

    const callGetMoreApi = async () => {
        switch (selectedTab) {
            case 'Live Channels':
                const res = await fetch(
                    `http://localhost:3000/top-streams/more/${gameInfo.id}/${topStreamsList.cursor}`
                );
                const data = await res.json();

                setTopStreamsList({
                    streams: [...topStreamsList.streams, ...data.data],
                    cursor: data.pagination.cursor,
                });
                break;

            case 'Videos':
                const res1 = await fetch(
                    `http://localhost:3000/get-videos/more/${gameInfo.id}/${topVideosList.cursor}`
                );
                const data1 = await res1.json();

                setTopVideosList({
                    videos: [...topVideosList.videos, ...data1.data],
                    cursor: data1.pagination.cursor,
                });
                break;

            case 'Clips':
                const res2 = await fetch(
                    `http://localhost:3000/get-clips/more/${gameInfo.id}/${topClipsList.cursor}`
                );
                const data2 = await res2.json();

                setTopClipsList({
                    clips: [...topClipsList.clips, ...data2.data],
                    cursor: data2.pagination.cursor,
                });
                break;

            default:
                break;
        }
    };

    return (
        <div className={styles.container} onScroll={(e) => handleScroll(e)}>
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
                                selectedTab === page && styles.selected,
                            ].join(' ')}
                            onClick={() => setSelectedTab(page)}
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

            <div className={styles.list_wrapper}>
                {selectedTab === 'Live Channels' &&
                    topStreamsList.streams.map((streamData) => {
                        let bgColor = generateHexCode();
                        return (
                            <StreamCard
                                cardData={streamData}
                                bgColor={bgColor}
                            />
                        );
                    })}

                {selectedTab === 'Videos' &&
                    topVideosList.videos.map((videosData) => {
                        let bgColor = generateHexCode();
                        return (
                            <StreamCard
                                cardData={videosData}
                                bgColor={bgColor}
                                type={'videos'}
                            />
                        );
                    })}

                {selectedTab === 'Clips' &&
                    topClipsList.clips.map((clipData) => {
                        let bgColor = generateHexCode();
                        return (
                            <StreamCard
                                cardData={clipData}
                                bgColor={bgColor}
                                type={'clips'}
                            />
                        );
                    })}
            </div>
        </div>
    );
};

export default GameDetails;
