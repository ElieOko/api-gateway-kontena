import { Router } from "express";
import { auth } from "../../../middleware/authorization";
import local from "../../../config/routes/local";
import { create, getAll } from "./model";
import { MessageApi } from "../../../utils/constant/message";
import { schema } from "./schema";

export const router = Router();
const routage       = local.service
//,[auth]

router.get(routage.list,async(req:any,res:any)=>{
    const data = await getAll();
    res.status(201).send({services:data}); 
    
})

router.post(routage.create,async(req:any,res:any)=>{
    const {error,value} = schema.validate(req.body);
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

router.get(routage.detail,[auth],async(req:any,res:any)=>{

})



router.delete(routage.delete,[auth],async(req:any,res:any)=>{

})

router.put(routage.update,[auth],async(req:any,res:any)=>{

})