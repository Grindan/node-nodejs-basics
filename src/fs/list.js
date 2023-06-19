import fs from 'fs/promises';

import createPath from '../helpers/createPath.js';

const ERROR_MESSAGE = 'FS operation failed';

export const list = async () => {
    try {
        const path = createPath(import.meta.url, 'files');

        const files = await fs.readdir(path);
        console.log("ℹ️  The 'files' folder includes the following array of files: ", files);
    } catch {
        throw new Error(ERROR_MESSAGE);
    }
};

list();
