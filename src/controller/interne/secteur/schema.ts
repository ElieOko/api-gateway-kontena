import Joi from 'joi';
import { ISecteur } from '../../../utils/interface/enterprise/ISecteur';


export const schema = Joi.object<ISecteur>({
    name : Joi.string().min(5).required(),
    description : Joi.string().default(""),
})

