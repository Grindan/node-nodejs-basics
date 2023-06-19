import fs from 'fs/promises';

import createPath from '../helpers/createPath.js';

const ERROR_MESSAGE = 'FS operation failed';

export const read = async () => {
    try {
        const filePath = createPath(import.meta.url, 'files', 'fileToRead.txt');

        const fileContent = await fs.readFile(filePath, 'utf-8');

        console.log(`\nℹ️  File content is following:\n\n${fileContent}\n`);
    } catch {
        throw new Error(ERROR_MESSAGE);
    }
};

read();
