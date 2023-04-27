/* Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
e imprime a quantidade no console. */

function numeroNegativo(vetor) {
let qtdNegativos = 0
for(let i = 0; i < vetor.length; i++) {
    if(vetor[i] < 0) {
        qtdNegativos++

        }
    }
    return `Negativos: ${qtdNegativos}`
}
vetor = [10, 5, -7, 3, -1, 3, -11, -20, -3, -9]
console.log(numeroNegativo(vetor))