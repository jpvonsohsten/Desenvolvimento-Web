console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array ('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])

aprovados[3] = 'João' // forma de adicionar umm elemento array ou substituir
aprovados.push('Pedro') // adiciona um elemento no array de forma simples
console.log(aprovados[3])
console.log(aprovados.length) // percorre o array e mostra a quantidade de elementos

aprovados[9] = 'Douglas'
console.log(aprovados.length)
console.log(aprovados[7] === undefined)

console.log(aprovados)
aprovados.sort()    //altera a forma do array ordenando os elementos
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 2, 'Elemento1', 'Elemento2')
 /* 'splice' adiciona e remove elementos ao mesmo tempo. Sendo o '1' o fator de onde começa, o '2' a quantidade a ser excluida, e as strings são os elementos adicionados
console.log(aprovados) */
console.log(aprovados)