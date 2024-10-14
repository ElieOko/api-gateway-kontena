import { IServiceXP } from "../service/IService"
import { IUser } from "../user/IUser"

export interface IWorkSpace{
    space_id : number
    workspace: string
    domain   : string
    microservice : Array<any>
}
export interface IWorkSpaceUser{
    user_workspace_id   : number
    user                : number
    workspace           : number
    // service_space       : IServiceXP
    is_active           : Boolean
}

