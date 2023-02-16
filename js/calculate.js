const balanceInfo = {
    remainingBalance: 0,
}

document.getElementById('calculate-balance').addEventListener('click', function () {
    // total income
    const totalIncome = inputValue('income-field');

    // total expenses
    const foodExpenses = inputValue('food-field');
    const rentExpenses = inputValue('rent-field');
    const clothExpenses = inputValue('cloth-field');
    const totalExpenses = foodExpenses + rentExpenses + clothExpenses;

    const remainingBalance = totalIncome - totalExpenses;
    if (remainingBalance < 0) {
        alert('Income er tolunai expenses bashi');
    }

    // set remainingBalance in object
    balanceInfo.remainingBalance = remainingBalance;

    // set total expenses and balance
    setElementValue('expenses-total', totalExpenses);
    setElementValue('balance-total', remainingBalance);
});