// pessoa -> 123 -> {...}
const pessoa = {nome: 'João'}
pessoa.nome = 'Pedro' // aqui da certo porque estou mudando o objeto e não a constante pessoa
console.log(pessoa)

// pessoa -> 456 -> {...}
//pessoa = {nome: 'Maria'} // vai dar erro porque estou tentando modificar a constante

Object.freeze(pessoa) // 'freeze' impede de modificar ou adicionar objetos
pessoa.nome = 'Claudio'
pessoa.idade = 21
delete pessoa.nome // vai deletar apenas o segundo porque foi declarado depois do 'freeze'

const pessoaConst = Object.freeze({Nome: 'João'}) // fazendo isso eu faço com que o codigo seja inalterado
pessoaConst.Nome = 'Maria'
pessoaConst.idade = 21
console.log(pessoaConst)