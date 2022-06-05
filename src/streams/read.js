import { createReadStream } from 'node:fs'
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
const __dirname = dirname(fileURLToPath(import.meta.url));

export const read = async () => {
    const stream = createReadStream(join(__dirname, 'files', 'fileToRead.txt'), { encoding: 'utf8' })
    let wholeFile = ''
    stream.on('data', (data) => {
        wholeFile += data;
    })
    stream.on('end', () => {
        process.stdout.write(wholeFile)
    })
};

read()