/* Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1. */



function sacarDinheiro(valorSaque) {
    let contar100 = 0
    let contar50 = 0
    let contar10 = 0
    let contar5 = 0
    let contar1 = 0
    let valorNota = calcularValorNota(valorSaque)
    while(valorSaque >= valorNota) {
        switch(valorNota) {
            case 100:
                valorSaque -= 100
                contar100++
                break
            case 50:
                valorSaque -= 50
                contar50++
                break
            case 10:
                valorSaque -= 10
                contar10++
                break
            case 5:
                valorSaque -= 5
                contar5++
                break
            case 1:
                valorSaque -= 1
                contar1++
                break
        }

    valorNota = calcularValorNota(valorSaque)
    }
        return elaborarResultado(contar100, contar50, contar10, contar5, contar1)
}

// Dando valor a função 'calcularValorNota'

function calcularValorNota(valorSaque) {
    if (valorSaque >= 100) {
        return 100
    } else if (valorSaque >= 50) {
        return 50
    } else if (valorSaque >= 10) {
        return 10
    } else if (valorSaque >= 5) {
        return 5
    } else if (valorSaque >= 1) {
        return 1
    }
}

// Dando valor à função 'elaborarResultado'

function elaborarResultado(contar100, contar50, contar10, contar5, contar1) {
    let resultado = ''

    if (contar100 > 0) {
        resultado += `${contar100}nota(s) de R$100. `
    }
    if (contar50 > 0) {
        resultado += `${contar50}nota(s) de R$50. `
    }
    if (contar10 > 0) {
        resultado += `${contar10}notas(s) de R$10. `
    }
    if (contar5 > 0) {
        resultado += `${contar5}nota(s) de R$5. `
    }
    if (contar1 > 0) {
        resultado += `${contar1}nota(s) de R$1. `
    }
    
    return resultado
}

console.log(sacarDinheiro(153))
console.log(sacarDinheiro(1000))
console.log(sacarDinheiro(880))
console.log(sacarDinheiro(15000))
console.log(sacarDinheiro(20250))