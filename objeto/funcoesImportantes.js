const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 15
}

console.log(Object.keys(pessoa)) // 'keys' pega as chaves do objeto q eu executar
console.log(Object.values(pessoa)) // 'values' pega apenas os valores do objeto
console.log(Object.entries(pessoa)) // 'entries' vai me informar tudo o que eu coloquei de entrada no objeto em Arrays e subArrays

Object.entries(pessoa).forEach(([chave, valor]) => {   // 'forEach' percorre todo o Array
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {   // 'defineProperty' serve para adicionar um objeto com propriedades detalhadas
    enumerable: true, // diz se é numerável ou não
    writable: false, // diz se posso reescrever ou não
    value: '04/05/2020'
})

pessoa.dataNascimento = '01/01/2019'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

//Object.assign (ECMAScript 2015)
const dest = { a: 1}
const o1 = { b: 2}
const o2 = { c: 3, a: 4}
const obj = Object.assign(dest, o1, o2) // assign serve para concatenar um objeto. OBS: sobrescreve valores dependendo de como declarado.

Object.freeze(obj)
obj.c = 1234
console.log(obj)