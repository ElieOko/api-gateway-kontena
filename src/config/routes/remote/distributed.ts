import { Achat } from "./achat"
import { Finance } from "./finance"
import { RessourceHumaine } from "./grh"
import { StockInventory } from "./stock"
import { Vente } from "./vente"

class Manufacturation{}
export default class Distributed{
    static ressourceHumaine = RessourceHumaine 
    static finance          = Finance
    static manufacturation  = Manufacturation
    static stockInventory   = StockInventory
    static achat            = Achat
    static vente            = Vente 
}