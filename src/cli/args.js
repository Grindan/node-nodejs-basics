import process from 'process';

export const parseArgs = () => {
    const args = process.argv.slice(2);

    if (!args.length) {
        console.log('❌ No arguments passed.');
        return;
    }

    const argumentPairs = [];

    for (let i = 0; i < args.length; i = i + 2) {
        const propName = args[i].slice(2);
        const value = args[i + 1];

        if (propName && value) {
            argumentPairs.push(`${propName} is ${value}`);
        }
    }

    const result = argumentPairs.join(', ');

    console.log(result);
};

parseArgs();
