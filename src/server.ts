import express from "express";
import { mongo } from "./database/mongo";
import { create } from "./controller/user/model";
import { user } from "./utils/constant/user";
import cluster from "cluster";


const app = express();
const port = process.env.PORT || 3000;
if(cluster.isPrimary){
    console.log("master")
    cluster.fork()
    cluster.fork()
}
else{

    app.get("/test",(req,res)=>{
    res.send("Hello Bro");
     console.log("Hi dev");
     //create(user)

     })

    app.listen(port,()=> {console.log("child started")});
}
// if (app.get("env")==="development") {
//     // app.use(morgan('tiny'));
// }



// app.listen(port,()=> {
//     console.log(`Server launch ${port}...`)
//     console.log(`worker pid=${process.pid}`)
// });
