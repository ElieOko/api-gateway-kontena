import { Router } from "express";
import { axiosRequestServerFinance } from "../../../config/request/axios/requestServerToServer";
import Distributed from "../../../config/routes/remote/distributed";

export const router = Router();
const remote = Distributed
router.get("/chart/account/all",(req,res)=>{
    axiosRequestServerFinance().get(remote.finance.chart_account.list).then(resp=>{
        res.status(201).send({chart_account :resp.data.chart_account});
    });
})