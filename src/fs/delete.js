import { unlink } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
const __dirname = dirname(fileURLToPath(import.meta.url));

export const remove = async () => {
    const filepath = join(__dirname, "files", "fileToRemove.txt");
    try {
        await unlink(filepath);
    } catch {
        throw new Error('FS operation failed')
    }
};

remove();