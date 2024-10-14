
import { logger } from "../../../config/log/logger";
import { WorkSpaceUser as Model  } from "../../../database/mongo";
import { IWorkSpaceUser as TypeModel} from '../../../utils/interface/workspace/IWorkSpace';

export async function create(data : TypeModel) {
    const state = new Model(data)
    try {
        const result = await state.save();
        console.log("Success")
        return result
    } catch (error : any) {
        logger.error(`workspaceuser|${error.message}`)
        console.log(error.message); 
        return {errors : error.message,message:error.message}
    }  
}
export async function update(data : TypeModel,id:string){
    const state = await Model.findByIdAndUpdate(id,{$set:data},{new:true})
    return state
}
export async function getAll(){
    const pageNumber = 2;
    const pageSize = 100000;
    const data = await Model.find()
    .limit(pageSize)
    .select('-_id');
    return data;
}
export function countData(){
    let size : any="" ;
    (async()=>{
    size = await getAll();
    })()
    return size.length
}
export async function remove(id: string){
    const state = await Model.findByIdAndDelete(id);
    return state;
}

export async function getById(id : string){
    const state = await Model.findOne({_id:id});
    return state;
}


module.exports = {
    remove,
    update,
    create,
    getAll,
    getById
};