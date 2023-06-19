import fs from 'fs/promises';
import crypto from 'crypto';

import createPath from '../helpers/createPath.js';

export const calculateHash = async () => {
    const filePath = createPath(import.meta.url, 'files', 'fileToCalculateHashFor.txt');

    const data = await fs.readFile(filePath);

    const hash = crypto.createHash('sha256').update(data).digest('hex');

    console.log('✅ File hash:', hash);
    return hash;
};

calculateHash();
