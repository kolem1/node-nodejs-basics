import { writeFile } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
const __dirname = dirname(fileURLToPath(import.meta.url));

export const create = async () => {
    const filepath = join(__dirname, "files", "fresh.txt");
    try {
        await writeFile(filepath, "I am fresh and young", { flag: "wx" });
    } catch {
        throw new Error("FS operation failed");
    }
};

create();
