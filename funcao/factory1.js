const prod1 = {
    nome: '...',
    preco: 29.90
}

const prod2 = {
    nome: '...',
    preco: 49.90
}

// Factory simples
function criarPessoa() {
    return {
        nome: 'Carlos',
        sobrenome: 'Pereira',
        idade: 25,
        endereço: {
            logradouro: 'Rua carlos palut',
            num: 510
        }
    }
}
console.log(criarPessoa())