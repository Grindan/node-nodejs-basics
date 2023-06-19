import fs from 'fs/promises';

import exists from './exists.js';

import createPath from '../helpers/createPath.js';

const ERROR_MESSAGE = 'FS operation failed';

export const rename = async () => {
    const sourceFilePath = createPath(import.meta.url, 'files', 'properFilename.md');
    const oldFilePath = createPath(import.meta.url, 'files', 'wrongFilename.txt');

    const sourceFileExists = await exists(sourceFilePath);
    const newFileExists = await exists(oldFilePath);

    const canBeRenamed = !sourceFileExists || newFileExists;
    if (!canBeRenamed) {
        throw new Error(ERROR_MESSAGE);
    }

    await fs.rename(oldFilePath, sourceFilePath);

    console.log('✅ Successfully renamed.');
};

rename();
