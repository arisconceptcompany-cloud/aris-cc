// @ts-ignore
import Offre from "./Offre.ts";
// @ts-ignore
import ListElement from "./ListElement.ts";
// @ts-ignore
import {BaseURL} from "./ApiUrl.ts";

export default class ElementOffre {
    offre : Offre;
    mission: ListElement[]
    competence: ListElement[]
    qualite: ListElement[];


    constructor(offre: Offre, mission: ListElement[], competence: ListElement[], qualite: ListElement[]) {
        this.offre = offre;
        this.mission = mission;
        this.competence = competence;
        this.qualite = qualite;
    }

    static async getAllOffre() {
        const response = await fetch(BaseURL() + "offre/getOffre", {
            method: 'GET',
            headers: {
                "Content-Type": 'application/json'
            },
        })
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return (await response.json() as ElementOffre[])
    }
}