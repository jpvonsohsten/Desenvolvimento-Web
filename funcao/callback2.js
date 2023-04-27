const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

// Sem o callback
let notasBaixas1 = []
for(let i in notas) {
    if (notas[i] < 7) {
    notasBaixas1.push(notas[i]) // 'push' vai adicionar um elemento no array.
    }
}

console.log(notasBaixas1)

// Com o callback
 const notasBaixas2 = notas.filter(function (nota) { // 'filter' filtra os elementos de um array retornando true ou false com os determinados critérios.
    return nota < 7
})

console.log(notasBaixas2)

const notasMenorQue7 = nota => nota < 7
const notasBaixas3 = notas.filter(notasMenorQue7)
console.log(notasBaixas3)