const tbodyTransaction = document.querySelector('#tbodyTransaction');

const storageName = localStorage.getItem('transactions');

const convert = JSON.parse(storageName);

transactions.forEach(convert)

console.log(transactions)

/*
const balance = transactionAmounts.reduce((accumulator, transaction) => accumulator + transaction, 0).toLocaleString('pt-br', { minimumFractionDigits: 2 })
setTimeout(() => {
    balanceDisplay.innerHTML = `R$ ${balance}`
}, 1000);




const statusInit = () => {
    tbodyTransaction.innerHTML = ''
    transactions.forEach(addTransactionInFront)
    updateBalance()
}



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

*/