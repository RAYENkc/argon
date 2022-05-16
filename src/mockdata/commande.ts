import { Produit } from "./produit"

export class Commande {
    _id : Number | undefined
    total : Number | undefined
    date_ajout : Date | undefined
    id_client: String | undefined
    status: String | undefined
    products : Produit[] | undefined
    

}
