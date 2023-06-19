import fs from 'fs';

import createPath from '../helpers/createPath.js';

export const write = async () => {
    const filePath = createPath(import.meta.url, 'files', 'fileToWrite.txt');

    const writableStream = fs.createWriteStream(filePath, { encoding: 'utf-8' });
    process.stdin.pipe(writableStream);
    console.log('ℹ️  Use CTRL+D to stop writing process.');
};

write();
