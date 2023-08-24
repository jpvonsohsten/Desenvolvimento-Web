const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop()  //remove o ultimo elemento do array
console.log(pilotos)

pilotos.push('Versttapen')
console.log(pilotos)

pilotos.shift() // remove o primeiro elemento do array
console.log(pilotos)

pilotos.unshift('Hamilton') // adiciona um elemento na primeira posição do array
console.log(pilotos)

// Adicionando e removendo elementos no array com 'splice'...

//Adicionando:
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

//Removendo:
pilotos.splice(3, 1) // massa foi de base denovo :(
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // retorna um novo array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // não vai pegar o elemento 4 final
console.log(algunsPilotos2)