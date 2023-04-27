const prod1 = {};          // as chaves são uma forma de criar um 'objeto'
prod1.nome = 'iPhoneX';
prod1.preco = 9000.00;
prod1['Desconto Imperdível'] = 0.40;  // evitar atributos com espaço

console.log(prod1);

const prod2 = {
    nome: 'Camisa Adidas',
    preco: 249.90
};
'{"nome": "Camisa Adidas", preco: 79.90}'// assim eu transformo o array em JSON que é uma string. Obs: JSON são delimitados por aspas simples

console.log(prod2);