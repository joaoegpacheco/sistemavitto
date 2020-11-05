let notas = [200, 100, 50, 20, 10, 5, 2];

const saldoInicial = (valor, index) => {

    let i = index;

    while (i < notas.length && notas[i] > valor) {
        i++;
    }
    return i;
}

const sacarRecur = (valor, index = 0) => {

    let saldoMax = saldoInicial(valor, index);

    if (saldoMax >= notas.length) {
        return [];
    }

    for (let i = saldoMax; i < notas.length; i++) {

        let resto = valor - notas[i];

        if (resto == 0) {
            return [notas[i]];
        }

        for (let j = i; j < notas.length; j++) {

            let sacarResto = sacarRecur(resto, j);

            if (sacarResto.length > 0) {
                sacarResto.unshift(notas[i]);
                return sacarResto;
            }
        }
    }
    return [];
}

const sacar = (valor) => {
    return sacarRecur(valor);
}

let valorSacado = prompt('Quanto quer sacar?');

const createH1Principal = () => {
    let h1Principal = document.createElement('h1');
    h1Principal.textContent = "Exercício - Sistema Vitto";
    document.body.appendChild(h1Principal);
}
createH1Principal();

if (isNaN(valorSacado) || valorSacado < 1) {
    let valorDiferenteDeNumero = document.createElement('div');
    valorDiferenteDeNumero.innerHTML = "Valor inválido! Favor digite um número inteiro entre 1 e 1000.";
    document.body.appendChild(valorDiferenteDeNumero);
}

if (valorSacado > 1000) {
    let valorMaiorQueMil = document.createElement('div');
    valorMaiorQueMil.innerHTML = "Não é possível sacar esse valor, pois o caixa permite saque até R$1.000,00";
    document.body.appendChild(valorMaiorQueMil);
}

if (valorSacado == 1 || valorSacado == 3) {
    let valorDeUmOuTres = document.createElement('div');
    valorDeUmOuTres.innerHTML = "Não é possível devolver este valor, pois não existe nota de R$1,00";
    document.body.appendChild(valorDeUmOuTres);
}

const createValorFinal = () => {
    let valorFinal = document.createElement('div');
    let stringValorFinal = document.createElement('p');
    if (valorSacado > 0 && valorSacado <= 1000) {
        stringValorFinal.innerHTML = "As notas recebidas foram: ";
        valorFinal.innerHTML = "  " + sacar(valorSacado).toString();
        document.body.appendChild(stringValorFinal);
        document.body.appendChild(valorFinal);
    }
}
createValorFinal();