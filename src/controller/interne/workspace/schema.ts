import Joi from 'joi';
import { IServiceXP } from '../../../utils/interface/service/IService';
import { IWorkSpace } from '../../../utils/interface/workspace/IWorkSpace';

export const schema = Joi.object<IWorkSpace>({
    workspace : Joi.string().min(3).required(),
    domain    : Joi.string().min(3).default("kontena@editor.cd"),
    microservice : Joi.array()
})