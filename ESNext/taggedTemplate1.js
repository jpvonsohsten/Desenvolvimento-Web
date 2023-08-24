// Tagged Templates - processa o template string dentro de uma função
function tag(partes, ...valores) {
    console.log(partes)
    console.log(valores)
    return 'Outra String'
}

const aluno = 'João'
const situacao = 'Aprovado'
console.log(tag `${aluno} está ${situacao}.`)