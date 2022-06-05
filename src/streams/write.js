import { writeFile, appendFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
const __dirname = dirname(fileURLToPath(import.meta.url));

export const write = async () => {
    const stdout = process.stdout;
    const stdin = process.stdin;
    const filePath = join(__dirname, "files", "fileToWrite.txt");
    writeFile(filePath, "");
    stdout.write("Hello, friend! Write your text\n");

    stdin.on("data", (data) => {
        appendFile(filePath, data);
    });
};

write();
