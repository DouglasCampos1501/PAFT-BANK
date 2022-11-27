const tbodyTransaction = document.querySelector('#tbodyTransaction');
const balanceDisplay = document.querySelector('#balanceDisplay');
const formMovement = document.querySelector('#formMovement');
const inputAmount = document.querySelector('#inputAmount');
const inputName = document.querySelector('#inputName');

const transactionsDummy = [
    { id: 1, name: 'Transferência Salário', amount: 4780 },
    { id: 2, name: 'Lanchonete 7 Pães', amount: -58 },
    { id: 3, name: 'Churrascaria Paraiso', amount: -205 },
    { id: 4, name: 'Papelaria da Esquina', amount: -64 },
    { id: 5, name: 'Depóstio em conta', amount: 500 },
    { id: 6, name: 'Posto de gasolina 2L', amount: -187 }
];

const addTransactionInFront = transaction =>{
    const operator = transaction.amount < 0 ? '-' : '+';
    const operatorName = transaction.amount < 0 ? 'Débito' : 'Crédito';
    const removeOperator = Math.abs(transaction.amount).toLocaleString('pt-br', {minimumFractionDigits: 2});
    const newTd = document.createElement('tr');
    const badgeClass = transaction.amount < 0 ? 'badge-outline-danger' : 'badge-outline-success';
    
    newTd.innerHTML = `
          <tr>
              <td> ${transaction.name} </td>
              <td style="text-align: right;"> R$ ${removeOperator} </td>
              <td>
                  <div class="badge ${badgeClass}"> ${operatorName} </div>
              </td>
          </tr>
    `
    tbodyTransaction.prepend(newTd)
}

const updateBalance = () => {
    const transactionAmounts = transactionsDummy.map(transaction => transaction.amount)
    const balance = transactionAmounts.reduce((accumulator, transaction) => accumulator + transaction, 0).toLocaleString('pt-br', {minimumFractionDigits: 2})
    balanceDisplay.textContent = `R$ ${balance}`
}


const statusInit = () => {
    tbodyTransaction.innerHTML = ''
    transactionsDummy.forEach(addTransactionInFront)
    updateBalance()
}

statusInit();

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
        amount: transactionAmount 
    }

    transactionsDummy.push(transaction)
    statusInit()

    inputName.value = ''
    inputAmount.value = ''


})