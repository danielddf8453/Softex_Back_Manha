const prompt = require('prompt-sync')()

function divisao(dividendo, divisor) {
    try {
        if (divisor === 0) {
            throw new Error('Não é possível dividir por zero');
        }
        const resultado = dividendo / divisor;
        console.log('Resultado:', resultado);
    } catch (e) {
        console.error('Erro:', e.message);
    } finally {
        console.log('Operação concluída');
    }
}

let dividendo = parseFloat(prompt("Digite o dividendo: "));
let divisor = parseFloat(prompt("Digite o divisor: "));

divisao(dividendo, divisor);
