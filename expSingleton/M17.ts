class SistemaSeguranca {
    private static instance: SistemaSeguranca | null = null;
    private senhaSistema: string = "Agente_M17"

    private constructor() { }

    public static getInstance(): SistemaSeguranca {
        if (!SistemaSeguranca.instance) {
            SistemaSeguranca.instance = new SistemaSeguranca();
        }
        return SistemaSeguranca.instance;
    }

    public acessarBaseSecreta(senha: string): void {
        if (senha === this.senhaSistema) {
            console.log("Acesso concedido, seja bem vindo(a) a M17.");
        } else {
            console.log("Acesso negado.");
            console.log("!!!TENTATIVA DE INVASÃO!!!");
        }
    }
}

// Programa principal
const sistemaSeguranca = SistemaSeguranca.getInstance();

// Acesso com senha correta
sistemaSeguranca.acessarBaseSecreta("Agente_M17");

// Acesso com senha incorreta
sistemaSeguranca.acessarBaseSecreta("Agente_MI6");