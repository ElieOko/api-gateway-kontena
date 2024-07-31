import axios from "axios";
import { 
    service_achat,
    service_finance, 
    service_manufacturation, 
    service_rh, 
    service_stock_inventory, 
    service_vente} from "../../service/config";

export function axiosRequestServerRh(token?:string){
    axios.defaults.withCredentials = true;
    axios.defaults.withXSRFToken = true;
    return  axios.create({
        baseURL             :`${service_rh.url}${service_rh.route_api}`,
        headers : {
        accept              :   'application/json',
        "Content-type"      :   "application/json",
        "X-Requested-With"  :   "XMLHttpRequest",
        "Authorization"     :   `Bearer ${token}`       
            }
          }).defaults  
}

export function axiosRequestServerFinance(token?:string){
    axios.defaults.withCredentials = true;
    axios.defaults.withXSRFToken = true;
    return  axios.create({
        baseURL             :`${service_finance.url}${service_finance.route_api}`,
        headers :   {
        accept              :   'application/json',
        "Content-type"      :   "application/json",
        "X-Requested-With"  :   "XMLHttpRequest",
        "Authorization"     :   `Bearer ${token}`       
            }
        }).defaults  
}

export function axiosRequestServerManufacturation(token?:string){
    axios.defaults.withCredentials = true;
    axios.defaults.withXSRFToken = true;
    return  axios.create({
        baseURL             :`${service_manufacturation.url}${service_manufacturation.route_api}`,
        headers :   {
        accept              :   'application/json',
        "Content-type"      :   "application/json",
        "X-Requested-With"  :   "XMLHttpRequest",
        "Authorization"     :   `Bearer ${token}`       
            }
        }).defaults  
}

export function axiosRequestServerAchat(token?:string){
    axios.defaults.withCredentials = true;
    axios.defaults.withXSRFToken = true;
    return  axios.create({
        baseURL             :`${service_achat.url}${service_achat.route_api}`,
        headers :   {
        accept              :   'application/json',
        "Content-type"      :   "application/json",
        "X-Requested-With"  :   "XMLHttpRequest",
        "Authorization"     :   `Bearer ${token}`       
            }
        }).defaults  
}

export function axiosRequestServerVente(token?:string){
    axios.defaults.withCredentials = true;
    axios.defaults.withXSRFToken = true;
    return  axios.create({
        baseURL             :`${service_vente.url}${service_vente.route_api}`,
        headers :   {
        accept              :   'application/json',
        "Content-type"      :   "application/json",
        "X-Requested-With"  :   "XMLHttpRequest",
        "Authorization"     :   `Bearer ${token}`       
            }
        }).defaults  
}

export function axiosRequestServerStockInventory(token?:string){
    axios.defaults.withCredentials = true;
    axios.defaults.withXSRFToken = true;
    return  axios.create({
        baseURL             :`${service_stock_inventory.url}${service_stock_inventory.route_api}`,
        headers :   {
        accept              :   'application/json',
        "Content-type"      :   "application/json",
        "X-Requested-With"  :   "XMLHttpRequest",
        "Authorization"     :   `Bearer ${token}`       
            }
        }).defaults  
}