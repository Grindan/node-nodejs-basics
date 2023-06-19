import fs from 'fs';
import zlib from 'zlib';
import { pipeline } from 'stream/promises';

import createPath from '../helpers/createPath.js';

export const compress = async () => {
    const filePath = createPath(import.meta.url, 'files', 'fileToCompress.txt');
    const archivePath = createPath(import.meta.url, 'files', 'archive.gz');

    await pipeline(fs.createReadStream(filePath), zlib.createGzip(), fs.createWriteStream(archivePath))
        .then(() => {
            console.log('✅ Compressed.');
        })
        .catch((err) => {
            console.log('❌ Something went wrong:', err);
        });
};

compress();
