const tbodyTransaction = document.querySelector('#tbodyTransaction');
const balanceDisplay = document.querySelector('#balanceDisplay');
const formMovement = document.querySelector('#formMovement');
const inputAmount = document.querySelector('#inputAmount');
const inputName = document.querySelector('#inputName');
const inputPIX = document.querySelector('#inputPIX');
const cep = document.querySelector('#cep');
const telefone = document.querySelector('#telefone');
const email = document.querySelector('#email');

const localStorageTransactions = JSON.parse(localStorage
    .getItem('transactions'))
let transactions = localStorage
    .getItem('transactions') !== null ? localStorageTransactions : []

const addTransactionInFront = transaction =>{
    const operator = transaction.amount < 0 ? '-' : '+';
    const operatorName = transaction.amount < 0 ? 'Débito' : 'Crédito';
    const removeOperator = Math.abs(transaction.amount).toLocaleString('pt-br', {minimumFractionDigits: 2});
    const newTd = document.createElement('tr');
    const badgeClass = transaction.amount < 0 ? 'badge-outline-danger' : 'badge-outline-success';
    
    newTd.innerHTML = `
          <tr>
              <td> ${transaction.name} </td>
              <td > R$ ${removeOperator} </td>
              <td>
                  <div class="badge ${badgeClass}"> ${operatorName} </div>
              </td>
          </tr>
    `
    tbodyTransaction.prepend(newTd)
}

const updateBalance = () => {
    const transactionAmounts = transactions.map(transaction => transaction.amount)
    const balance = transactionAmounts.reduce((accumulator, transaction) => accumulator + transaction, 0).toLocaleString('pt-br', {minimumFractionDigits: 2})
    setTimeout(() => {
        balanceDisplay.innerHTML = `R$ ${balance}`
    }, 1000);
}


const statusInit = () => {
    tbodyTransaction.innerHTML = ''
    transactions.forEach(addTransactionInFront)
    updateBalance()
}

statusInit();

const updataLocalStorage = () => {
    localStorage.setItem('transactions', JSON.stringify(transactions))
}

const generateID = () => Math.round(Math.random() * 1000)

formMovement.addEventListener('submit', event => {
    event.preventDefault()

    const transactionName = inputName.value.trim()
    const transactionAmount = inputAmount.value.trim()

    if (transactionName === '' || transactionAmount === '' ){
        alert('Por favor é obrigatótio preencher o NOME e VALOR da transação')
        return
    }

    const transaction = { 
        id: generateID(), 
        name: transactionName, 
        amount: Number(transactionAmount) 
    }

    transactions.push(transaction)
    statusInit()
    updataLocalStorage()

    inputName.value = ''
    inputAmount.value = ''
    inputPIX.value = ''
    cep.value = ''
    telefone.value = ''
    email.value = ''


})