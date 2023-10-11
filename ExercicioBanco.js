const prompt = require('prompt-sync')()

const Banco = {
    conta: '12345-6',
    saldo: 1000,
    tipoDeConta: 'Corrente',
    agencia: '001',
  
    function buscarSaldo() {
        return this.saldo;
    }
 
    function deposito(valor) {
        this.saldo += valor;
    };
   
    function saque(valor) {
      if (valor > this.saldo) {
        console.log('Saldo insuficiente');
      } else {
        this.saldo -= valor;
      }
    };
  
    function numeroDaConta() {
        return this.conta;
    }
};
  
  console.log('Saldo Atual:', Banco.buscarSaldo());
  
  let valorDeposito = parseFloat(prompt("Quanto você quer depositar?"));
  Banco.deposito(valorDeposito);
  console.log('Saldo após Depósito:', Banco.buscarSaldo());
  
  let valorSaque = parseFloat(prompt("Quanto você quer sacar?"));
  Banco.saque(valorSaque);
  console.log('Saldo após Saque:', Banco.buscarSaldo());
  
  console.log('Número da Conta:', Banco.numeroDaConta());
  