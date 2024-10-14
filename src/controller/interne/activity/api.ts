import { Router } from "express";
import { auth } from "../../../middleware/authorization";
import local from "../../../config/routes/local";
import { create, getAll } from "./model";
import { schemaActivity } from "./schema";
import { MessageApi } from "../../../utils/constant/message";

export const routerActivity = Router();
const activity = local.activity
//,[auth]

routerActivity.get(activity.list,async(req:any,res:any)=>{
    const data = await getAll();
    res.status(201).send({activities:data}); 
    
})

routerActivity.post(activity.create,async(req:any,res:any)=>{
    const {error,value} = schemaActivity.validate(req.body);
    if(error) res.status(400).send({message : `${MessageApi.errorValidate} ${error.message}`}); else ( async()=>{
        const $data = await create(value)
        if($data?.errors){
            res.status(400).send({message:$data?.errors.message})
        }
        else{
            res.status(201).send({message:MessageApi.success})
        }
    })()
})

routerActivity.get(activity.detail,[auth],async(req:any,res:any)=>{

})



routerActivity.delete(activity.delete,[auth],async(req:any,res:any)=>{

})

routerActivity.put(activity.update,[auth],async(req:any,res:any)=>{

})