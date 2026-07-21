//Практичне завдання #1: Обробка транзакцій
const transactions = [
    { id: 1, amount: 150, date: '2023-05-10', type: 'income' },
    { id: 2, amount: 50, date: '2023-05-12', type: 'expense' },
    { id: 3, amount: 200, date: '2023-05-15', type: 'income' },
    { id: 4, amount: 30, date: '2023-05-20', type: 'expense' },
    { id: 5, amount: 400, date: '2023-05-15', type: 'income' },
];

// transactions.forEach(transaction => (
//     transaction.type === 'income' ? console.log(`Дохід ${transaction.amount} за ${transaction.date}`) : transaction++))

const result = transactions
.filter(function (transaction) {
    if (transaction.type === 'income') return true
})
.map(function (transaction) {
 return `Дохід ${transaction.amount} грн за ${transaction.date}`
})
.join(' | ');

console.log(result);