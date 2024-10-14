import { logger } from "../../config/log/logger";
import { User } from "../../database/mongo";
import {IUser } from "../../utils/interface/user/IUser";

export async function create(data : IUser) {
    const user = new User(data)
    try {
        const result = await user.save();
        console.log("Success")
        return result
    } catch (error : any) {
        logger.error(`user|${error.message}`)
        console.log(error.message); 
        return {errors : error.message,message:error.message}
    }  
}
export async function update(data : IUser,id:Number){
    const state = await User.findByIdAndUpdate(id,{$set:data},{new:true})
    return state
}
export async function getAll(){
    const pageNumber = 2;
    const pageSize = 100000;
    const data = await User.find()
    .limit(pageSize)
    .sort({user_id:1})
    .select('user_id username email -_id');
    return data;
}
export function countData(){
    let size : any="" ;
    (async()=>{
    size = await getAll();
    })()
    return size.length
}
export async function remove(id: Number){
    const state = await User.findByIdAndDelete(id);
    return state;
}

export async function getById(id : Number){
    const state = await User.findOne({user_id:id});
    return state;
}
export async function getCurrentId(id : string){
    const state = await User.findById(id);
    return state;
}

module.exports = {
    remove,
    update,
    create,
    getAll,
    getById
};