import fs from 'fs';

import createPath from '../helpers/createPath.js';

export const read = async () => {
    const filePath = createPath(import.meta.url, 'files', 'fileToRead.txt');
    const readableStream = fs.createReadStream(filePath, { encoding: 'utf-8' });

    process.stdout.write('✅ File content:\n');
    readableStream.on('data', (chunk) => process.stdout.write(chunk));
    readableStream.on('end', () => process.stdout.write('\n'));
};

read();
