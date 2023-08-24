// Coleção dinâmica de pares chave/valor
const produto = new Object
produto.nome = 'Carro'
produto ['Marca do carro'] = 'Ferrari'
produto.preco = 790000

delete produto.nome
console.log(produto)

const entrega = {
    empresa: 'Amazon',
    codigo: '0930333995060',
    cliente: {
        nome: 'João',
        idade: 21,
        endereco: 'Estrada do bananal',
        numero: 580
    },
    remetentes: [{
        nome: 'André',
        idade: 22
    },  {
        nome: 'Brenda',
        idade: 22
    }],
    calcularEntrega: function(prazoEntrega) {

    }
}

entrega.codigo = 23333333
entrega['cliente']['endereco'] = 'Freguesia, jacarépagua-RJ'
delete entrega.calcularEntrega
console.log(entrega)