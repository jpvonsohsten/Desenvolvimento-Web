function getPreco (imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

globalThis.preco = 20 // assim funciona
globalThis.desc = 0.1
console.log(getPreco()) // nao vai funcionar porque está tentando acessar o escopo global
console.log(produto.getPreco())

const carro = { preco: 49990, desc: 0.20}
console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

console.log(getPreco.call(carro, 0.17, '$')) // no call passa diretamente os parametros que seriam passados na função. Contexto e parâmetros.
console.log(getPreco.apply(carro, [0.17, '$'])) // no apply os parametros devem ser colocados dentro de um array.