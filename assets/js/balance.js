const balanceDisplay = document.querySelector('#balanceDisplay');
const credcardDisplay = document.querySelector('#credcardDisplay');
const loadDisplay = document.querySelector('#loadDisplay');

const storageAmount = localStorage.getItem('transactions');

const converter = JSON.parse(storageAmount);

const transactionAmounts = converter.map(transaction => transaction.amount)

const balance = transactionAmounts.reduce((accumulator, transaction) => accumulator + transaction, 0).toLocaleString('pt-br', { minimumFractionDigits: 2 })
setTimeout(() => {
    balanceDisplay.innerHTML = `R$ ${balance}`
}, 500);

setTimeout(() => {
    credcardDisplay.innerHTML = `R$ 1.000,23`
}, 1000);

const transactionLoad = converter.filter(transaction => transaction.name == 'Empréstimo plataforma')
const loadAmount = transactionLoad.map(transaction => transaction.amount)
const load = loadAmount.reduce((accumulator, transaction) => accumulator + transaction, 0).toLocaleString('pt-br', { minimumFractionDigits: 2 })
setTimeout(() => {
    loadDisplay.innerHTML = `R$ ${load}`
}, 1500);

//TESTE TDD Aplicação de DESCONTO
function aplicarDescontoTest(){
    return aplicarDesconto(10,2) === 8;
 }
 
 console.log('A aplicação de desconto está funcionando? ');
 console.log(aplicarDescontoTest());

 aplicarDescontoTest();

 
function aplicarDesconto(valor, desconto){
   return valor - desconto;
}