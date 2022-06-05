import { Worker } from "node:worker_threads";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { cpus } from "node:os";
const __dirname = dirname(fileURLToPath(import.meta.url));

export const performCalculations = async () => {
    const cpusNumber = cpus().length;
    const results = [];
    let counter = 0;

    return new Promise((resolve) => {
        for (let i = 0; i < cpusNumber; i++) {
            const worker = new Worker(join(__dirname, "worker.js"));
            const result = {};
            results.push(result);
            worker.postMessage(10 + i);
            worker.on("error", () => {
                result.status = "error";
                result.data = null;
                counter += 1;
                if (counter === cpusNumber) {
                    console.log(results);
                    resolve(results);
                }
            });
            worker.on("message", (data) => {
                result.status = "resolved";
                result.data = data;
                counter += 1;
                if (counter === cpusNumber) {
                    console.log(results);
                    resolve(results);
                }
            });
        }
    });
};

performCalculations();
