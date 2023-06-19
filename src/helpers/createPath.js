import path from 'path';
import url from 'url';

export default (metaUrl, ...paths) => {
    const __filename = url.fileURLToPath(metaUrl);
    const __dirname = path.dirname(__filename);
    const resultPath = path.join(__dirname, ...paths);

    return resultPath;
};
