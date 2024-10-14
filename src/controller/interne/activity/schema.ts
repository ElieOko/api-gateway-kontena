import Joi from 'joi';
import { IActivity } from '../../../utils/interface/user/IActivity';

export const schemaActivity = Joi.object<IActivity>({
    name : Joi.string().min(5).required(),
    code : Joi.string().min(2).required(),
    description : Joi.string().default(""),
    level : Joi.number().default(1)
})

