import { AdaptadorGalinha } from "./adaptadorGalinha";
import { AdaptadorPato } from "./adaptadorPato";
import { GalinhaCocorico } from "./galinhaCocorico";
import { iGalinha } from "./iGalinha";
import { iPato } from "./iPato";
import { Marreco } from "./Marreco";

class AdaptadorPatoDemo {
    static main() {
        const PatoFu: iPato = new Marreco();
        const PatinhoFu: iGalinha = new AdaptadorPato(Marreco);

        const GalinhaPintada: iGalinha = new GalinhaCocorico();
        const GalinhaPintadinha: iPato = new AdaptadorGalinha(GalinhaCocorico);

        console.log("Pato marreco agindo como uma galinha:");
        PatinhoFu.cacarejar();
        PatinhoFu.ciscar();
        PatinhoFu.postura();

        console.log("Galinha Cocoricó agindo como um pato:");
        GalinhaPintadinha.gasnar();
        GalinhaPintadinha.nadar();
        
    }
}

AdaptadorPatoDemo.main();