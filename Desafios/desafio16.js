/*Utilizando a estrutura do Switch faça um programa que simule uma calculadora básicaO programa recebe
como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores*/


function calculadora(valor1, operador, valor2) {
    switch (operador) {
        case '+':
            return valor1 + valor2
        case '-':
            return valor1 - valor2
        case '*':
            return valor1 * valor2
        case '/': 
            return valor1 / valor2
        default:
            return "Erro"
    }
}

console.log(calculadora(2, '+', 2))
console.log(calculadora(2, '-', 2))
console.log(calculadora(2, '*', 2))
console.log(calculadora(3, '/', 2))