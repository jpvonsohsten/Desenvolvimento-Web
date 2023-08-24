const tecnologias =  new Map()
tecnologias.set('react', { framework: false })
tecnologias.set('angular', { framework: true })

console.log(tecnologias.react) // errado
console.log(tecnologias.get('react').framework) // get obtem a chave especifica do valor colocado.

const chavesVariadas = new Map ([
    [function () { }, 'Função'],
    [{}, 'Objeto'],
    [123, 'Números'],
])

chavesVariadas.forEach((vl, ch) => {
    console.log(vl, ch)
})

console.log(chavesVariadas.has(123))    // 'has' diz se um elemento está ou não contido dentro desse map.
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size)    // 'size' diz quantos elementos estão dentro desse map, como um foi excluído então sobraram 2.
console.log(chavesVariadas.set(123, 'a'))
console.log(chavesVariadas.set(123, 'a'))   // set permite armazenar valores únicos de qualquer tipo.
console.log(chavesVariadas.set(456, 'b'))
console.log(chavesVariadas.set(789, 'c'))
console.log(chavesVariadas.set(101112, 'd'))
chavesVariadas.delete(101112, 'd')
console.log(chavesVariadas.has(101112, 'd'))
console.log(chavesVariadas)