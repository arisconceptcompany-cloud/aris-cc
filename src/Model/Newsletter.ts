// @ts-ignore
import {BaseURL} from "./ApiUrl.ts";

export default class Newsletter {
    nom: string
    mail: string

    constructor(nom: string, mail: string) {
        this.nom = nom;
        this.mail = mail;
    }

     static async sendDataToAdmin(nom: string, mail: string) {
        var data=new Newsletter(nom,mail)
        const response = await fetch(BaseURL() + "sendMail/", {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body:JSON.stringify(data)
        })
         return response.ok
    }

    static async sendContactToAdmin(nom: string, mail: string,commentaire: string, besoin: string) {
        var data={nom: nom, mail: mail, besoin: besoin, commentaire: commentaire}
        const response = await fetch(BaseURL() + "sendMail/info", {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body:JSON.stringify(data)
        })
        return response.ok
    }

}