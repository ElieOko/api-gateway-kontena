import { logger } from "../../../config/log/logger";
import { Secteur } from "../../../database/mongo";
import { ISecteur } from '../../../utils/interface/enterprise/ISecteur';

export async function create(data : ISecteur) {
    const secteur = new Secteur(data)
    try {
        const result = await secteur.save();
        console.log("Success")
        return result
    } catch (error : any) {
        logger.error(`secteur|${error.message}`)
        console.log(error.message); 
        return {errors : error.message,message:error.message}
    }  
}
export async function update(data : ISecteur,id:string){
    const state = await Secteur.findByIdAndUpdate(id,{$set:data},{new:true})
    return state
}
export async function getAll(){
    const pageNumber = 2;
    const pageSize = 100000;
    const data = await Secteur.find()
    .limit(pageSize)
    .select('');
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
    const state = await Secteur.findByIdAndDelete(id);
    return state;
}

export async function getById(id : string){
    const state = await Secteur.findOne({_id:id});
    return state;
}


module.exports = {
    remove,
    update,
    create,
    getAll,
    getById
};