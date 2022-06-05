export const parseEnv = () => {
    const env = process.env;
    const vars = Object.keys(env);
    const regExp = /^RSS_/;
    const rssVars = vars.map((variable) => {
        if (regExp.test(variable)) {
            return `${variable}=${env[variable]}`;
        }
    }).filter(variable => variable);
    console.log(rssVars.join('; '))
};

parseEnv();
