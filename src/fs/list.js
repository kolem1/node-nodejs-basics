import * as fs from "node:fs/promises";
import * as path from "node:path";
import { fileURLToPath } from "node:url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const list = async () => {
    const filesFolderPath = path.join(__dirname, "files");
    try {
        await fs.access(filesFolderPath);
        const files = await fs.readdir(filesFolderPath);
        files.forEach(file => {
            console.log(file);
        });
    } catch (err) {
        throw new Error("FS operation failed");
    }
};

list()