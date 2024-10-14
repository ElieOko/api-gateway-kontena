import mongoose, { Model, Schema, model } from "mongoose";
import { IAuthSecurity, IUser, IUserDocument } from "../utils/interface/user/IUser";
import { IToken } from "../utils/interface/token/IToken";
import { path_connect } from "../config/service/connexion";
import { sign } from "jsonwebtoken";
import { IWorkSpace, IWorkSpaceUser } from "../utils/interface/workspace/IWorkSpace";
import { IActivity } from "../utils/interface/user/IActivity";
import { ISecteur, ISecteurType } from "../utils/interface/enterprise/ISecteur";
import { IEnterprise } from "../utils/interface/enterprise/IEnterprise";
import { IAddressEnterprise } from "../utils/interface/enterprise/IAddressEnterprise";
import { ICoordonnee } from "../utils/interface/enterprise/ICoordonnee";
import { IFiscal } from "../utils/interface/enterprise/IFiscal";
import { IStatusJuridique } from "../utils/interface/enterprise/IStatusJuridique";
import { IServiceXP } from "../utils/interface/service/IService";

export const mongo = mongoose

mongo.connect(path_connect).then(()=>{
    console.log("Connected to database");
})
.catch(error=>{
    console.log("No connected");
});

const userSchema = new Schema<IUser>({
    user_id : { type: Number},
    last_name: { type: String,   default:""},
    family_name: { type: String, default:""},
    username : { type: String, required: true, unique:true},
    password : { type:String, required : true, minlength : 5, maxlength:1024},
    email : { type: String, required: true, minlength : 5, maxlength:1024},
    token : { type:Array<IToken>,required:true},
    activity : { type:String, required:true},
    is_active : { type:Boolean, default:true},
    isAdmin : {type:Boolean, default:false}
  });

const activitySchema = new Schema<IActivity>({
    name        : {type:String,unique:true},
    code        : {type:String},
    description : {type:String},
    level       : {type:Number, required : true}
})  

const workspaceSchema = new Schema<IWorkSpace>({
    space_id :{type:Number},
    workspace :{type:String, required:true},
    domain:{type:String, default:".kontena@editor.cd"}
})

const typeSecteurSchema = new Schema<ISecteurType>({
    name : {type : String},
    description : {type : String, default: ""}
})

const secteurSchema = new Schema<ISecteur>({
    id : {type:Number,unique:true},
    name :{type:String,unique:true},
    description :{type:String},
    // type_secteur:{type : mongoose.Schema.Types.ObjectId, ref : "TypeSecteur"}
})

const workspaceUserSchema = new Schema<IWorkSpaceUser>({
    user_workspace_id :{type:Number},
    workspace :{type:Number},
    user :{type:Number},
    // service_space :{type:Array<IServiceXP>},
    is_active : {type:Boolean,default:true}
})

const enterpriseSchema = new Schema<IEnterprise>({
    user_workspace_id : { type: Number,unique:true},
    name    : { type: String,unique:true}, 
    title_name :{type: String}, 
    adresse    :{type:Array<IAddressEnterprise>,required:false},
    secteur    :{type:Array<ISecteur>,required:true}, 
    cordonnee  :{type:Array<ICoordonnee>,required:false},
    fiscal     :{type:Array<IFiscal>,required:false}, 
    status_juridique:{type:Array<IStatusJuridique>,required:false},
    is_active : {type:Boolean, default:true}
})

const statusJuridiqueSchema = new Schema<IStatusJuridique>({
    name : {type:String, required:true,unique:true},
    code : {type:String, required:true},
    description : {type:String}
})

const serviceSchema = new Schema<IServiceXP>({
    name : {type:String,unique:true},
    ip_address : {type:String,},
    description : {type:String},
    code : {type:String},
    url : {type:String,unique:true},
    hosted_by : {type:String},
    location : {type:String},
    port : {type:Number,unique:true},
    language : {type:String},
    framework : {type:String},
    is_active : {type:Boolean},

})

//userSchema.methods.generateAuthToken = (user_id : number) => sign({_id:user_id},'jwtPrivateKey')
  
//userSchema.method('generateAuthToken',(user_id:number)=>sign({_id:user_id},'jwtPrivateKey'));
export const User = model<IUser>('User', userSchema);
export const Workspace = model<IWorkSpace>('WorkSpace',workspaceSchema);
export const WorkSpaceUser = model<IWorkSpaceUser>('WorkSpaceUser',workspaceUserSchema);
export const Enterprise = model<IEnterprise>("Enterprise",enterpriseSchema);
export const Secteur = model<ISecteur>("Secteur",secteurSchema);
export const SecteurType = model<ISecteurType>("SecteurType",typeSecteurSchema);
export const Activity = model<IActivity>("Activity",activitySchema);
export const StatusJuridique = model<IStatusJuridique>("StatusJuridique",statusJuridiqueSchema);
export const Service = model<IServiceXP>("ServiceXP",serviceSchema);



//https://books.google.cd/books?hl=en&lr=&id=iMP_EAAAQBAJ&oi=fnd&pg=PP1&dq=Faut-il+augmenter+ou+diminuer+la+charge+horaire+des+enseignants+&ots=qmmXkHRXbw&sig=uJJ-yHGpPxH9anrZfoTOHgvOwzs&redir_esc=y#v=onepage&q&f=false
//https://dev.to/itnext/joi-awesome-code-validation-for-node-js-and-express-35pk
//https://documents1.worldbank.org/curated/zh/244781468026664848/pdf/328140DRC0Systeme0educatif0AFHDno68.pdf
