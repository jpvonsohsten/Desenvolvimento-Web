require('./global')

console.log(meuAPP.saudacao())

meuAPP.nome = 'Mudei o nome no global???' // resolvido com o Object.freeze()
console.log(meuAPP.nome)