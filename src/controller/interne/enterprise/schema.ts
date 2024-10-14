import Joi from 'joi';
import { IEnterprise } from '../../../utils/interface/enterprise/IEnterprise';

export const schema = Joi.object<IEnterprise>({
    user_workspace_id : Joi.number(),
    name : Joi.string().min(5).required(),
    title_name : Joi.string().default(""),
    is_active : Joi.boolean().default(true),
    adresse : Joi.object(),
    secteur : Joi.string(),
    status_juridique : Joi.string(),
    cordonnee : Joi.object(),
    fiscal : Joi.object(),
})
/*
    user_workspace_id : { type: Number,unique:true},
    name    : { type: String,unique:true}, 
    title_name :{type: String}, 
    adresse    :{type:Array<IAddressEnterprise>,required:false},
    secteur    :{type:Array<ISecteur>,required:true}, 
    cordonnee  :{type:Array<ICoordonnee>,required:false},
    fiscal     :{type:Array<IFiscal>,required:false}, 
    status_juridique:{type:Array<IStatusJuridique>,required:false},
    is_active : {type:Boolean, default:true}
*/