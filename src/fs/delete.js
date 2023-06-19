import fs from 'fs/promises';

import exists from './exists.js';

import createPath from '../helpers/createPath.js';

const ERROR_MESSAGE = 'FS operation failed';

export const remove = async () => {
    const filePath = createPath(import.meta.url, 'files', 'fileToRemove.txt');
    const fileExists = await exists(filePath);
    if (!fileExists) {
        throw new Error(ERROR_MESSAGE);
    }

    await fs.rm(filePath);

    console.log('✅ Successfully deleted.');
};

remove();
