import { parentPort } from 'node:worker_threads'

// n should be received from main thread
export const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

export const sendResult = (content) => {
    const result = nthFibonacci(content);
    parentPort.postMessage(result);
};

parentPort.on('message', sendResult)