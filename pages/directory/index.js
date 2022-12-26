import React, { useState } from 'react';
import NavBar from '../../components/organisms/NavBar';
import styles from '../../styles/Directory.module.css';

const Directory = () => {
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
            <div className={styles.list_wrapper}>List of Games</div>
        </div>
    );
};

export default Directory;
