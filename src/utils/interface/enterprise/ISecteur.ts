export interface ISecteur{
    id            : number
    name          : string
    description?  : string
    // type_secteur  : ISecteurType
}
export interface ISecteurType{
    name        : string 
    description : string
}
//le secteur primaire (agriculture, pêche), le secteur secondaire (industrie, artisanat) et le secteur tertiaire (services)