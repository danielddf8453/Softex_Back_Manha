import { iGalinha } from "./iGalinha";

export class GalinhaCocorico implements iGalinha {
    cacarejar(): void {
        console.log("COCOROCÓ!");
    }

    ciscar(): void {
        console.log("A galinha está ciscando o galinheiro!");
    }

    postura(): void {
        console.log("A galinha está chocando o ovo!");
        
    }
}