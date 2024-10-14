import { IServiceXP } from "../../utils/interface/service/IService";

export const service_rh : IServiceXP ={
    name : "Ressource Humain",
    code : "RH",
    url : "http://127.0.0.1:8000",
    route_api : "/api/",
    ip_address :"127.0.0.1",
    port : 8000,
    hosted_by : "IIS",
    location : "DRC",
    is_active : true,
    language : "Python",
    framework : "Django",
    description: "Système d’information qui permet à toute entreprise  de gérer et le suivre en temps réel ses informations comme l’ensemble de ses services.  Cette solution RH s’intègre au Système d’Informations des Ressources Humaines (SIRH) qui rallie la Gestion des Ressources Humaines (GRH) avec les Technologies de l’Information et de la Communication (TIC)"
}
export const service_stock_inventory : IServiceXP =  {
    name : "Stock et Inventaire",
    code : "SI",
    url : "http://127.0.0.1:7000",
    route_api : "/api",
    ip_address :"127.0.0.1",
    port : 7000,
    hosted_by : "IIS",
    location : "DRC",
    is_active : true,
    language : "JS",
    framework : "Express",
    description : "Système d’inventaire optimisé tant pour un réseau de magasins que pour des entrepôts est indispensable."
}
export const service_finance : IServiceXP = {
    name : "Finance",
    code : "F",
    url : "http://127.0.0.1:8500",
    route_api : "/api",
    ip_address :"127.0.0.1",
    port : 8500,
    hosted_by : "IIS",
    location : "DRC",
    is_active : true,
    language : "nodejs",
    framework : "Express"
}
export const service_achat = {
    name : "Chaine d'approvisionnement d'achat",
    code : "CaA",
    url : "http://127.0.0.1:8000",
    route_api : "/api", 
    ip_address :"127.0.0.1",
    port : 8000,
    hosted_by : "IIS",
    location : "DRC",
    is_active : true,
    language : "php",
    framework : "Laravel 11"
}
export const service_vente = {
    name : "Vente",
    code : "V",
    url : "http://127.0.0.1:8000",
    route_api : "/api",
    ip_address :"127.0.0.1",
    port : 2000,
    hosted_by : "IIS",
    location : "DRC",
    is_active : true,
    language : "php",
    framework : "Laravel 11"
}
export const service_manufacturation = {
    name : "Chaine de productions",
    code : "CpM",
    url : "http://127.0.0.1:8000",
    route_api : "/api/",
    ip_address :"127.0.0.1",
    port : 2000,
    hosted_by : "IIS",
    location : "DRC",
    is_active : true,
    language : "php",
    framework : "Laravel 11"
}
export const service_all : Array<IServiceXP> = [
    service_rh,
    service_stock_inventory,
    service_achat,
    service_finance,
    service_vente,
    service_manufacturation  
]