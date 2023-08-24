/* Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá conter
quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais.
Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e
mostre o resultado no console. Todos os elementos do vetor resultado deverão aparecer no console. */


let vetorInt = [1, 2, 3, 4, 5]
let vetorString = ['João', 'Felipe', 'Bruno', 'André']
let vetorDouble = [1.2, 2.3, 3.4, 5.5]

function concatenar() {
    resultado = []
    for(let i = 0; i < arguments.length; i++) {
        resultado = resultado.concat(arguments[i])
    }
    return resultado
}

console.log(concatenar(vetorInt, vetorDouble))
console.log(concatenar(vetorString, vetorDouble))