import { createReadStream, createWriteStream } from "node:fs";
import { createGzip } from "node:zlib";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
const __dirname = dirname(fileURLToPath(import.meta.url));

export const compress = async () => {
    const archivePath = join(__dirname, "files", "archive.gz");
    const filePath = join(__dirname, "files", "fileToCompress.txt");
    const stream = createReadStream(filePath);
    stream
        .pipe(createGzip())
        .pipe(createWriteStream(archivePath))
        .on("finish", () =>
            console.log(`Compressed`)
        );
};

compress();
