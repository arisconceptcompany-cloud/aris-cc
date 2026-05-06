// @ts-ignore
import {BaseURL} from "./APIURL.ts";

export default class Offre {
    id : number
    status : number ;
    domaine: string
    titre : string
    profil : string ;
    description: string


    constructor(id: number, status: number, domaine: string, titre: string, profil: string,description: string) {
        this.id = id;
        this.status = status;
        this.domaine = domaine;
        this.titre = titre;
        this.profil = profil;
        this.description=description;
    }
}