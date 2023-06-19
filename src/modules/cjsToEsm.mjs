import path from 'path';
import fs from 'fs/promises';
import { fileURLToPath } from 'url';
import { release, version } from 'os';
import { createServer as createServerHttp } from 'http';

import './files/c.js';

import createPath from '../helpers/createPath.js';

const random = Math.random();

// const unknownObjectFileName = random > 0.5 ? './files/a.json' : './files/b.json';
// const filePath = createPath(import.meta.url, 'files', 'a.json');
// const unknownObject = JSON.parse(await fs.readFile(filePath, { assert: { type: 'json' } }));
let unknownObject;

if (random > 0.5) {
    const filePath = createPath(import.meta.url, 'files', 'a.json');
    unknownObject = JSON.parse(await fs.readFile(filePath, { assert: { type: 'json' } }));
} else {
    const filePath = createPath(import.meta.url, 'files', 'b.json');
    unknownObject = JSON.parse(await fs.readFile(filePath, { assert: { type: 'json' } }));
}
console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

const __filename = fileURLToPath(import.meta.url);
console.log(`Path to current file is ${__filename}`);
const __dirname = path.dirname(__filename);
console.log(`Path to current directory is ${__dirname}`);

const createMyServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

export { unknownObject, createMyServer };
