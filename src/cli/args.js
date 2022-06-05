export const parseArgs = () => {
    const args = process.argv;
    const regExp = /^--/;
    args.forEach((arg, i, arr) => {
        if (regExp.test(arg)) {
            console.log(`${arg.slice(2)} is ${arr[i + 1]}`);
        }
    });
};

parseArgs();
