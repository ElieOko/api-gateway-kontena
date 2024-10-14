import { Router } from "express";
import Distributed from "../../../config/routes/remote/distributed";
import { axiosRequestServerAchat } from "../../../config/request/axios/requestServerToServer";
import { performance } from 'perf_hooks';
import { logger } from "../../../config/log/logger";

export const router = Router();
const remote = Distributed;
const path =[{getAll:remote.achat.supplier.list,store:remote.achat.supplier.create}];
router.get(path[0].getAll,(req,res)=>{
    const start = performance.now();
    axiosRequestServerAchat().get(remote.achat.supplier.list).then(resp=>{
        res.status(201).send({supplier :resp.data.supplier});
    });
    const end = performance.now();
    console.log(`Durée : ${end - start} ms ${req.ip}`);
    logger.info(`K-S-Achat|action|Fournisseur|all|Durée : ${end - start} ms`)
});