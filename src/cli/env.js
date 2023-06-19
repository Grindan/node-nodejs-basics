import process from 'process';

const PREFIX = 'RSS_';

export const parseEnv = () => {
    const result = Object.entries(process.env)
        .filter(([key]) => key.startsWith(PREFIX))
        .map(([key, value]) => `${key}=${value}`)
        .join('; ');

    console.log(result || `❌ There is no variable with '${PREFIX}' prefix.`);
};

parseEnv();
