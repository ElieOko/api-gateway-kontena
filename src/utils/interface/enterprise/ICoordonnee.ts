export interface ICoordonnee{
    site  : ISite
    phone : INumberPhone
    email : IEmailAddress
}

export interface ISite{
    url : string
}

export interface INumberPhone{
    phone_number : string
}

export interface IEmailAddress{
    email_address : string
}