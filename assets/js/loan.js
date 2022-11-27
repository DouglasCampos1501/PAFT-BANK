const inputLoan = document.querySelector('#inputLoan');
const formLoan = document.querySelector('#formLoan');


const localStorageTransactions = JSON.parse(localStorage
    .getItem('transactions'))
let transactions = localStorage
    .getItem('transactions') !== null ? localStorageTransactions : []

const updateBalance = () => {
    const transactionAmounts = transactions.map(transaction => transaction.amount)
    const balance = transactionAmounts.reduce((accumulator, transaction) => accumulator + transaction, 0).toLocaleString('pt-br', { minimumFractionDigits: 2 })
    setTimeout(() => {
        balanceDisplay.innerHTML = `R$ ${balance}`
    }, 1000);
}

const generateID = () => Math.round(Math.random() * 10000)

const updataLocalStorage = () => {
    localStorage.setItem('transactions', JSON.stringify(transactions))
}


formLoan.addEventListener('submit', event => {
    event.preventDefault()

    const transactionName = 'Empréstimo plataforma'
    const transactionAmount = inputLoan.value.trim()

    if (transactionAmount === '') {
        alert('Por favor é obrigatótio preencher o VALOR do empréstimo')
        return
    }

    const transaction = {
        id: generateID(),
        name: transactionName,
        amount: Number(transactionAmount)
    }

    transactions.push(transaction)
    updataLocalStorage()

    inputLoan.value = ''
    updataBalance()


})


function updataBalance() {
    const balanceDisplay = document.querySelector('#balanceDisplay')
    const storageAmount = localStorage.getItem('transactions')
    const converter = JSON.parse(storageAmount)
    const transactionAmounts = converter.map(transaction => transaction.amount)
    const balance = transactionAmounts.reduce((accumulator, transaction) => accumulator + transaction, 0).toLocaleString('pt-br', { minimumFractionDigits: 2 })
    balanceDisplay.innerHTML = `R$ ${balance}`
}