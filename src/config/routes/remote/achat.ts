class Supplier{
    static list   = "/supplier/all"
    static detail = "/supplier/details"
    static create = "/supplier/store"
    static delete = "/supplier/delete"
    static update = "/supplier/update"
}

class PolitiqueAchat{}

export class Achat{
    static supplier = Supplier
}