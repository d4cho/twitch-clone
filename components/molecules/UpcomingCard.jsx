import React, { useState, useRef } from 'react';
import { FiMoreVertical } from 'react-icons/fi';
import { BsBell, BsBellFill, BsBellSlash } from 'react-icons/bs';
import { BsCheck, BsSuitHeart, BsSuitHeartFill } from 'react-icons/bs';
import styles from '../../styles/UpcomingCard.module.css';
import HoverableIcon from '../atoms/HoverableIcon';
import { FaHeartBroken } from 'react-icons/fa';
import { useAppContext } from '../../context/AppContext';

const UpcomingCard = ({ cardData }) => {
    const { alertList, setAlertList } = useAppContext();
    const { bannerText, bannerBgUrl, logoUrl, title, date, rsvp, bgColor } =
        cardData;

    const [isReminder, setIsReminder] = useState(false);
    const [isFollowing, setIsFollowing] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [isNotify, setIsNotify] = useState(true);

    let timer = useRef();

    const handleRemindClick = () => {
        clearTimeout(timer.current);

        let newAlertList = [...alertList];

        if (newAlertList.length >= 4) {
            newAlertList.pop();
        }

        if (isReminder) {
            newAlertList.unshift('Reminder removed successfully!');
            setAlertList(newAlertList);
        } else {
            newAlertList.unshift(
                "You'll be notified at 7:00 PM on 1/12 when this channel goes live."
            );
            setAlertList(newAlertList);
        }

        // FIFO alert after 5s
        timer.current = setTimeout(() => {
            setAlertList([]);
        }, 5500);

        setIsReminder(!isReminder);
    };

    return (
        <div className={styles.container} style={{ '--bgColor': bgColor }}>
            <div className={styles.bg_color}>
                <div
                    className={styles.banner_wrapper}
                    style={{
                        '--bgUrl': `url(${bannerBgUrl})`,
                    }}
                >
                    <img src={logoUrl} alt='logo' />
                </div>
                <h2 className={styles.banner_heading}>{bannerText}</h2>
            </div>
            <div className={styles.content}>
                <div className={styles.title}>{title}</div>
                <div className={styles.info}>
                    <div className={styles.time}>{date}</div>
                    <div className={styles.rsvp}>{rsvp} RSVPs</div>
                </div>
                <div className={styles.buttons_wrapper}>
                    <button
                        className={styles.remind_btn}
                        onClick={handleRemindClick}
                    >
                        <div className={styles.btn_icon}>
                            {isReminder ? (
                                <BsCheck size={22} />
                            ) : (
                                <BsBell size={18} />
                            )}
                        </div>
                        {isReminder ? 'Reminder Set' : 'Remind Me'}
                    </button>

                    <button
                        className={[
                            styles.follow_button,
                            isFollowing ? styles.following : styles.follow,
                        ].join(' ')}
                        onClick={() => setIsFollowing(!isFollowing)}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <div>
                            {isHovered ? (
                                isFollowing ? (
                                    <HoverableIcon
                                        icon={<FaHeartBroken size={20} />}
                                        toolTipText={'Unfollow'}
                                        toolTipPosition={'top'}
                                    />
                                ) : (
                                    <BsSuitHeartFill size={20} />
                                )
                            ) : isFollowing ? (
                                <BsSuitHeartFill size={20} />
                            ) : (
                                <BsSuitHeart size={16} />
                            )}
                        </div>
                        {!isFollowing && (
                            <div style={{ paddingLeft: '10px' }}>Follow</div>
                        )}
                    </button>

                    {isFollowing && (
                        <button
                            className={styles.notification_btn}
                            onClick={() => setIsNotify(!isNotify)}
                        >
                            <HoverableIcon
                                icon={
                                    isNotify ? (
                                        <BsBellFill size={20} />
                                    ) : (
                                        <BsBellSlash size={20} />
                                    )
                                }
                                toolTipText={
                                    isNotify
                                        ? 'Turn notification off'
                                        : 'Turn notification on'
                                }
                                toolTipPosition={'top'}
                            />
                        </button>
                    )}

                    <HoverableIcon
                        icon={<FiMoreVertical color='#000' size={22} />}
                    />
                </div>
            </div>
        </div>
    );
};

export default UpcomingCard;
