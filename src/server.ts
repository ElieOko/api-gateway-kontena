import express from "express";
import { mongo } from "./database/mongo";
import { create } from "./controller/user/model";
import { user, userExtend } from "./utils/constant/user";
import cluster from "cluster";
import { Worker, getEnvironmentData, isMainThread, setEnvironmentData, workerData } from "worker_threads";
import { serviceAchat } from "./thread/worker/worker_achat";
import helmet from "helmet";
import morgan from "morgan";
import * as os from 'os';

const app = express();
let clusterCpuRun = false;
app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(helmet());
const port = process.env.PORT || 5000;
const numCPUs = os.cpus().length;
if (app.get("env")==="development") {
    app.use(morgan('tiny'));
}
setEnvironmentData('user',userExtend)
if(cluster.isPrimary){
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`Worker ${worker.process.pid} died`);
    });

} else{
    if(cluster?.worker?.id === 1){
        if(!clusterCpuRun){ 
            serviceAchat();
            clusterCpuRun = true
        }
        app.listen(port,()=> {
            console.log(`Server launch ${port}...`)
        });
    }
      
}
// if(isMainThread){
   
// } 

