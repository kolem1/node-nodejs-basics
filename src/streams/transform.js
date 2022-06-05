import { Transform } from "node:stream";

export const transform = async () => {
    const stdout = process.stdout;
    const stdin = process.stdin;
    const reverse = new Transform({
        transform(chunk, encoding, callback) {
            const string = chunk.toString().trim().split("").reverse().join('') + '\n';
            callback(null, string);
        },
    });
    stdin.pipe(reverse).pipe(stdout);
};

transform();
