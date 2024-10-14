class Product{
    static list   = "/product/all"
    static detail = "/product/detail/:id"
    static create = "/product/store"
    static delete = "/product/delete"
    static update = "/product/update"
}
class Stock{
    static list   = "/stock/all"
    static detail = "/stock/detail/:id"
    static create = "/stock/store"
    static delete = "/stock/delete"
    static update = "/stock/update"
}
class StockLogIn{
    static list   = "/stock/log/in/all"
    static detail = "/stock/log/in/detail/:id"
    static create = "/stock/log/in/store"
    static delete = "/stock/log/in/delete"
    static update = "/stock/log/in/update"
}
class StockLogOut{
    static list   = "/stock/log/out/all"
    static detail = "/stock/log/out/detail/:id"
    static create = "/stock/log/out/store"
    static delete = "/stock/log/out/delete"
    static update = "/stock/log/out/update"
}
class StockType{
    static list   = "/stock/type/all"
    static detail = "/stock/type/detail/:id"
    static create = "/stock/type/store"
    static delete = "/stock/type/delete"
    static update = "/stock/type/update"
}
class ProductType{
    static list   = "/product/type/all"
    static detail = "/product/type/detail/:id"
    static create = "/product/type/store"
    static delete = "/product/type/delete"
    static update = "/product/type/update"
}
class ProductDefective{
    static list   = "/product/defective/all"
    static detail = "/product/defective/detail/:id"
    static create = "/product/defective/store"
    static delete = "/product/defective/delete"
    static update = "/product/defective/update"
}
class ProductPackage{
    static list   = "/product/package/all"
    static detail = "/product/package/detail/:id"
    static create = "/product/package/store"
    static delete = "/product/package/delete"
    static update = "/product/package/update"
}
class Devise{
    static list   = "/devise/all"
    static detail = "/devise/detail/:id"
    static create = "/devise/store"
    static delete = "/devise/delete"
    static update = "/devise/update"
}

class Inventaire{
    static list   = "/inventory/all"
    static detail = "/inventory/detail/:id"
    static create = "/inventory/store"
    static delete = "/inventory/delete"
    static update = "/inventory/update"
}

class StockRapport{
    static list   = "/stock/rapport/all"
    static detail = "/stock/rapport/detail/:id"
    static create = "/stock/rapport/store"
    static delete = "/stock/rapport/delete"
    static update = "/stock/rapport/update"
}

class StockRapportType{
    static list   = "/stock/rapport/type/all"
    static detail = "/stock/rapport/type:id"
    static create = "/stock/rapport/type/store"
    static delete = "/stock/rapport/type/delete"
    static update = "/stock/rapport/type/update"
}

export class StockInventory{
    static product              = Product
    static stock                = Stock 
    static stockLogIn           = StockLogIn
    static stockLogOut          = StockLogOut
    static stockType            = StockType
    static stockRapportType     = StockRapportType
    static stockRapport         = StockRapport
    static productType          = ProductType
    static productPackage       = ProductPackage
    static productDefective     = ProductDefective
    static devise               = Devise
    static inventaire           = Inventaire
}