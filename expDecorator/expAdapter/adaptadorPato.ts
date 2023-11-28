import { iGalinha } from "./iGalinha";
import { Marreco } from "./Marreco";

export class AdaptadorPato implements iGalinha{
    private readonly pato: Marreco;

    constructor(pato: Marreco) {
        this.pato = pato;
    }
    
    cacarejar(): void {
        console.log("COCOROCÓ");
        
    }

    ciscar(): void {
        console.log("O pato está ciscando ao lado da lagoa!");
    }

    postura(): void {
        console.log("O pato está chocando o ovo.")
    }

}