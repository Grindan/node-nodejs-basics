import fs from 'fs/promises';

import exists from './exists.js';

import createPath from '../helpers/createPath.js';

const FILE_CONTENT = 'I am fresh and young';
const ERROR_MESSAGE = 'FS operation failed';

export const create = async () => {
    const filePath = createPath(import.meta.url, 'fresh.txt');
    const fileExists = await exists(filePath);

    if (fileExists) {
        throw new Error(ERROR_MESSAGE);
    }

    await fs.writeFile(filePath, FILE_CONTENT);
    console.log('✅ Successfully created.');
};

create();
