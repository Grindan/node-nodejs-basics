import fs from 'fs/promises';

export default async (fileName) => {
    try {
        await fs.stat(fileName);
        return true;
    } catch {
        return false;
    }
};
