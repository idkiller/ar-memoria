import { resolve as resolvePath } from 'path';
import * as MRE from '@microsoft/mixed-reality-extension-sdk';
import App from './app';

function main() {
    const server = new MRE.WebHost({
        baseDir: resolvePath(__dirname, '../public'),
        baseUrl: "https://ar-memoria.herokuapp.com/"
    });

    server.adapter.onConnection(ctx => new App(ctx, server));
}

const delay = 1000;
const argv = process.execArgv.join();
const isDebug = argv.includes('inspect') || argv.includes('debug');

if (isDebug) {
    setTimeout(main, delay);
}
else {
    main();
}