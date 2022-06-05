import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import * as path from "node:path";
import { fileURLToPath } from "node:url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const calculateHash = async () => {
    const file = await readFile(
        path.join(__dirname, "files", "fileToCalculateHashFor.txt")
    );
    const hash = createHash("sha256").update(file).digest("hex");
    console.log(hash);
    return hash;
};

calculateHash();
