let paperMoney = [200, 100, 50, 20, 10, 5, 2];

const openingBalance = (value, index) => {

    let i = index;

    while (i < paperMoney.length && paperMoney[i] > value) {
        i++;
    }
    return i;
}

const withdrawMoney = (value, index = 0) => {

    let maximumBalance = openingBalance(value, index);

    if (maximumBalance >= paperMoney.length) {
        return [];
    }

    for (let i = maximumBalance; i < paperMoney.length; i++) {

        let leftoverBalance = value - paperMoney[i];

        if (leftoverBalance == 0) {
            return [paperMoney[i]];
        }

        for (let j = i; j < paperMoney.length; j++) {

            let withdrawLeftoverBalance = withdrawMoney(leftoverBalance, j);

            if (withdrawLeftoverBalance.length > 0) {
                withdrawLeftoverBalance.unshift(paperMoney[i]);
                return withdrawLeftoverBalance;
            }
        }
    }
    return [];
}

const withdrawMoneyFinal = (value) => {
    return withdrawMoney(value);
}

let amountWithdrawn = prompt('How much you want to withdraw money?');

const createH1Head = () => {
    let h1Head = document.createElement('h1');
    h1Head.textContent = "ATM - Sistema Vitto";
    document.body.appendChild(h1Head);
}
createH1Head();

if (isNaN(amountWithdrawn) || amountWithdrawn < 1) {
    let differentNumberValue = document.createElement('div');
    differentNumberValue.innerHTML = "Invalid value! Please enter an integer number between 1 and 1000.";
    document.body.appendChild(differentNumberValue);
}

if (amountWithdrawn > 1000) {
    let valueGreaterThanAThousand = document.createElement('div');
    valueGreaterThanAThousand.innerHTML = "It's not possible to withdraw this amount, as the cashier allows you to withdraw up to R$ 1,000.00";
    document.body.appendChild(valueGreaterThanAThousand);
}

if (amountWithdrawn == 1 || amountWithdrawn == 3) {
    let valueOneOrThree = document.createElement('div');
    valueOneOrThree.innerHTML = "It's not possible to withdraw this amount, as there is no R$ 1.00 paper money.";
    document.body.appendChild(valueOneOrThree);
}

const createFinalValue = () => {
    let stringfinalValue = document.createElement('p');
    let finalValue = document.createElement('div');
    if (amountWithdrawn > 0 && amountWithdrawn <= 1000 && amountWithdrawn != 1 && amountWithdrawn != 3) {
        stringfinalValue.innerHTML = "The paper money received was: ";
        finalValue.innerHTML = "  " + withdrawMoneyFinal(amountWithdrawn).toString();
        document.body.appendChild(stringfinalValue);
        document.body.appendChild(finalValue);
    }
}
createFinalValue();