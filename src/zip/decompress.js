import { createReadStream, createWriteStream } from "node:fs";
import { createGunzip, gunzip } from "node:zlib";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
const __dirname = dirname(fileURLToPath(import.meta.url));

export const decompress = async () => {
    const archivePath = join(__dirname, "files", "archive.gz");
    const filePath = join(__dirname, "files", "fileToCompress.txt");
    const stream = createReadStream(archivePath);
    stream
        .pipe(createGunzip())
        .pipe(createWriteStream(filePath))
        .on("finish", () => console.log(`Decompressed`));
};

decompress();
