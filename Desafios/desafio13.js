/* Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.*/


function fds(dia) {
    switch(dia) {
        case 1:
            return 'Hj é Domingo ou seja Fim de semana'
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            return 'Segunda a Sexta é dia útil'
        case 7:
            return 'Sabadão Fim de semana'
        default:
            return "Não existe esse dia da semana"
    }
}

console.log(fds(1))
console.log(fds(2))
console.log(fds(3))
console.log(fds(4))
console.log(fds(5))
console.log(fds(6))
console.log(fds(7))
console.log(fds(8))
console.log(fds('aaa'))
console.log(fds(0))