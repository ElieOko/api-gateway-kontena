export interface IToken{
    id : number
    name : String
    type? : String
    date_expire? : String
    service? : String
}
export interface ITokenRefresh{
    name : String
}