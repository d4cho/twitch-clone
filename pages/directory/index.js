import React, { useState, useEffect } from 'react';
import GameCard from '../../components/molecules/GameCard';
import StreamCard from '../../components/molecules/StreamCard';
import NavBar from '../../components/organisms/NavBar';
import styles from '../../styles/Directory.module.css';
import { generateHexCode } from '../../utils/functions';

export const getStaticProps = async (context) => {
    const res1 = await fetch(`http://localhost:3000/top-streams`);
    const topStreams = await res1.json();
    const res2 = await fetch(`http://localhost:3000/top-games`);
    const topGames = await res2.json();

    return {
        props: {
            topStreams: topStreams,
            topGames: topGames,
        },
    };
};

const Directory = ({ topStreams, topGames }) => {
    const [selectedCategory, setSelectedCategory] = useState('categories');
    const [topGamesList, setTopGamesList] = useState({
        games: [...topGames.data],
        cursor: topGames.pagination.cursor,
    });
    const [topStreamsList, setTopStreamsList] = useState({
        streams: [...topStreams.data],
        cursor: topStreams.pagination.cursor,
    });

    useEffect(() => {
        setTopGamesList({
            games: [...topGames.data],
            cursor: topGames.pagination.cursor,
        });
        setTopStreamsList({
            streams: [...topStreams.data],
            cursor: topStreams.pagination.cursor,
        });
    }, [selectedCategory]);

    const handleCategoryClick = (selected) => {
        setSelectedCategory(selected);
    };

    const handleScroll = (e) => {
        if (
            e.target.scrollTop + e.target.clientHeight + 1 >=
            e.target.scrollHeight
        ) {
            if (selectedCategory === 'categories') {
                callMoreGamesApi();
            } else {
                callMoreStreamsApi();
            }
        }
    };

    const callMoreGamesApi = async () => {
        const res = await fetch(
            `http://localhost:3000/top-games/more/${topGamesList.cursor}`
        );
        const data = await res.json();

        setTopGamesList({
            games: [...topGamesList.games, ...data.data],
            cursor: data.pagination.cursor,
        });
    };

    const callMoreStreamsApi = async () => {
        const res = await fetch(
            `http://localhost:3000/top-streams/more/${topStreamsList.cursor}`
        );
        const data = await res.json();

        setTopStreamsList({
            streams: [...topStreamsList.streams, ...data.data],
            cursor: data.pagination.cursor,
        });
    };

    return (
        <div className={styles.container} onScroll={(e) => handleScroll(e)}>
            <h1 className={styles.title}>Browse</h1>
            <div className={styles.nav_wrapper}>
                <NavBar />
            </div>
            <div className={styles.categories_channels}>
                <div
                    className={[
                        selectedCategory === 'categories' && styles.selected,
                    ].join(' ')}
                    onClick={() => handleCategoryClick('categories')}
                >
                    <h2>Categories</h2>
                </div>
                <div
                    className={[
                        selectedCategory === 'live' && styles.selected,
                    ].join(' ')}
                    onClick={() => handleCategoryClick('live')}
                >
                    <h2>Live Channels</h2>
                </div>
            </div>
            <div className={styles.filter_sort_container}>
                <div className={styles.filter_sort_wrapper}>
                    <div className={styles.filter_sort_heading}>
                        Filter by Tag
                    </div>
                    <div>
                        <input type='text' placeholder='Search Tags' />
                    </div>
                </div>
                <div className={styles.filter_sort_wrapper}>
                    <div className={styles.filter_sort_heading}>Sort by</div>
                    <div>
                        <select>
                            <option value={null}>Recommended For You</option>
                            <option value='actual value 1'>
                                Display Text 1
                            </option>
                            <option value='actual value 2'>
                                Display Text 2
                            </option>
                            <option value='actual value 3'>
                                Display Text 3
                            </option>
                        </select>
                    </div>
                </div>
            </div>
            <div className={styles.list_wrapper}>
                {selectedCategory === 'categories' &&
                    topGamesList.games.map((gameData) => {
                        let bgColor = generateHexCode();
                        return (
                            <GameCard cardData={gameData} bgColor={bgColor} />
                        );
                    })}

                {selectedCategory === 'live' &&
                    topStreamsList.streams.map((streamData) => {
                        let bgColor = generateHexCode();
                        return (
                            <StreamCard
                                cardData={streamData}
                                bgColor={bgColor}
                            />
                        );
                    })}
            </div>
        </div>
    );
};

export default Directory;
