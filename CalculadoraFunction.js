// Função tradicional sem parâmetros
function Menu() {
    console.log("Calculadora Simples");
    console.log("Escolha uma operação:");
    console.log("1. Soma");
    console.log("2. Subtração");
   
}

Menu();

// Função tradicional com parâmetros e retorno de valor
function somar(a, b) {
    return a + b;
}

const resultadoSoma = somar(5, 3);
console.log("Resultado da soma:", resultadoSoma);

// Arrow function com parâmetros e retorno de valor
const subtrair = (a, b) => a - b;

const resultadoSubtracao = subtrair(10, 4);
console.log("Resultado da subtração:", resultadoSubtracao);

