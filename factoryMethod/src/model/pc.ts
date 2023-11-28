import { Computador } from "./computador";

export class PC extends Computador {
    private monitor : string;

    constructor(ram: number, ssd: number, cpu: number, tipo: string, preco: number, monitor: string) {
        super(ram, ssd, cpu, tipo, preco);
        this.monitor = monitor;
    }

    getMonitor(): string {
        return this.monitor;
    }

    setMonitor(monitor: string) {
        this.monitor = monitor;
    }

    toString(): string {
        return `Computador Tipo: ${this.tipo} | Mem. RAM: ${super.getRam()}GB | CPU: ${super.getCPU()}GHz | SSD: ${super.getSSD()}GB | Preço: R$ ${super.getPreco()} | Monitor: ${this.monitor}`;
    }
}