// @ts-ignore
import {BaseURL} from "./ApiUrl.ts";

export default class Postule {
    id: number;
    nom: string
    prenom: string
    email: string
    lm: string;
    cv: File;

    constructor(id: number, nom: string, prenom: string, email: string, lm: string, cv: File) {
        this.id = id;
        this.nom = nom;
        this.prenom = prenom;
        this.email = email;
        this.lm = lm;
        this.cv = cv;
    }

    static async sendCandidat(candidat, idOffre) {
        const formData = new FormData();
        formData.append('id', candidat.id.toString());
        formData.append('nom', candidat.nom);
        formData.append('prenom', candidat.prenom);
        formData.append('email', candidat.email);
        formData.append('lm', candidat.lm);
        formData.append('cv', candidat.cv);

        const response = await fetch(BaseURL() + "offre/candidat/" + idOffre, {
            method: 'post',
            body: formData
        });
        return response.ok;
    }
}
