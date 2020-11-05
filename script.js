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

let amountWithdrawn = prompt('Quanto quer retirar?');

const createH1Head = () => {
    let h1Head = document.createElement('h1');
    h1Head.textContent = "Caixa Eletrônico - Sistema Vitto";
    document.body.appendChild(h1Head);
}
createH1Head();

if (isNaN(amountWithdrawn) || amountWithdrawn < 1) {
    let differentNumberValue = document.createElement('div');
    differentNumberValue.innerHTML = "Valor inválido! Favor digite um número inteiro entre 1 e 1000";
    document.body.appendChild(differentNumberValue);
}

if (amountWithdrawn > 1000) {
    let valueGreaterThanAThousand = document.createElement('div');
    valueGreaterThanAThousand.innerHTML = "Não é possível sacar esse valor, pois o caixa permite saque até R$1.000,00";
    document.body.appendChild(valueGreaterThanAThousand);
}

if (amountWithdrawn == 1 || amountWithdrawn == 3) {
    let valueOneOrThree = document.createElement('div');
    valueOneOrThree.innerHTML = "Não é possível devolver este valor, pois não existe nota de R$1,00";
    document.body.appendChild(valueOneOrThree);
}

const createFinalValue = () => {
    let stringfinalValue = document.createElement('p');
    let finalValue = document.createElement('div');
    if (amountWithdrawn > 0 && amountWithdrawn <= 1000 && amountWithdrawn != 1 && amountWithdrawn != 3) {
        stringfinalValue.innerHTML = "As notas recebidas foram: ";
        finalValue.innerHTML = "  " + withdrawMoneyFinal(amountWithdrawn).toString();
        document.body.appendChild(stringfinalValue);
        document.body.appendChild(finalValue);
    }
}
createFinalValue();