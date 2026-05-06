// @ts-ignore
import {BaseURL} from "./ApiUrl.ts";

export default class CDSpontaneM {
    id : number
    titre: string
    nom: string
    prenom: string
    email: string
    telephone: string
    cv: string
    lm: string
    fileCV: File


    constructor(id: number, titre: string, nom: string, prenom: string, email: string, telephone: string, cv: string, lm: string, fileCV: File) {
        this.id = id;
        this.titre = titre;
        this.nom = nom;
        this.prenom = prenom;
        this.email = email;
        this.telephone = telephone;
        this.cv = cv;
        this.lm = lm;
        this.fileCV = fileCV;
    }

    static async sendCandidat(candidat) {
        const formData = new FormData();
        formData.append('id', candidat.id.toString());
        formData.append('nom', candidat.nom);
        formData.append('titre', candidat.titre);
        formData.append('prenom', candidat.prenom);
        formData.append('email', candidat.email);
        formData.append('telephone', candidat.telephone);
        formData.append('lm', candidat.lm);
        formData.append('cv', "");
        formData.append('fileCV', candidat.fileCV);

        const response = await fetch(BaseURL() + "offre/cdSpontane", {
            method: 'post',
            body: formData
        });
        return response.ok  ;
    }
}