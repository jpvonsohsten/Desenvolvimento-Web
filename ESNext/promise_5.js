function funcionarOuNao (valor, chanceErro) {
    return new Promise((resolve, reject) => {
        if(Math.random() < chanceErro) {
            reject('Erro ocorrido!')
        } else {
            resolve(valor)
        }
    })
}

funcionarOuNao('Testando', 0.5)
    .then(v => console.log(`Valor: ${v}`))
    .catch(err => console.log(`Erro: ${err}`))
    .then(() => console.log('Fim!'))