// par nome/valor
const saudacao = 'Opa'  // contexto léxico(físicamente armazenado)1

function exec() {
    const saudacao = 'Fala ai'  // contexto léxico 2
    return saudacao
}

// Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'João',
    idade: 21,
    peso: 70,
    endereco:{
        logradouro: 'Estrada do pau ferro',
        numero: 1407
    }
}
console.log(saudacao);
console.log(exec());
console.log(cliente);