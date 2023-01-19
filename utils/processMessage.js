// const isEmoteIdx = (idx, emotesObj) => {
//     if (!emotesObj) return false;

//     for (const emote in emotesObj) {
//         let emoteRanges = emotesObj[emote];

//         for (const emoteRange of emoteRanges) {
//             const range = emoteRange.split('-');
//             let start = parseInt(range[0]);
//             let end = parseInt(range[1]);

//             if (idx >= start && idx <= end) {
//                 return emote;
//             }
//         }
//     }
// };

export const processMessage = (message, emotesObj) => {
    if (!emotesObj || Object.keys(emotesObj).length === 0) {
        return false;
    }

    let emoteIdsUsedArr = Object.keys(emotesObj);
    let processedMessage = message;

    for (const emoteId in emotesObj) {
        let emoteRange = emotesObj[emoteId][0];
        const range = emoteRange.split('-');
        let start = parseInt(range[0]);
        let end = parseInt(range[1]) + 1;

        let emoteWord = message.substring(start, end);

        processedMessage = processedMessage.replaceAll(emoteWord, emoteId);
    }

    let processedMsgArr = processedMessage.split(' ');

    for (let i = 0; i < processedMsgArr.length; i++) {
        if (emoteIdsUsedArr.includes(processedMsgArr[i])) {
            let newEl = {
                type: 'emote',
                value: `https://static-cdn.jtvnw.net/emoticons/v2/${processedMsgArr[i]}/default/light/1.0`,
            };
            processedMsgArr.splice(i, 1, newEl);
        } else {
            let newEl = {
                type: 'string',
                value: processedMsgArr[i],
            };
            processedMsgArr.splice(i, 1, newEl);
        }
    }

    return processedMsgArr;
};
