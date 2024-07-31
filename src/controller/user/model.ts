import { User } from "../../database/mongo";
import { IUser } from "../../utils/interface/user/IUser";

export async function create(data : IUser) {
    const user = new User(data)
    try {
        const result = await user.save();
        console.log("Success")
        return result
    } catch (error : any) {
        console.log(error.message); 
    }  
}
export async function update(data : IUser,id:Number){
    const state = await User.findByIdAndUpdate(id,{$set:data},{new:true})
    return state
}
export async function getAll(){
    const pageNumber = 2;
    const pageSize = 12;
    const data = await User.find()
    .limit(pageSize)
    .sort({username:1})
    .select({username:1});
    return data;
}
export async function remove(id: Number){
    const state = await User.findByIdAndDelete(id);
    return state;
}

export async function getById(id : Number){
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