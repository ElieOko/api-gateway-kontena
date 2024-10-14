import { Router } from "express";
import { auth } from "../../../middleware/authorization";
import local from "../../../config/routes/local";
import { create, getAll } from "./model";
import { MessageApi } from "../../../utils/constant/message";
import { schema } from "./schema";
import { Workspace } from "../../../database/mongo";
import { performance } from 'perf_hooks';
import { logger } from "../../../config/log/logger";

export const router = Router();
const routage       = local.workspace
//,[auth]

router.get(routage.list,async(req:any,res:any)=>{
    const data = await getAll();
    res.status(201).send({services:data}); 
    
})

router.post(routage.create,async(req:any,res:any)=>{
    const start = performance.now();
    const {error,value} = schema.validate(req.body);
    if(error) res.status(400).send({message : `${MessageApi.errorValidate} ${error.message}`}); else ( async()=>{
        value.space_id = (await getAll()).length + 1;
        const $data = await create(value);
        if($data?.errors){
            res.status(400).send({message:$data?.errors?.message});
        }
        else{
            res.status(201).send({message:MessageApi.success,workspace:$data});
        }   
    })()
    const end = performance.now();
    console.log(`Durée : ${end - start} ms ${req.ip}`);
    logger.info(`CoreMain|action|workspace|create|Durée : ${end - start} ms`)
});

router.post(routage.auth,async(req:any,res:any)=>{
    const {body:data} = req;
    const workspaceSystem = await Workspace.findOne({workspace:data.name});
    if(!workspaceSystem) return res.status(404).send({message :`Workspace not found...`});
    return res.status(201).send({message:"Workspace found",workspace:workspaceSystem.space_id});
})
router.get(routage.detail,[auth],async(req:any,res:any)=>{

})



router.delete(routage.delete,[auth],async(req:any,res:any)=>{

})

router.put(routage.update,[auth],async(req:any,res:any)=>{

})