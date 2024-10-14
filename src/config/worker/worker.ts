import {
    Worker,
    getEnvironmentData,
    isMainThread,
    parentPort,
    workerData,
    WorkerOptions
} from "worker_threads";

//
// WORKAROUND (GAMBIARRA)
//
export const workerTs = (file: string, wkOpts: WorkerOptions) => {
    wkOpts.eval = true;
    if (!wkOpts.workerData) {
        wkOpts.workerData = {};
    }
    wkOpts.workerData.__filename = file;
    return new Worker(`
            const wk = require('worker_threads');
            require('ts-node').register();
            let file = wk.workerData.__filename;
            delete wk.workerData.__filename;
            require(file);
        `,
        wkOpts
    );
}
/*

new Worker(`
      const https = require('https');
      https.get('${url}', (res) => {
        let data = '';
        res.on('data', (chunk) => { data += chunk; });
        res.on('end', () => { 
          resolve(JSON.parse(data));
        });
      }).on('error', reject);
    `, { eval: true });

*/