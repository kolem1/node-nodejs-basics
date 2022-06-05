import * as fs from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
const __dirname = dirname(fileURLToPath(import.meta.url));

export const read = async () => {
    const filepath = join(__dirname, "files", "fileToRead.txt");
    try {
        const fileContent = await fs.readFile(filepath);
        console.log(fileContent.toString());
    } catch {
        throw new Error("FS operation failed");
    }
};

read();
