import React, { useEffect, useState, useRef } from 'react';
import styles from '../../styles/ChatBox.module.css';
import ComfyJS from 'comfy.js';
import HoverableIcon from '../atoms/HoverableIcon';
import { BsArrowBarRight } from 'react-icons/bs';
import { RiGroupLine } from 'react-icons/ri';
import { IoIosSettings } from 'react-icons/io';

/*
*** use this link to generate chat token ***

https://id.twitch.tv/oauth2/authorize?
response_type=token
&client_id=q6batx0epp608isickayubi39itsckt
&redirect_uri=https://twitchapps.com/tmi/&scope=chat:read+chat:edit+channel:moderate+whispers:read+whispers:edit+channel_editor+channel:read:redemptions+user:read:email
*/

const ChatBox = ({ channelName, isShowChat, setIsShowChat }) => {
    const myRef = useRef();
    const [chats, setChats] = useState([]);
    const [myChatMessage, setMyChatMessage] = useState('');

    useEffect(() => {
        if (channelName) {
            ComfyJS.Init(channelName);
            handleChats();

            ComfyJS.Init(
                process.env.NEXT_PUBLIC_TWITCHUSER,
                process.env.NEXT_PUBLIC_OAUTH
            );
        }
    }, [channelName]);

    const handleChats = () => {
        ComfyJS.onChat = (user, message, flags, self, extra) => {
            setChats((prevState) => {
                return [
                    ...prevState,
                    {
                        user,
                        message,
                    },
                ];
            });

            myRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest',
            });
        };
    };

    const handleChange = (e) => {
        e.preventDefault();
        setMyChatMessage(e.target.value);
    };

    const handleChatClick = () => {
        ComfyJS.Say(myChatMessage);
        setMyChatMessage('');
    };

    return (
        <div
            className={styles.container}
            style={{
                display: isShowChat ? 'flex' : 'none',
            }}
        >
            <div className={styles.chats_top}>
                <div onClick={() => setIsShowChat(false)}>
                    <HoverableIcon
                        icon={<BsArrowBarRight size={20} />}
                        toolTipText={'Collapse'}
                        toolTipPosition={'right'}
                    />
                </div>
                <div className={styles.title}>Stream Chat</div>
                <HoverableIcon
                    icon={<RiGroupLine size={20} />}
                    toolTipText={'Community'}
                    toolTipPosition={'left'}
                />
            </div>
            <div className={styles.chats_wrapper}>
                {chats.map((message, idx) => {
                    let last = idx === chats.length - 1;

                    return (
                        <div
                            ref={last ? myRef : null}
                            key={idx}
                            className={styles.chat}
                            style={{ paddingBottom: last ? '10px' : '5px' }}
                        >{`${message.user}: ${message.message}`}</div>
                    );
                })}
            </div>
            <div className={styles.chats_bottom}>
                <input
                    className={styles.text_input}
                    type='text'
                    placeholder='Send a message'
                    value={myChatMessage}
                    onChange={(e) => handleChange(e)}
                    onKeyDown={(e) => e.key === 'Enter' && handleChatClick()}
                />
                <div className={styles.buttons_wrapper}>
                    <div style={{ marginRight: '10px' }}>
                        <HoverableIcon
                            icon={<IoIosSettings size={20} />}
                            toolTipText={'Chat Settings'}
                            toolTipPosition={'top'}
                        />
                    </div>
                    <button
                        className={styles.chat_button}
                        onClick={handleChatClick}
                    >
                        Chat
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ChatBox;
