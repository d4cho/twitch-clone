const TWITCH_CLIENT_ID = process.env.NEXT_PUBLIC_TWITCH_CLIENT_ID;
const TWITCH_SECRET = process.env.NEXT_PUBLIC_TWITCH_SECRET;

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

export default function handler(req, res) {
    getToken().then(async (accessData) => {
        const { access_token } = accessData;

        let response = await fetch(
            `https://api.twitch.tv/helix/videos?game_id=${req.query.gameId}`,
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
