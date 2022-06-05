import * as fs from "node:fs/promises";
import * as path from "node:path";
import { fileURLToPath } from "node:url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const rename = async () => {
    const wrongFilepath = path.join(__dirname, "files", "wrongFilename.txt");
    const filepath = path.join(__dirname, "files", "properFilename.txt");
    const errorMessage = "FS operation failed";
    try {
        await fs.access(filepath);
        throw new Error(errorMessage)
    } catch (err) {
        if (err.message !== errorMessage) {
            try {
                await fs.rename(wrongFilepath, filepath);
            } catch {
                throw new Error(errorMessage)
            }
        } else {
            throw err;
        }
    }
};

rename();
