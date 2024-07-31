import mongoose, { Schema, model } from "mongoose";
import { IUser } from "../utils/interface/user/IUser";
import { IToken } from "../utils/interface/token/IToken";
import { path_connect } from "../config/service/connexion";

export const mongo = mongoose

mongo.connect(path_connect).then(()=>{
    console.log("Connected to database");
})
.catch(error=>{
    console.log("No connected");
});
const userSchema = new Schema<IUser>({
    user_id : {type:Number,required:true},
    username : { type: String, required: true},
    password : {type:String, required : true},
    email : { type: String, required: true},
    token : { type:Array<IToken>,required:true},
    is_active : {type:Boolean, default:true}
  });


  
export const User = model<IUser>('User', userSchema);