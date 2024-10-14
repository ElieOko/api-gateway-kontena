import { logger } from "../../../config/log/logger";
import { StatusJuridique } from "../../../database/mongo";
import { IStatusJuridique } from '../../../utils/interface/enterprise/IStatusJuridique';


export async function create(data : IStatusJuridique) {
    const state = new StatusJuridique(data)
    try {
        const result = await state.save();
        console.log("Success")
        return result
    } catch (error : any) {
        logger.error(`status_juridique|${error.message}`)
        console.log(error.message); 
        return {errors : error.message,message:error.message}
    }  
}
export async function update(data : IStatusJuridique,id:string){
    const state = await StatusJuridique.findByIdAndUpdate(id,{$set:data},{new:true})
    return state
}
export async function getAll(){
    const pageNumber = 2;
    const pageSize = 100000;
    const data = await StatusJuridique.find()
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
    const state = await StatusJuridique.findByIdAndDelete(id);
    return state;
}

export async function getById(id : string){
    const state = await StatusJuridique.findOne({_id:id});
    return state;
}


module.exports = {
    remove,
    update,
    create,
    getAll,
    getById
};