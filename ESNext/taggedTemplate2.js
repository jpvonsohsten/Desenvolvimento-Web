function real (partes, ...valores) {
    const resultado = []
    valores.forEach((valor, indice) => {
        valor = isNaN(valor) ? valor : `R$${valor.toFixed(2)}`
        resultado.push(partes[indice], valor, '.')
    })
    return resultado.join('')
}
const nome = 'Copo de vidro'
const preco = 29.99
const precoParcela = 11

console.log(real `Produto: ${nome} \nEstá a venda por 1x de ${preco} \nOu 3x de ${precoParcela}.`)