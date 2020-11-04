let A = 200;
let B = 100;
let C = 50;
let D = 20;
let E = 10;
let F = 5;
let G = 2;

let notas = [A, B, C, D, E, F, G];

let saldoInicial = function (valor, index) {

    let i = index;

    while (i < notas.length && notas[i] > valor) {
        i++;
    }
    return i;
}

let sacarRec = function (valor, index) {

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

            let sacarResto = sacarRec(resto, j);

            if (sacarResto.length > 0) {
                sacarResto.unshift(notas[i]);
                return sacarResto;
            }
        }
    }
    return [];
}

let sacar = function (valor) {
    return sacarRec(valor, 0);
}

let valorSacado = prompt('Quanto quer sacar?');

if (valorSacado > 1000) {
    console.log("Não é possível sacar esse valor, pois o caixa permite saque até R$1.000,00");
}

if (valorSacado == 1 || valorSacado == 3) {
    console.log("Não é possível devolver este valor, pois não existe nota de R$1,00");
}

if (valorSacado > 0 && valorSacado <= 1000) {
    console.log("  " + sacar(valorSacado).toString());
}