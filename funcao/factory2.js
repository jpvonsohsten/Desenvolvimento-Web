// Factory simples 2
function criarProduto(nome , preco) {
    return {
        nome,
        preco,
        desconto: 25
    }
}

console.log(criarProduto('TV 50 Polegadas', 3899.99))
console.log(criarProduto('iPhone 12 PRO MAX', 7359.90))