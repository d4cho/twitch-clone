// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const TWITCH_CLIENT_ID = '8ij3s1z5tiw8faqjr3er9ktadm8m8g';
const TWITCH_SECRET = '8t20nsg5ijudin9kaqvg3v0aehydsb';

// get token
const getToken = async () => {
    let response = await fetch('https://id.twitch.tv/oauth2/token', {
        body: `client_id=${TWITCH_CLIENT_ID}&client_secret=${TWITCH_SECRET}&grant_type=client_credentials`,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        method: 'POST',
    });

    let data = await response.json();
    return data;
};

export default function gameInfoHandler(req, res) {
    getToken().then(async (accessData) => {
        const { access_token } = accessData;

        let response = await fetch(
            `https://api.twitch.tv/helix/games?name=${req.query.gameName}`,
            {
                headers: {
                    Authorization: `Bearer ${access_token}`,
                    'Client-Id': TWITCH_CLIENT_ID,
                },
            }
        );

        let allData = await response.json();

        res.send(allData);
    });
}
