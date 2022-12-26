import React, { useState } from 'react';
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

    const handleCategoryClick = (selected) => {
        setSelectedCategory(selected);
    };

    return (
        <div className={styles.container}>
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
                    topGames.data.map((gameData) => {
                        let bgColor = generateHexCode();
                        return (
                            <GameCard cardData={gameData} bgColor={bgColor} />
                        );
                    })}

                {selectedCategory === 'live' &&
                    topStreams.data.map((streamData) => {
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
