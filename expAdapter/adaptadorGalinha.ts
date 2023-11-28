import { GalinhaCocorico } from "./galinhaCocorico";
import { iPato } from "./iPato";

export class AdaptadorGalinha implements iPato{
    private readonly galinha: GalinhaCocorico;

    constructor(galinha : GalinhaCocorico){
        this.galinha = galinha;
    }

    gasnar(): void {
        console.log("QUACK! QUACK!");
        
    }

    nadar(): void {
        console.log("O pato está ciscando.");
        
        
    }
}