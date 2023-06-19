import fs from 'fs/promises';

import exists from './exists.js';

import createPath from '../helpers/createPath.js';

const ERROR_MESSAGE = 'FS operation failed';

export const copy = async () => {
    const sourcePath = createPath(import.meta.url, 'files');
    const destinationPath = createPath(import.meta.url, 'files_copy');

    const sourceFolderExists = await exists(sourcePath);
    const destinationFolderExists = await exists(destinationPath);

    const canBeCopied = sourceFolderExists && !destinationFolderExists;
    if (!canBeCopied) {
        throw new Error(ERROR_MESSAGE);
    }

    await fs.mkdir(destinationPath);

    const files = await fs.readdir(sourcePath);
    for (const file of files) {
        await fs.copyFile(`${sourcePath}/${file}`, `${destinationPath}/${file}`);
    }

    console.log('✅ Successfully copied.');
};

copy();
