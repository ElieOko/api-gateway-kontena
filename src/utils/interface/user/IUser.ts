import { Document } from "mongoose"
import { IToken } from "../token/IToken"
import { IActivity } from "./IActivity"

export interface IUser{
    user_id      : Number
    family_name? : string
    last_name?   : string
    username     : string
    activity?    : string
    email        : string
    token?       : Array<IToken>
    is_active    : Boolean
    password     : string
    isAdmin?     : Boolean
}

export interface IUserAuth{
    username  : string
    password  : string
    workspace : number
}
export interface IAuthSecurity{
    generateAuthToken:(user_id:number)=>string
}

export interface IUserDocument extends IUser, Document {}
