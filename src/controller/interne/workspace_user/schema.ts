import Joi from 'joi';
import { IWorkSpaceUser } from '../../../utils/interface/workspace/IWorkSpace';

export const schema = Joi.object<IWorkSpaceUser>({
    workspace : Joi.number(),
    user      : Joi.number(),
    is_active : Joi.boolean().default(true)
})