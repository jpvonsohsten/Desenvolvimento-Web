// let e const

{

    var a = 2
    let b = 3
    console.log(b)

}
//console.log(b) - erro porque let nao funciona fora do escopo do bloco
console.log(a)  // Já o var funciona porque é uma variável global

// Template String

const produto = 'iPad'
const preco = 5000.00
console.log(`${produto} ta pelo preco de 
${preco}R$ 
e ta bem caro!`)

// Destructuring
const [l, e, ...tras] = "João"
console.log(l, e, tras) // serve pra desestruturar um código, retira coisas de um array, de uma string e etc...

const [x, , y] = [1, 2, 3]  // se eu colocar um espaço vazio entre os dados do array eu obtenho o ultimo valor lido, assim ignorando o 2.
console.log(x, y)

const { idade: i, nome } = { nome: 'João', idade: 21 }  // mudei o valor de idade acrescentando o 'i', assim consigo desestruturar os atributos de um objeto.
console.log(i, nome)