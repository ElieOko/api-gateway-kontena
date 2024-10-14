import Joi from 'joi';
import { IStatusJuridique } from '../../../utils/interface/enterprise/IStatusJuridique';

export const schema = Joi.object<IStatusJuridique>({
    name : Joi.string().min(5).required(),
    code : Joi.string().min(2).required()
})

