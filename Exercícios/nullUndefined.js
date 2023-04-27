let valor // nao inicializada

console.log(valor);  //nao atribuiu valor

//console.log(valor2); nao declarou a variável

valor = null  // null é a auseência de valor

console.log(valor);

//console.log(valor.toString()); Vai dar ERRO!

const produto = {}
console.log(produto.preco);
console.log(produto);

produto.preco = 5.00
console.log(produto);

produto.preco = undefined  // evitar atribuir undefined
console.log(!!produto.preco);
//delete produto.preco vai tirar o atributo do objeto
console.log(produto);

produto.preco = null // sem preço
console.log(!!produto.preco);
console.log(produto);