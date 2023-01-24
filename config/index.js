const dev = process.env.NODE_ENV !== 'production';

export const server = dev
    ? 'http://localhost:3000'
    : 'https://twitch-clone-gamma.vercel.app';
