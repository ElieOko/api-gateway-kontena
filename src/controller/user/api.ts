import { Router } from "express";
import { Worker, isMainThread, parentPort, workerData } from 'worker_threads';
 
const worker = new Worker('./worker.ts');
//isMainThread, workerData, parentPort
//https://engineering.brevo.com/worker-threads-in-node/?utm_source=adwords&utm_medium=cpc&utm_content=&utm_extension=&utm_campaign=20022742923&km_device=c&gad_source=1&gclid=CjwKCAjw2Je1BhAgEiwAp3KY7wKA9sVhmpAwptH37dnrvzsP4EwPrYhzLzPLT4OysS7E0_BlM7BuNhoCKXkQAvD_BwE
const router = Router();
router.post("/",(req,res)=>{

})

