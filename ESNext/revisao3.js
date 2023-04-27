// ES8: Object.values/Object.entries
const obj = {a: 1, b: 2, c: 3}
console.log(Object.values(obj)) // values mostra os valores dos atributos em um array.
console.log(Object.entries(obj)) // entries mostra a matriz dos atributos em um array.

// Melhorias na Notação Literal
const nome = 'Carla'
const pessoa = {
    nome,   // não precisa mais de um objeto para declarar.
    ola() { // não precisa mais escrever 'function' para declarar a função dentro do objeto.
        return 'Boa Tarde!'
    }
}

console.log(pessoa.nome, pessoa.ola())

// Class
class Animal {}
class Cachorro extends Animal { // classe utiliza da herança e também é uma função.
    latir() {
        return 'HULF HULF!'
    }
}

console.log(new Cachorro().latir()) // para chamar a classe deve-se usar a palavra 'new' junto do objeto criado.