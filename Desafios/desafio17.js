/*Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:
Plano Aumento
A 10%
B 15%
C 20%.
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.*/


function Reajuste (plano , aumento) {
    switch (plano) {
        case 'A':
            return aumento * 1.10
        case 'B':
            return aumento * 1.15
        case 'C':
            return aumento * 1.20
        default:
            return 'Não existe esse plano'
    }
}

console.log(Reajuste('A', 1950));
console.log(Reajuste('B', 1950));
console.log(Reajuste('C', 1950));
console.log(Reajuste('D', 1950));