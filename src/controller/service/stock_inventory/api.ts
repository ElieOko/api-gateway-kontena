import { Router } from 'express';
import { performance } from 'perf_hooks';
import Distributed from '../../../config/routes/remote/distributed';
import { axiosRequestServerStockInventory } from '../../../config/request/axios/requestServerToServer';
import { auth } from '../../../middleware/authorization';

export const router = Router();
const remote = Distributed.stockInventory
router.get(remote.devise.list, async(req,res)=>{
    await axiosRequestServerStockInventory().get(remote.devise.list).then(resp=>{
        res.status(201).send({devise :resp.data.devise});
    });
})

router.get(remote.inventaire.list,(req,res)=>{
    axiosRequestServerStockInventory().get(remote.inventaire.list).then(resp=>{
        res.status(201).send({inventaire :resp.data.inventaire});
    });
})

router.get(remote.product.list,(req,res)=>{
    axiosRequestServerStockInventory().get(remote.product.list).then(resp=>{
        res.status(201).send({product :resp.data.product});
    });
})

router.get(remote.productPackage.list,(req,res)=>{
    axiosRequestServerStockInventory().get(remote.productPackage.list).then(resp=>{
        res.status(201).send({productPackage :resp.data.packaging});
    });
})

router.get(remote.productType.list,(req,res)=>{
    axiosRequestServerStockInventory().get(remote.productType.list).then(resp=>{
        res.status(201).send({productType :resp.data.product_types});
    });
})

router.get(remote.stock.list,(req,res)=>{
    axiosRequestServerStockInventory().get(remote.stock.list).then(resp=>{
        res.status(201).send({stock :resp.data.stock});
    });
})

router.get(remote.stockLogIn.list,(req,res)=>{
    axiosRequestServerStockInventory().get(remote.stockLogIn.list).then(resp=>{
        res.status(201).send({stockLogIn :resp.data.stockLogIn});
    });
})

router.get(remote.stockLogOut.list,(req,res)=>{
    axiosRequestServerStockInventory().get(remote.stockLogOut.list).then(resp=>{
        res.status(201).send({stockLogOut :resp.data.stockLogOut});
    });
})

router.get(remote.stockRapport.list,(req,res)=>{
    axiosRequestServerStockInventory().get(remote.stockRapport.list).then(resp=>{
        res.status(201).send({stockRapport :resp.data.stockRapport});
    });
})

router.get(remote.stockRapportType.list,(req,res)=>{
    axiosRequestServerStockInventory().get(remote.stockRapportType.list).then(resp=>{
        res.status(201).send({stockRapportType :resp.data.stockRapportType});
    });
})

router.get(remote.stockType.list,(req,res)=>{
    axiosRequestServerStockInventory().get(remote.stockType.list).then(resp=>{
        res.status(201).send({stockType :resp.data.stockType});
    });
})

router.post(remote.product.create,(req,res)=>{
    axiosRequestServerStockInventory().post(remote.product.create,req.body).then(resp=>{
        res.status(201).send({message :resp.data.message});
    }).catch(error=>{
        console.log(error)
        res.status(404).send({message :error})
    });
})
