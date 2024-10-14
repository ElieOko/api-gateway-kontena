import { Router } from "express";
import { auth } from "../../../middleware/authorization";
import local from "../../../config/routes/local";
import { create, getAll } from "./model";
import { schema } from "./schema";
import { MessageApi } from "../../../utils/constant/message";

export const router = Router();
const sector = local.secteur
//,[auth]

router.get(sector.list,async(req:any,res:any)=>{
    const data = await getAll();
    res.status(201).send({sector:data}); 
    
})

router.post(sector.create,async(req:any,res:any)=>{
    const {error,value} = schema.validate(req.body);
    if(error) res.status(400).send({message : `${MessageApi.errorValidate} ${error.message}`}); else ( async()=>{
        const data = await getAll();
        value.id = data.length + 1;
        const $data = await create(value)
        if($data?.errors){
            res.status(400).send({message:$data?.errors.message})
        }
        else{
            res.status(201).send({message:MessageApi.success})
        }
    })()
})

router.get(sector.detail,[auth],async(req:any,res:any)=>{

})



router.delete(sector.delete,[auth],async(req:any,res:any)=>{

})

router.put(sector.update,[auth],async(req:any,res:any)=>{

})