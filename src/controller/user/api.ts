import { Router } from "express";
import { Worker, isMainThread, parentPort, setEnvironmentData, workerData } from 'worker_threads';
import { schemaUserAuth, schemaUserSystem } from "./schema";
import { User } from "../../database/mongo";
import { performance } from 'perf_hooks';
import { countData, create, getAll, getById, getCurrentId } from "./model";
import {IUserDocument as IUser  } from "../../utils/interface/user/IUser";
import cluster from "cluster";
import _ from "lodash";
import { auth } from "../../middleware/authorization";
import { admin } from "../../middleware/admin";
import local from "../../config/routes/local";

//https://engineering.brevo.com/worker-threads-in-node/?utm_source=adwords&utm_medium=cpc&utm_content=&utm_extension=&utm_campaign=20022742923&km_device=c&gad_source=1&gclid=CjwKCAjw2Je1BhAgEiwAp3KY7wKA9sVhmpAwptH37dnrvzsP4EwPrYhzLzPLT4OysS7E0_BlM7BuNhoCKXkQAvD_BwE
export const routerUser = Router();
const route = local.user

routerUser.get(route.list,async(req:any,res:any)=>{
    // const $currentUser = await getById(req.user._id);
    const user = await getAll();
    //,current: $currentUser
    res.status(201).send({users:user }); 
})

routerUser.get(route.detail,auth,async(req,res)=>{
    const user = await getById(Number(req.params.id))
    res.status(201).send({users:user}); 
})

routerUser.get("/refresh/token",(req,res)=>{

});
//https://peerjs.com/examples
