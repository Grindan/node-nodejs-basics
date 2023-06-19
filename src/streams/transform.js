import { Transform } from 'stream';

export const transform = async () => {
    console.log('ℹ️  Write sth and press Enter to reverse it.');
    console.log('ℹ️  Use CTRL+D to exit.');

    const transformer = new Transform({
        transform: (chunk, encoding, callback) => {
            const reversedChunk = chunk.toString().split('').reverse().slice(1).join('');
            callback(null, reversedChunk);
            process.stdout.write('\n');
        },
    });

    process.stdin.pipe(transformer).pipe(process.stdout);
};

transform();
