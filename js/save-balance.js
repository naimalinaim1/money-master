document.getElementById('save-balance-calculate').addEventListener('click', function () {
    const previousBalance = balanceInfo.remainingBalance;
    if (previousBalance < 0) {
        alert('you have not save balance. your balance is empty');
        return 0;
    }
    // how many percentage to balance save 
    const saveBalancePercentage = inputValue('save-amount-field');
    if (saveBalancePercentage > 100) {
        alert('you not save grater than 100%');
        return 0;
    }
    const saveBalance = previousBalance * (saveBalancePercentage / 100);
    const remainingBalance = previousBalance - saveBalance;

    // set saving amount and remaining balance
    setElementValue('save-amount', saveBalance);
    setElementValue('remain-balance', remainingBalance);
})