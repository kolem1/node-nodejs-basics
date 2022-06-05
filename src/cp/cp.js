import { spawn } from 'node:child_process'
import { dirname, join } from "node:path";
import { stdin, stdout } from 'node:process';
import { fileURLToPath } from "node:url";
const __dirname = dirname(fileURLToPath(import.meta.url));

export const spawnChildProcess = async (args) => {
    const filepath = join(__dirname, "files", "script.js");
    const child = spawn('node', [filepath, ...args]);

    stdin.pipe(child.stdin);

    child.stdout.on('data', (data) => {
        stdout.write(data);
    })
};

spawnChildProcess([1, 2, 3, 4])