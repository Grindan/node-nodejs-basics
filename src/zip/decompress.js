import fs from 'fs';
import zlib from 'zlib';
import { pipeline } from 'stream/promises';

import createPath from '../helpers/createPath.js';

export const decompress = async () => {
    const filePath = createPath(import.meta.url, 'files', 'fileToCompress.txt');
    const archivePath = createPath(import.meta.url, 'files', 'archive.gz');

    await pipeline(fs.createReadStream(archivePath), zlib.createUnzip(), fs.createWriteStream(filePath))
        .then(() => {
            console.log('✅ Decompressed.');
        })
        .catch((err) => {
            console.log('❌ Something went wrong:', err);
        });
};

decompress();
