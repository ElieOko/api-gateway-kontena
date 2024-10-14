import { Router } from "express";
import { Worker, isMainThread, parentPort, setEnvironmentData, workerData } from 'worker_threads';
import { schemaUserAuth, schemaUserSystem } from "./schema";
import { User, WorkSpaceUser } from "../../database/mongo";
import { countData, create, getAll } from "./model";
import { IUser, IUserDocument } from "../../utils/interface/user/IUser";
import _ from "lodash";
//@ts-ignore
import { compareSync, genSaltSync, hashSync } from "bcrypt-ts";
//@ts-ignore
import { sign } from "jsonwebtoken";
import local from "../../config/routes/local";
import { performance } from 'perf_hooks';
import { logger } from "../../config/log/logger";
//https://engineering.brevo.com/worker-threads-in-node/?utm_source=adwords&utm_medium=cpc&utm_content=&utm_extension=&utm_campaign=20022742923&km_device=c&gad_source=1&gclid=CjwKCAjw2Je1BhAgEiwAp3KY7wKA9sVhmpAwptH37dnrvzsP4EwPrYhzLzPLT4OysS7E0_BlM7BuNhoCKXkQAvD_BwE
export const router = Router();
const route = local.user
router.post(route.auth,(req,res)=>{
    // Mesurer le temps d'exécution
const start = performance.now();
// Votre code ici

    const {value : data, error} = schemaUserAuth.validate(req.body);
    if(error) return res.status(400).send({message:`Erreur au niveau de la validation des données`});
    (async()=>{
        const userSystem = await User.findOne({username:data.username});
        if(!userSystem) return res.status(404).send({message :`Votre identifiant n'est pas valide.`});
            if(!compareSync(data.password,userSystem.password)) return res.status(404).send({message:`Mot de passe invalide.`});
                const state = await WorkSpaceUser.findOne({user:userSystem.user_id,workspace:data.workspace});
                if(!userSystem.isAdmin){
                    if(!state) return res.status(401).send({message :`Ce compte n'est pas associé à ce workspace.`});
                    const token = sign({_id:userSystem.user_id, isAdmin : userSystem.isAdmin},'jwtPrivateKey')
                    res.status(200).header("x-auth-token",token).send({message:"Utilisateur connecter avec succès",user:userSystem,token:token});
                }
                else{
                    const token = sign({_id:userSystem.user_id, isAdmin : userSystem.isAdmin},'jwtPrivateKey')
                    
                    res.status(200).header("x-auth-token",token).send({message:"Utilisateur connecter avec succès",user:userSystem});
                }         
    })()
    const end = performance.now();
    console.log(`Durée : ${end - start} ms`);
    logger.info(`Perfomance | Durée : ${end - start} ms`);
})

router.post(route.create,(req,res)=>{
    const data = schemaUserSystem.validate(req.body);
    console.log(req.body);
    if(data.error) res.status(400).send(`Erreur au niveau de la validation des données ${data.error.message}`); else (async()=>{
        const userSystem = await User.findOne({username:data.value.username});
        if(!userSystem)(async()=>{
            const array = await getAll();
            let cpt = array.length
            const salt = genSaltSync(10);
            const password_hash = hashSync(data.value.password, salt);
            const user : IUser  = {
                user_id : ++cpt,
                username : data.value.username,
                email : data.value.email,
                is_active : true,
                password : password_hash,
                family_name : data.value.family_name,
                last_name : data.value.last_name,
                activity : data.value.activity
            } 
            const $user = await create(user);
        //     const objectParent = {
        //         username :$user?.username,
        //         password :$user?.password
        //     };
        //    parentPort?.postMessage(objectParent)
        //    setEnvironmentData("userSystem",objectParent)
            if($user?.errors){
                res.status(400).send({message:$user.errors.message});
            }
            else{
                res.status(201).send({message:`Record success`,user:_.pick($user,['username','email','user_id','password'])});
            }
        })();   
        else(()=>{
            res.status(400).send({message:`Identifiant existant `});
        })()
    })()
});

