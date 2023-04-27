// Novo recurso do ES2015 que desestrutura as estruturas(objeto{},array[]...)

const pessoa = {
    nome: 'Samuel',
    idade: 7,
    endereco:{
        logradouro: 'São Domingos de Rana - Portugal',
        numero: 20
    }
}

const { nome, idade } = pessoa  //retira o 'nome' e a 'idade' do objeto 'pessoa'
console.log(nome, idade);

const { nome: n, idade: i } = pessoa // trocou o nome e a idade para uma variavel
console.log(n, i);

const { sobrenome, bemHumorada = true } = pessoa  // desestruturando algo indefinido
console.log(sobrenome, bemHumorada);

const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep);