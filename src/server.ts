import express from "express";
import { mongo } from "./database/mongo";
import { create } from "./controller/user/model";
import { user, userExtend } from "./utils/constant/user";
import cluster from "cluster";
import { performance } from 'perf_hooks';
import { Worker, getEnvironmentData, isMainThread, setEnvironmentData, workerData } from "worker_threads";
import { workerTask } from "./thread/worker/worker_achat";
import helmet from "helmet";
import morgan from "morgan";
import * as os from 'os';
import cors from "cors";
import { logger } from "./config/log/logger";
import { router as auth } from "./controller/user/auth";
import { routerUser as userRoute } from "./controller/user/api";
import { routerActivity as activity } from "./controller/interne/activity/api";
import { router as enterprise} from "./controller/interne/enterprise/api";
import { router as service } from "./controller/interne/service/api";
import { router as sector } from "./controller/interne/secteur/api";
import { router as  statusJuridique} from "./controller/interne/status_juridique/api";
import { router as workspaceUser} from "./controller/interne/workspace_user/api";
import { router as workspace } from "./controller/interne/workspace/api";
import { router as finance } from "./controller/service/finance/api";
import { router as achat} from "./controller/service/achat/api";
import { router as stockInventory } from "./controller/service/stock_inventory/api";

const app = express();
const aliasPath = "/api/v1";
const port = process.env.PORT || 5000;
let clusterCpuRun = false;
app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(helmet());
app.use(cors())
app.set('trust proxy', true);
app.use(aliasPath,activity);
app.use(aliasPath,auth);
app.use(aliasPath,enterprise);
app.use(aliasPath,userRoute);
app.use(aliasPath,sector);
app.use(aliasPath,service);
app.use(aliasPath,statusJuridique);
app.use(aliasPath,workspace);
app.use(aliasPath,workspaceUser);
//finance
app.use(aliasPath,finance);
//grh
//achat
app.use(aliasPath,achat);

//vente

//stock
app.use(aliasPath,stockInventory);
const numCPUs = os.cpus().length;
if(cluster.isPrimary){
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }
    cluster.on('exit', (worker, code, signal) => {
        console.log(`Worker ${worker.process.pid} died`);
    });
    console.log("full =>",getEnvironmentData("userSystem"));
    cluster.on('message',(msg)=>{
        console.log("value ", msg)
    })
} else{
    console.log("test->")
    
    if(cluster?.worker?.id === 1){
        if(!clusterCpuRun){ 
           //workerTask();
           console.log("full =>",getEnvironmentData("userSystem"));
           clusterCpuRun = true
        }  
    }   
    app.listen(port,()=> {
        logger.info(`Serveur démarré sur le port ${port}`);
        console.log(`Server launch ${port}...`)
    });
}
// if(isMainThread){
   //setEnvironmentData('user',userExtend)
if (app.get("env")==="development") {
    app.use(morgan('tiny'));
}

// } 



//https://clinicjs.org/
//https://docs.chaicode.com/server-setup/
//https://dev.to/dhirajpatra/django-kafka-3lh7