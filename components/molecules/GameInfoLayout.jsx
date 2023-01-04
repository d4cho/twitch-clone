import React from 'react';
import styles from '../../styles/GameInfoLayout.module.css';

const GameInfoLayout = ({ gameName, gameInfo }) => {
    const { box_art_url } = gameInfo;
    const sizeAdjustedBoxArtUrl =
        box_art_url &&
        box_art_url.replace('{width}', '144').replace('{height}', '192');

    return (
        <div className={styles.container}>
            <div>
                {/* put loading state here */}
                <img src={sizeAdjustedBoxArtUrl} alt={gameName + 'box art'} />
            </div>
            <div>
                <h1>{gameName}</h1>
                <div className={styles.viewers_followers_chips_wrapper}>
                    <p>viewers</p>
                    <p>followers</p>
                    <div>chips</div>
                </div>
                <div>
                    <p>
                        League of Legends is a fast-paced, competitive online
                        game that blends the speed and intensity of an RTS with
                        RPG elements. Two teams of powerful champions, each with
                        a unique design and playstyle, battle head-to-head
                        across multiple battlefields and game modes. With an
                        ever-expanding roster of champions, frequent updates and
                        a thriving tournament scene, League of Legends offers
                        endless replayability for players of every skill level.
                    </p>
                </div>
                <button>Follow</button>
            </div>
        </div>
    );
};

export default GameInfoLayout;
