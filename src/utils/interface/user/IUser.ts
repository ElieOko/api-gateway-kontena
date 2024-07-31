import { IToken } from "../token/IToken"

export interface IUser{
    user_id : Number
    username : String
    email : String
    token? : Array<IToken>
    is_active : Boolean
    password : String
}

export interface IUserAuth{
    username : String
    password : String
}