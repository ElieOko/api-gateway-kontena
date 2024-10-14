import Joi from 'joi';
import { IServiceXP } from '../../../utils/interface/service/IService';

export const schema = Joi.object<IServiceXP>({
    name : Joi.string().min(5).required(),
    url : Joi.string().min(5).required(),
    is_active : Joi.boolean().default(true),
    code : Joi.string().min(2),
    route_api : Joi.string(),
    ip_address : Joi.string(),
    port : Joi.number(),
    hosted_by : Joi.string(),
    location : Joi.string(),
    language : Joi.string(),
    framework : Joi.string(),
    description : Joi.string()
})

