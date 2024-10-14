import Joi from 'joi';
import { IUserDocument as IUser, IUserAuth } from '../../utils/interface/user/IUser';
import { IToken } from '../../utils/interface/token/IToken';

export const schemaUserAuth = Joi.object<IUserAuth>({
    username : Joi.string().required(),
    password : Joi.string().required(),
    workspace: Joi.number()
})

export const schemaUserSystem = Joi.object<IUser>({
    username : Joi.string().min(5).required(),
    email :  Joi.string().min(5).required(),
    password : Joi.string().required(),
    family_name : Joi.string(),
    last_name : Joi.string(),
    activity : Joi.string(),
})
