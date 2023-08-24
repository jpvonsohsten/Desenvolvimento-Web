// Arrow Function

const soma = (a, b) => a + b    // função arrow de uma única linha com return implíicito
console.log(soma(25, 25))

// Arrow Function (this)
const lexico1 = () => console.log(this === exports) // this sempre aponta para o arquivo exports dentro da função arrow.
const lexico2 = lexico1.bind({})    // mesmo tentando utilizar o bind para apontar para um objeto, o this continua sendo === ao exports.

lexico1()
lexico2()

// parametro default

function log(texto = 'Node') {
    console.log(texto)
}
log()
log('Assumindo um novo valor daqui')    // assume o valor do parâmetro padrão que no caso era o 'Node'.

// operador rest (agrupar)

function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(3, 6, 9, 12))