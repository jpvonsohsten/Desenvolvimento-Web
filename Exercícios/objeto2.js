console.log(typeof Object);
console.log(typeof new Object);  // new transformou minha função em um objeto(foi instanciado)

const Cliente = function() {}
console.log(typeof Cliente);
console.log(typeof new Cliente);

class Produto {} // ES 2015 (ES6)
console.log(typeof Produto);
console.log(typeof new Produto());