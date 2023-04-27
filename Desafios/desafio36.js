/* Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
o valor do elemento for maior que 5. */


let vetor = [1, 2, 3, 4, 5]

function multVetor(vetor, multiplicador) {
    let resultadoVetor = []
    vetor.forEach(elemento => {
        resultadoVetor.push(elemento * multiplicador)
    })

    return resultadoVetor
}

console.log(multVetor(vetor, 3))
console.log(multVetor(vetor, 4))
console.log(multVetor(vetor, 5))
console.log(multVetor(vetor, 20))
console.log(multVetor(vetor, vetor))